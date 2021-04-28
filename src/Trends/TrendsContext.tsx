import * as React from 'react'

type TrendsContextType = {
  trendsData: any[]
}

const TrendsContext = React.createContext<TrendsContextType | undefined>(
  undefined,
)

const useTrendsContext = () => {
  const context = React.useContext(TrendsContext)
  if (context === undefined) {
    throw new Error(
      'You tried to use trends context consumer outside a provider',
    )
  }
  return context
}

type ChildrenProps = {
  children: React.ReactNode
}

const TrendsManagerContext = ({ children }: ChildrenProps) => {
  const [trendsData, setTrendsData] = React.useState<any[]>([])

  React.useEffect(() => {
    const getCurrentUserData = async () => {
      const trends = new Promise((resolve) => {
        setTimeout(() => {
          // eslint-disable-next-line no-console
          resolve(console.log('my trends api'))
        }, 500)
      })
      await trends
      const fakeTrends = [
        {
          title: 'Turkey',
          hashtag: '#KKTC',
          with: 'Kıbrıs',
          text: 'Gittiğiniz her yerde hayata özgürce dokunmanız için!',
          Tweets: '9,042',
          promoted: 'xxx',
        },
        {
          title: 'Turkey',
          hashtag: '#KKTC',
          with: 'Kıbrıs',
        },
        {
          hashtag: '#hayatadokun',
          text: 'Gittiğiniz her yerde hayata özgürce dokunmanız için!',
          promoted: 'Deep Fresh Türkiye',
        },
        {
          title: 'Turkey',
          hashtag: '#LisanslıPsikologlar',
          Tweets: '9,042',
          promoted: 'xxx',
        },
        {
          hashtag: '#figmaogren',
          Tweets: '999',
          promoted: 'me',
        },
      ]
      setTrendsData(fakeTrends)
    }
    getCurrentUserData().catch(() => 'Error on get user data')
  }, [])

  const contextValue: any = {
    trendsData,
  }

  return (
    <TrendsContext.Provider value={contextValue}>
      {children}
    </TrendsContext.Provider>
  )
}

export { useTrendsContext, TrendsManagerContext }
