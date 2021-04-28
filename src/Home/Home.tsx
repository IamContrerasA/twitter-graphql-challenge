import * as React from 'react'
import { Trends } from '../Trends'
import { Tweets } from '../Tweets'
import { NewTweet } from '../Tweets/NewTweet'
import { NavBar } from '../ui/NavBar'
import { SideBar } from '../ui/SideBar'
import { UserManagerContext } from '../user/UserContext'
import {
  HomeStyle,
  HomeContentStyle,
  HomeContentTweetsScroll,
} from './HomeStyle'

function Home() {
  return (
    <HomeStyle>
      <UserManagerContext>
        <SideBar />
        <HomeContentStyle>
          <NavBar />
          <NewTweet />
          <HomeContentTweetsScroll>
            <Tweets />
            <Tweets />
          </HomeContentTweetsScroll>
        </HomeContentStyle>
        <Trends />
      </UserManagerContext>
    </HomeStyle>
  )
}

export { Home }
