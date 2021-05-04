import styled from 'styled-components'

const NewTweetStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 19px;
  padding: 10px 25px;
  border-bottom: 10px solid #2f3336;
`

const NewTweetUserPhoto = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
`

const NewTweetWrapper = styled.div`
  margin-left: 20px;
  width: 100%;
  max-width: 600px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
`
const NewTweetContent = styled.span`
  font-family: 'Roboto', sans-serif;
  outline: none;
  margin-left: 10px;
  font-size: 19px;
  color: white;
  display: block;
  overflow: scroll;
  min-height: 40px;
  margin-top: 15px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #2f3336;
    width: 4px;
    -webkit-border-radius: 1ex;
  }
  ::-webkit-scrollbar-corner {
    background: none;
  }
  :empty::before {
    content: "What's happening?";
  }
`

const NewTweetPhoto = styled.img`
  width: 100px;
  height: 100px;
`
const NewTweetPhotoClose = styled.button`
  position: relative;
  background-color: transparent;
  color: #2f3336;
  border: none;
  z-index: 1;
  left: -21px;
  bottom: 86px;
  :hover {
    background-color: #2f3336;
    color: black;
  }
`

const NewTweetChooser = styled.div`
  width: 160px;
  height: 30px;
  background: rgba(29, 161, 242, 0.3);
  border-radius: 30px;
  font-size: 13px;
  font-weight: bold;
  color: #1da1f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
`

const NewTweetFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  border-top: 1px solid #2f3336;
  padding-top: 15px;
`

const NewTweetIcons = styled.div`
  width: 100px;
  display: flex;
  width: 200px;
  justify-content: space-around;
`

const NewTweetButton = styled.button`
  background: rgba(29, 161, 242, 0.3);
  border-radius: 34px;
  width: 77px;
  height: 39px;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 15px;
  :hover {
    background: #126ea7;
  }
  :active {
    transform: translateY(2px);
  }
`

export {
  NewTweetStyle,
  NewTweetUserPhoto,
  NewTweetWrapper,
  NewTweetContent,
  NewTweetPhoto,
  NewTweetPhotoClose,
  NewTweetChooser,
  NewTweetFooter,
  NewTweetIcons,
  NewTweetButton,
}
