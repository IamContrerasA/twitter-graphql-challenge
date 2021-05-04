import * as React from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import { Tweet } from '../api'

type TweetsContextType = {
  tweetsData: Tweet[]
  fetchMore: (args: { variables: { page: number } }) => void
  newTweet: (arg: { text: string; picture: string }) => void
  likeTweet: (arg: { tweetId: string }, index: number) => void
  unlikeTweet: (arg: { tweetId: string }, index: number) => void
  deleteTweet: (arg: { tweetId: string }, index: number) => void
}

const TweetsContext = React.createContext<TweetsContextType | undefined>(
  undefined,
)

const useTweetsContext = () => {
  const context = React.useContext(TweetsContext)
  if (context === undefined) {
    throw new Error(
      'You tried to use tweets context consumer outside a provider',
    )
  }
  return context
}

type ChildrenProps = {
  children: React.ReactNode
}

const TweetsManagerContext = ({ children }: ChildrenProps) => {
  const [tweetsData, setTweetsData] = React.useState<Tweet[]>([])

  const GET_TWEETS = gql`
    query tweets($page: Number!) {
      response(page: $page)
    }
  `

  const NEW_TWEET = gql`
    mutation tweet($text: String, $picture: String) {
      newTweet(text: $text, picture: $picture)
    }
  `

  const LIKE_TWEET = gql`
    mutation like($tweetId: String) {
      sucess(text: $tweetId)
    }
  `

  const UNLIKE_TWEET = gql`
    mutation unlike($tweetId: String) {
      sucess(text: $tweetId)
    }
  `

  const DELETE_TWEET = gql`
    mutation delete($tweetId: String) {
      sucess(text: $tweetId)
    }
  `

  const { loading, data, fetchMore } = useQuery(GET_TWEETS, {
    variables: { page: 1 },
  })
  const [newTweetMutation] = useMutation(NEW_TWEET)
  const [likeTweetMutation] = useMutation(LIKE_TWEET)
  const [unlikeTweetMutation] = useMutation(UNLIKE_TWEET)
  const [deleteTweetMutation] = useMutation(DELETE_TWEET)

  //first render, load the first 10 tweets with 2 fakes
  React.useEffect(() => {
    if (loading) return
    const fakeTweets = [
      {
        id: 'fakeId1',
        authorId: {
          picture: {
            thumbnail:
              'https://pbs.twimg.com/profile_images/1280897745906270214/_lUXucxE.png',
          },
          name: 'Upwork',
          publicName: '@Name',
        },
        text: `How alternative staffing solutions help organizations improve their #TalentSourcing :
          👏Ability to scale business as needed
          👏Access to qualified #RemoteWorkers globally
          👏Improved productivity with faster hires and streamlined processes`,
        url: {
          url: 'https://upwork.com',
          img:
            'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5f3bc4c67b9de11ad00e1395_Onboarding%20Talent.png',
          title:
            'How Alternative Staffing Solutions Stronger Recruitment | Upwork',
          description: `Talent sourcing is important for enterprise growth, and
        alternative staffing solutions like Upwork enable hiring managers
        to focus on the...`,
          domain: 'upwork.com',
        },

        replayCount: 0,
        retweetCount: 998,
        likeCount: 999,
        createdAt: '6sn',
      },
      {
        id: 'fakeId2',
        authorId: {
          picture: {
            thumbnail:
              'https://assets.materialup.com/uploads/347c48be-3ed3-4e80-87a0-3353405f0239/0x0ss-85.jpg',
          },
          name: 'Nba',
          publicName: '@Nba',
        },

        text: `#3 in West LAC vs. #2 in West PHX #watch
          ▪️ AD, #Lakers take on Beal, surging Wizards
          ▪️ Zion/Jokic, Dame/Ja, and more on NBA LP
          
          📺: ESPN
          📱💻: NBA League Pass #subscribe!
          ➡️: https://app.link.nba.com/e/leaguepass
        `,
        picture:
          'https://pbs.twimg.com/media/E0CRN-EXEAAgsHV?format=jpg&name=medium',
        replayCount: 35,
        retweetCount: 114,
        likeCount: 797,
        createdAt: '7h',
      },
    ]
    setTweetsData([...fakeTweets, ...data.response.tweets])
  }, [data, loading])

  async function newTweet(args: { text: string; picture: string }) {
    const response = await newTweetMutation({
      variables: args,
    })
    setTweetsData([response.data.newTweet, ...tweetsData])
  }

  async function likeTweet(args: { tweetId: string }, index: number) {
    const response = await likeTweetMutation({
      variables: args,
    })
    if (response.data.sucess)
      setTweetsData([
        ...tweetsData.slice(0, index),
        response.data.updatedTweet,
        ...tweetsData.slice(index + 1),
      ])
  }

  async function unlikeTweet(args: { tweetId: string }, index: number) {
    const response = await unlikeTweetMutation({
      variables: args,
    })
    if (response.data.sucess)
      setTweetsData([
        ...tweetsData.slice(0, index),
        response.data.updatedTweet,
        ...tweetsData.slice(index + 1),
      ])
  }

  async function deleteTweet(args: { tweetId: string }, index: number) {
    const response = await deleteTweetMutation({
      variables: args,
    })
    if (response.data.sucess)
      setTweetsData([
        ...tweetsData.slice(0, index),
        ...tweetsData.slice(index + 1),
      ])
  }

  const contextValue: TweetsContextType = {
    tweetsData,
    fetchMore,
    newTweet,
    likeTweet,
    unlikeTweet,
    deleteTweet,
  }

  return (
    <TweetsContext.Provider value={contextValue}>
      {children}
    </TweetsContext.Provider>
  )
}

export { useTweetsContext, TweetsManagerContext }
