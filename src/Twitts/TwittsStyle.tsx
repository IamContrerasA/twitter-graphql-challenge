import styled from 'styled-components'

const TwittsStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  padding: 15px 25px;
  border-bottom: 1px solid #2f3336;
`

const TwittProfilePhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`

const TwittHeader = styled.div`
  font-weight: bold;
  font-size: 15px;
  display: flex;
  align-items: center;
`

const TwittHeaderUserInfoName = styled.div`
  margin-right: 7.5px;
`

const TwittHeaderUserInfoPublic = styled.div`
  font-weight: normal;
  color: #6e767d;
  margin-left: 7.5px;
`

const TwittHeaderUserInfoTimeAgo = styled.div`
  color: #6e767d;
  margin-left: 7.5px;
`

const TwittInfo = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.2;
`

const TwittInfoHashtag = styled.span`
  color: #1da1f2;
`

const TwittAditional = styled.div`
  border: 1px solid #6e767d;
  box-sizing: border-box;
  border-radius: 10px;
`

const TwittPhoto = styled.img`
  width: 100%;
  border-radius: 9px;
`

const TwittAditionalContent = styled.div`
  padding: 10px;
`

const TwittAditionalTitle = styled.div`
  font-weight: bold;
  color: white;
`

const TwittAditionalText = styled.div`
  color: #6e767d;
`

const TwittAditionalLink = styled.div`
  display: flex;
  align-items: center;
  color: #6e767d;
`

const TwittFooter = styled.div`
  color: #6e767d;
  margin-top: 6px;
  display: grid;
  grid-template-columns: 140px 24px 140px 24px 140px 40px;
  align-items: center;
`

export {
  TwittsStyle,
  TwittProfilePhoto,
  TwittHeader,
  TwittHeaderUserInfoName,
  TwittHeaderUserInfoPublic,
  TwittHeaderUserInfoTimeAgo,
  TwittInfo,
  TwittInfoHashtag,
  TwittAditional,
  TwittPhoto,
  TwittAditionalContent,
  TwittAditionalTitle,
  TwittAditionalText,
  TwittAditionalLink,
  TwittFooter,
}
