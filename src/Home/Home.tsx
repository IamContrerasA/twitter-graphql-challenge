import * as React from 'react'
import { NavBar } from '../ui/NavBar'
import { SideBar } from '../ui/SideBar'
import { HomeStyle } from './HomeStyle'

function Home() {
  return (
    <HomeStyle>
      <NavBar />

      <div
        style={{
          color: 'white',
          border: '1px',
          borderStyle: 'solid',
          borderColor: '#92a8d1',
        }}
      >
        Mt twitter asd
      </div>
      <SideBar />
    </HomeStyle>
  )
}

export { Home }
