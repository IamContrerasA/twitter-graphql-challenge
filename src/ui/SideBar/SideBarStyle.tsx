import styled from 'styled-components'

type SideBarProps = {
  isSelected: boolean
}

const SideBarStyle = styled.div`
  padding: 15px 10px;
  height: 745px;
  width: 275px;
`

const SideBarTweeterIconStyle = styled.div`
  margin-left: 10px;
`

const SideBarItemStyle = styled.div<SideBarProps>`
  ${(props) =>
    props.isSelected
      ? `background: rgba(29, 161, 242, 0.3);
         border-radius: 43px;
         width: min-content;`
      : ''};

  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
  padding-right: 20px;
  :hover {
    background: rgba(29, 161, 242, 0.3);
    width: min-content;
    border-radius: 43px;
    cursor: default;
  }
`

const SideBarItemTextStyle = styled.div<SideBarProps>`
  margin-left: 20px;
  font-weight: bold;
  font-size: 19px;
  color: ${(props) => (props.isSelected ? '#1DA1F2' : 'white')};
`

const SideBarButtonStyle = styled.button`
  margin-top: 20px;
  width: 209px;
  height: 47px;
  background: #1da1f2;
  border: none;
  border-radius: 34px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  :hover {
    background: #126ea7;
  }
  :active {
    transform: translateY(2px);
  }
`

const SideBarUserInfoStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 255px;
  height: 60px;
  background: rgba(29, 161, 242, 0.08);
  border-radius: 60px;
  padding: 10px;
`

const SideBarUserInfoPhotoStyle = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const SideBarUserInfoNames = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`

const SideBarUserInfoName = styled.div`
  color: white;
  font-weight: bold;
  font-size: 15px;
`

const SideBarUserInfoPublic = styled.div`
  color: #6e767d;
  font-size: 15px;
`

const SideBarUserInfoArrowIcon = styled.div`
  margin-left: 57px;
`

export {
  SideBarItemStyle,
  SideBarButtonStyle,
  SideBarUserInfoStyle,
  SideBarItemTextStyle,
  SideBarStyle,
  SideBarTweeterIconStyle,
  SideBarUserInfoPhotoStyle,
  SideBarUserInfoNames,
  SideBarUserInfoName,
  SideBarUserInfoPublic,
  SideBarUserInfoArrowIcon,
}
