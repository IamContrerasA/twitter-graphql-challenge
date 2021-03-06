import * as React from 'react'
import { Icons } from '../../Icons'
import { useUserContext } from '../../user/UserContext'
import { useTweetsContext } from '../TweetsContext'

import {
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
} from './NewTweetStyle'

function NewTweet() {
  const { user } = useUserContext()
  const { newTweet } = useTweetsContext()
  const icons = ['Image', 'Gif', 'Poll', 'Emoji', 'Schedule']
  const [write, setWrite] = React.useState('')
  const [file, setFile] = React.useState('')

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    if (!write) return
    newTweet({ text: write, picture: file })
  }

  React.useEffect(() => {
    const tweetContent = document.querySelector('[aria-label="tweetContent"]')
    if (!tweetContent) return
    tweetContent.addEventListener('input', function (e: any) {
      setWrite(e.target.innerText)
    })
  }, [])

  function handlePhoto(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return
    setFile(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <form onSubmit={handleSubmit}>
      <NewTweetStyle>
        <NewTweetUserPhoto src={user?.picture.thumbnail} />
        <NewTweetWrapper>
          <NewTweetContent
            aria-label="tweetContent"
            placeholder="What's happening?"
            contentEditable
          />
          {file && (
            <div>
              <NewTweetPhoto src={file} />
              <NewTweetPhotoClose onClick={() => setFile('')}>
                &times;
              </NewTweetPhotoClose>
            </div>
          )}
          <div>
            <NewTweetChooser>Everyone can read</NewTweetChooser>
          </div>
          <NewTweetFooter>
            <NewTweetIcons>
              {icons.map((element, index) => {
                return (
                  <div key={index}>
                    <label htmlFor={`icon_${index}`}>
                      <input
                        style={{ display: 'none' }}
                        aria-label={`icon_${index}`}
                        id={`icon_${index}`}
                        name={`icon_${index}`}
                        type="file"
                        onChange={handlePhoto}
                      />
                      <Icons
                        tag={element}
                        width="22.5px"
                        height="22.5px"
                        fill="#1da1f2"
                      />
                    </label>
                  </div>
                )
              })}
            </NewTweetIcons>
            <NewTweetButton>Tweet</NewTweetButton>
          </NewTweetFooter>
        </NewTweetWrapper>
      </NewTweetStyle>
    </form>
  )
}

export { NewTweet }
