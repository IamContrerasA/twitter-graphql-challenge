import * as React from 'react'
import { Icons } from '../../Icons'
import {
  SideBarButtonStyle,
  SideBarItemStyle,
  SideBarItemTextStyle,
  SideBarUserInfoStyle,
  SideBarStyle,
  SideBarTweeterIconStyle,
  SideBarUserInfoPhotoStyle,
  SideBarUserInfoNames,
  SideBarUserInfoName,
  SideBarUserInfoPublic,
  SideBarUserInfoArrowIcon,
} from './SideBarStyle'

function SideBar() {
  const [icons] = React.useState([
    { name: 'Home', isSelected: true },
    { name: 'Explore', isSelected: false },
    { name: 'Notifications', isSelected: false },
    { name: 'Messages', isSelected: false },
    { name: 'Profile', isSelected: false },
    { name: 'More', isSelected: false },
  ])

  return (
    <div>
      <SideBarStyle>
        <SideBarTweeterIconStyle>
          <Icons tag="Twitter" width="27px" height="27px" />
        </SideBarTweeterIconStyle>

        {icons.map((element, index) => {
          return (
            <SideBarItemStyle key={index} isSelected={element.isSelected}>
              <Icons
                tag={element.isSelected ? `${element.name}Fill` : element.name}
                width="27px"
                height="27px"
                fill={element.isSelected ? '#1DA1F2' : 'white'}
              />
              <SideBarItemTextStyle isSelected={element.isSelected}>
                {element.name}
              </SideBarItemTextStyle>
            </SideBarItemStyle>
          )
        })}
        <SideBarButtonStyle>Tweet</SideBarButtonStyle>
      </SideBarStyle>
      <SideBarUserInfoStyle>
        <SideBarUserInfoPhotoStyle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FXwdmPbkmqKjK3vueMPQ0ZLGlayEU2CApg&usqp=CAU" />
        <SideBarUserInfoNames>
          <SideBarUserInfoName>Özer SUBAŞI 💪🏽</SideBarUserInfoName>
          <SideBarUserInfoPublic>@ozerSubasi</SideBarUserInfoPublic>
        </SideBarUserInfoNames>
        <SideBarUserInfoArrowIcon>
          <Icons tag="Extend" width="20px" height="20px" />
        </SideBarUserInfoArrowIcon>
      </SideBarUserInfoStyle>
    </div>
  )
}

export { SideBar }
