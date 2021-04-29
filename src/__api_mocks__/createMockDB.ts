import fakerjs from 'faker'
import { User, Tweet } from '../api'
import { currentUser } from '../currentUser'
import unsplashImages from './tweetImages.json'
import users from './users.json'

interface UpdatedFaker {
  image: {
    unsplash: {
      avatar: () => string
      buildings: () => string
      food: () => string
      image: () => string
      imageUrl: () => string
      nature: () => string
      objects: () => string
      people: () => string
      technology: () => string
    }
  }
}

const faker = fakerjs as typeof fakerjs & UpdatedFaker

faker.seed(1234)

export const currentUserId = faker.random.uuid()

const unusedImages = new Set(unsplashImages)
const getUniqueRandomImage = () => {
  const unusedImagesArray = [...unusedImages]
  const randomImage = faker.helpers.randomize<string>(unusedImagesArray)
  unusedImages.delete(randomImage)
  return randomImage
}

const userTable = new Map<string, Omit<User, 'tweets'>>()
const tweetsTable = new Map<string, Tweet>()

export const createUser = (
  user: Pick<User, 'name' | 'publicName' | 'dob' | 'picture'> & {
    id?: string
  },
) => ({
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  id: user.id || faker.random.uuid(),
  name: user.name,
  publicName: user.publicName,
  dob: user.dob,
  picture: user.picture,
})

export const createTweet = (text: string, picture: string, url?: string) => {
  const tweet = {
    id: faker.random.uuid(),
    authorId: { ...currentUser, id: currentUserId, tweets: [] },
    url,
    picture,
    text,
    likeCount: 0,
    replayCount: 0,
    retweetCount: 0,
    hasLiked: false,
    hasReplay: false,
    hasRetweet: false,
    createdAt: new Date().toISOString(),
  }

  tweetsTable.set(tweet.id, tweet)

  return tweet
}

export const createMockDB = () => {
  const maxTweetsCount = unsplashImages.length
  const maxTweetsCountPerUser = maxTweetsCount / users.length

  users.forEach((userData) => {
    const user = createUser(userData)

    let tweetCountForUser = faker.random.number({
      min: 2,
      max: maxTweetsCountPerUser + 10,
    })
    const availableTweetsCount = maxTweetsCount - tweetsTable.size
    if (tweetsTable.size !== 0 && availableTweetsCount < tweetCountForUser) {
      tweetCountForUser = faker.random.number({
        min: 0,
        max: availableTweetsCount,
      })
    }

    for (let i = 0; i < tweetCountForUser; i++) {
      const tweet = {
        id: faker.random.uuid(),
        authorId: user,
        picture: getUniqueRandomImage(),
        text: faker.lorem.text(),
        url: '',
        likeCount: faker.random.number({ min: 0, max: 10_000 }),
        replayCount: faker.random.number({ min: 0, max: 10_000 }),
        retweetCount: faker.random.number({ min: 0, max: 10_000 }),
        hasLiked: false,
        hasReplay: false,
        hasRetweet: false,
        createdAt: faker.date.past().toISOString(),
      }

      tweetsTable.set(tweet.id, tweet)
    }
    userTable.set(user.id, user)
  })

  userTable.set(
    currentUserId,
    createUser({ ...currentUser, id: currentUserId }),
  )

  const db = {
    tweets: tweetsTable,
    users: userTable,
  }

  return db
}
