import * as React from 'react'
import { Icons } from '../../Icons'
import { NavStyle } from './NavBarStyle'

function NavBar() {
  return (
    <NavStyle>
      Latest Tweets
      <Icons tag="Hero" width="22.5px" height="22.5px" fill="#1da1f2" />
    </NavStyle>
  )
}
export { NavBar }
