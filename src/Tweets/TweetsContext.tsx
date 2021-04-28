import * as React from 'react'

type TweetsContextType = {
  tweetsData: any[]
}

const TweetsContext = React.createContext<TweetsContextType | undefined>(
  undefined,
)

const useTweetsContext = () => {
  const context = React.useContext(TweetsContext)
  if (context === undefined) {
    throw new Error('You tried to use post context consumer outside a provider')
  }
  return context
}

type ChildrenProps = {
  children: React.ReactNode
}

const TweetsManagerContext = ({ children }: ChildrenProps) => {
  const [tweetsData, setTweetsData] = React.useState<any[]>([])

  React.useEffect(() => {
    const getCurrentUserData = async () => {
      const tweets = new Promise((resolve) => {
        setTimeout(() => {
          // eslint-disable-next-line no-console
          resolve(console.log('my tweets api'))
        }, 500)
      })
      await tweets
      const fakeTweets = [
        {
          photo:
            'https://pbs.twimg.com/profile_images/1280897745906270214/_lUXucxE.png',
          authorName: 'Upwork',
          authorPublic: '@Name',
          timeAgo: '6sn',
          info: `How alternative staffing solutions help organizations improve their #TalentSourcing :
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
          countReplay: 0,
          countRetweet: 998,
          countLike: 999,
        },
        {
          photo:
            'https://assets.materialup.com/uploads/347c48be-3ed3-4e80-87a0-3353405f0239/0x0ss-85.jpg',
          authorName: 'Nba',
          authorPublic: '@Nba',
          timeAgo: '7h',
          info: `#3 in West LAC vs. #2 in West PHX #watch
            ▪️ AD, #Lakers take on Beal, surging Wizards
            ▪️ Zion/Jokic, Dame/Ja, and more on NBA LP
            
            📺: ESPN
            📱💻: NBA League Pass #subscribe!
            ➡️: https://app.link.nba.com/e/leaguepass
          `,
          aditionalPhoto:
            'https://pbs.twimg.com/media/E0CRN-EXEAAgsHV?format=jpg&name=medium',
          countReplay: 35,
          countRetweet: 114,
          countLike: 797,
        },
      ]
      setTweetsData(fakeTweets)
    }
    getCurrentUserData().catch(() => 'Error on get user data')
  }, [])

  const contextValue: any = {
    tweetsData,
  }

  return (
    <TweetsContext.Provider value={contextValue}>
      {children}
    </TweetsContext.Provider>
  )
}

export { useTweetsContext, TweetsManagerContext }
