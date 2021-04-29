import * as React from 'react'
import { Icons } from '../../Icons'
import { useUserContext } from '../../user/UserContext'
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
  const { user } = useUserContext()

  const [icons, setIcons] = React.useState([
    { name: 'Home', isSelected: true },
    { name: 'Explore', isSelected: false },
    { name: 'Notifications', isSelected: false },
    { name: 'Messages', isSelected: false },
    { name: 'Profile', isSelected: false },
    { name: 'More', isSelected: false },
  ])

  function handleIcons(element: { name: string; isSelected: boolean }) {
    const iconsCopy = [...icons]
    iconsCopy.map((e) =>
      e === element ? (e.isSelected = true) : (e.isSelected = false),
    )
    setIcons(iconsCopy)
  }

  return (
    <div>
      <SideBarStyle>
        <SideBarTweeterIconStyle>
          <Icons tag="Twitter" width="27px" height="27px" />
        </SideBarTweeterIconStyle>

        {icons.map((element, index) => {
          return (
            <SideBarItemStyle
              key={index}
              isSelected={element.isSelected}
              onClick={() => handleIcons(element)}
            >
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
        <SideBarUserInfoPhotoStyle src={user?.picture.thumbnail} />
        <SideBarUserInfoNames>
          <SideBarUserInfoName>{user?.name}</SideBarUserInfoName>
          <SideBarUserInfoPublic>{user?.publicName}</SideBarUserInfoPublic>
        </SideBarUserInfoNames>
        <SideBarUserInfoArrowIcon>
          <Icons tag="Extend" width="20px" height="20px" />
        </SideBarUserInfoArrowIcon>
      </SideBarUserInfoStyle>
    </div>
  )
}

export { SideBar }
