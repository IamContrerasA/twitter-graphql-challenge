import * as React from 'react'
import { Trends } from '../Trends'
import { TrendsManagerContext } from '../Trends/TrendsContext'
import { Tweets } from '../Tweets'
import { NewTweet } from '../Tweets/NewTweet'
import { TweetsManagerContext } from '../Tweets/TweetsContext'
import { NavBar } from '../ui/NavBar'
import { SideBar } from '../ui/SideBar'
import { UserManagerContext } from '../user/UserContext'
import { HomeStyle, HomeContentStyle } from './HomeStyle'

function Home() {
  return (
    <HomeStyle>
      <UserManagerContext>
        <SideBar />
        <HomeContentStyle>
          <NavBar />
          <TweetsManagerContext>
            <NewTweet />
            <Tweets />
          </TweetsManagerContext>
        </HomeContentStyle>
        <TrendsManagerContext>
          <Trends />
        </TrendsManagerContext>
      </UserManagerContext>
    </HomeStyle>
  )
}

export { Home }
