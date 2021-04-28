import styled from 'styled-components'

const TweetsStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  padding: 15px 25px;
  border-bottom: 1px solid #2f3336;
`

const TweetProfilePhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`

const TweetHeader = styled.div`
  font-weight: bold;
  font-size: 15px;
  display: flex;
  align-items: center;
`

const TweetHeaderUserInfoName = styled.div`
  margin-right: 7.5px;
`

const TweetHeaderUserInfoPublic = styled.div`
  font-weight: normal;
  color: #6e767d;
  margin-left: 7.5px;
`

const TweetHeaderUserInfoTimeAgo = styled.div`
  color: #6e767d;
  margin-left: 7.5px;
`

const TweetInfo = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.2;
`

const TweetInfoHashtag = styled.span`
  color: #1da1f2;
`

const TweetAditional = styled.div`
  border: 1px solid #6e767d;
  box-sizing: border-box;
  border-radius: 10px;
`

const TweetPhoto = styled.img`
  width: 100%;
  border-radius: 9px;
`

const TweetAditionalContent = styled.div`
  padding: 10px;
`

const TweetAditionalTitle = styled.div`
  font-weight: bold;
  color: white;
`

const TweetAditionalText = styled.div`
  color: #6e767d;
`

const TweetAditionalLink = styled.div`
  display: flex;
  align-items: center;
  color: #6e767d;
`

const TweetFooter = styled.div`
  color: #6e767d;
  margin-top: 6px;
  display: grid;
  grid-template-columns: 140px 24px 140px 24px 140px 40px;
  align-items: center;
`

export {
  TweetsStyle,
  TweetProfilePhoto,
  TweetHeader,
  TweetHeaderUserInfoName,
  TweetHeaderUserInfoPublic,
  TweetHeaderUserInfoTimeAgo,
  TweetInfo,
  TweetInfoHashtag,
  TweetAditional,
  TweetPhoto,
  TweetAditionalContent,
  TweetAditionalTitle,
  TweetAditionalText,
  TweetAditionalLink,
  TweetFooter,
}
