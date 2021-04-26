import fakerjs from 'faker'
import { User, Post } from '../api'
import { currentUser } from '../currentUser'
import unsplashImages from './postImages.json'
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

const userTable = new Map<string, Omit<User, 'posts'>>()
const postsTable = new Map<string, Post>()

export const createUser = (
  user: Pick<User, 'firstName' | 'lastName' | 'dob' | 'picture'> & {
    id?: string
  },
) => ({
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  id: user.id || faker.random.uuid(),
  username: `@${user.firstName}.${user.lastName}`.toLowerCase(),
  firstName: user.firstName,
  lastName: user.lastName,
  dob: user.dob,
  picture: user.picture,
})

export const createPost = (text: string, picture: string) => {
  const post = {
    id: faker.random.uuid(),
    authorId: currentUserId,
    picture,
    text,
    likeCount: 0,
    hasLiked: false,
    createdAt: new Date().toISOString(),
  }

  postsTable.set(post.id, post)

  return post
}

export const createMockDB = () => {
  const maxPostsCount = unsplashImages.length
  const maxPostsCountPerUser = maxPostsCount / users.length

  users.forEach((userData) => {
    const user = createUser(userData)

    let postCountForUser = faker.random.number({
      min: 2,
      max: maxPostsCountPerUser + 10,
    })
    const availablePostsCount = maxPostsCount - postsTable.size
    if (postsTable.size !== 0 && availablePostsCount < postCountForUser) {
      postCountForUser = faker.random.number({
        min: 0,
        max: availablePostsCount,
      })
    }

    for (let i = 0; i < postCountForUser; i++) {
      const post = {
        id: faker.random.uuid(),
        authorId: user.id,
        picture: getUniqueRandomImage(),
        text: faker.lorem.text(),
        likeCount: faker.random.number({ min: 0, max: 10_000 }),
        hasLiked: false,
        createdAt: faker.date.past().toISOString(),
      }

      postsTable.set(post.id, post)
    }
    userTable.set(user.id, user)
  })

  userTable.set(
    currentUserId,
    createUser({ ...currentUser, id: currentUserId }),
  )

  const db = {
    posts: postsTable,
    users: userTable,
  }

  return db
}
