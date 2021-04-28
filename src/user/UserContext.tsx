import * as React from 'react'

type UserContextValue = {
  user: any
}

const UserContext = React.createContext<UserContextValue | undefined>(undefined)

const useUserContext = () => {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error('You tried to use user context consumer outside a provider')
  }
  return context
}

export type ChildrenProps = {
  children: React.ReactNode
}

const UserManagerContext = ({ children }: ChildrenProps) => {
  const [currentUser, setCurrentUser] = React.useState<any>()

  React.useEffect(() => {
    const getCurrentUserData = async () => {
      const user = new Promise((resolve) => {
        setTimeout(() => {
          // eslint-disable-next-line no-console
          resolve(console.log('my user api'))
        }, 500)
      })
      await user
      const fakeUser = {
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FXwdmPbkmqKjK3vueMPQ0ZLGlayEU2CApg&usqp=CAU',
        name: 'Özer SUBAŞI 💪🏽',
        public: '@ozerSubasi',
      }
      setCurrentUser(fakeUser)
    }
    getCurrentUserData().catch(() => 'Error on get user data')
  }, [])

  const contextValue: UserContextValue = {
    user: currentUser,
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

export { useUserContext, UserManagerContext }
