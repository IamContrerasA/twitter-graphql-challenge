import * as React from 'react'
import {
  NavStyle,
  NavMenusStyle,
  NavBrandStyle,
  NavBrandLogoStyle,
  NavBrandAvatarImgStyle,
} from './NavBarStyle'

function NavBar() {
  return (
    <div aria-label="navBar">
      <NavStyle>
        <NavMenusStyle>
          <NavBrandStyle>
            <NavBrandLogoStyle />
            <NavBrandAvatarImgStyle alt="avatarImg" />
          </NavBrandStyle>
        </NavMenusStyle>
      </NavStyle>
    </div>
  )
}
export { NavBar }
