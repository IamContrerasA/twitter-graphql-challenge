import * as React from 'react'
import { gql, useQuery } from '@apollo/client'

type TweetsContextType = {
  tweetsData: any[]
  newTweet: (arg: any) => void
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
  const [tweetsData, setTweetsData] = React.useState<any[]>([])

  const GET_TWEETS = gql`
    query tweets($page: Number!) {
      response(page: $page)
    }
  `
  const { loading, data } = useQuery(GET_TWEETS, {
    variables: {
      page: 1,
    },
  })

  React.useEffect(() => {
    if (loading) return
    const fakeTweets = [
      {
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
        aditionalPhoto:
          'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5f3bc4c67b9de11ad00e1395_Onboarding%20Talent.png',
        aditionalTitle:
          'How Alternative Staffing Solutions Stronger Recruitment | Upwork',
        aditionalText: `Talent sourcing is important for enterprise growth, and
        alternative staffing solutions like Upwork enable hiring managers
        to focus on the...`,
        aditionalLink: 'upwork.com',
        replayCount: 0,
        retweetCount: 998,
        likeCount: 999,
        createdAt: '6sn',
      },
      {
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
        aditionalPhoto:
          'https://pbs.twimg.com/media/E0CRN-EXEAAgsHV?format=jpg&name=medium',
        replayCount: 35,
        retweetCount: 114,
        likeCount: 797,
        createdAt: '7h',
      },
    ]
    setTweetsData([...fakeTweets, ...data.response.tweets])
  }, [data, loading])

  async function newTweet(args: any) {
    const response = new Promise((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line no-console
        resolve(console.log('my newTweet api'))
      }, 500)
    })
    await response
    setTweetsData([
      { ...args, likeCount: 0, replayCount: 0, retweetCount: 0 },
      ...tweetsData,
    ])
  }

  const contextValue: any = {
    tweetsData,
    newTweet,
  }

  return (
    <TweetsContext.Provider value={contextValue}>
      {children}
    </TweetsContext.Provider>
  )
}

export { useTweetsContext, TweetsManagerContext }
