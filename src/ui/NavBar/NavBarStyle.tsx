import styled from 'styled-components'

const NavStyle = styled.div`
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  background-color: #fff;
`

const NavMenusStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 18%;
  margin-right: 18%;
`

const NavBrandStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const NavBrandAvatarImgStyle = styled.img`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: 1px solid#DCDCDC;
`
const NavBrandLogoStyle = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 32px;
  width: auto;
  padding-top: 10px;
  padding-bottom: 10px;
`

export {
  NavStyle,
  NavMenusStyle,
  NavBrandStyle,
  NavBrandLogoStyle,
  NavBrandAvatarImgStyle,
}
