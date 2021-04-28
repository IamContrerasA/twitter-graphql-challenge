import * as React from 'react'
import { Trends } from '../Trends'
import { Twitts } from '../Twitts'
import { NewTwitt } from '../Twitts/NewTwitt'
import { NavBar } from '../ui/NavBar'
import { SideBar } from '../ui/SideBar'
import {
  HomeStyle,
  HomeContentStyle,
  HomeContentTwittsScroll,
} from './HomeStyle'

function Home() {
  return (
    <HomeStyle>
      <SideBar />
      <HomeContentStyle>
        <NavBar />
        <NewTwitt />
        <HomeContentTwittsScroll>
          <Twitts />
          <Twitts />
        </HomeContentTwittsScroll>
      </HomeContentStyle>
      <Trends />
    </HomeStyle>
  )
}

export { Home }
