import * as React from 'react'
import { gql, useQuery } from '@apollo/client'

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

  const GET_USER = gql`
    query currentUser {
      user
    }
  `
  const { loading, data } = useQuery(GET_USER)

  React.useEffect(() => {
    if (loading) return
    setCurrentUser(data.user)
  }, [data, loading])

  const contextValue: UserContextValue = {
    user: currentUser,
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

export { useUserContext, UserManagerContext }
