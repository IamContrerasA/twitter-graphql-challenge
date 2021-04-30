import * as React from 'react'
import { Icons } from '../../Icons'
import { useUserContext } from '../../user/UserContext'
import { useTweetsContext } from '../TweetsContext'

import {
  NewTweetStyle,
  NewTweetUserPhoto,
  NewTweetWrapper,
  NewTweetContent,
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

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    if (!write) return
    newTweet({ text: write })
  }

  React.useEffect(() => {
    const tweetContent = document.querySelector('[aria-label="tweetContent"]')
    if (!tweetContent) return
    tweetContent.addEventListener('input', function (e: any) {
      setWrite(e.target.innerText)
    })
  }, [])

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
          <div>
            <NewTweetChooser>Everyone can read</NewTweetChooser>
          </div>
          <NewTweetFooter>
            <NewTweetIcons>
              {icons.map((element, index) => {
                return (
                  <Icons
                    key={index}
                    tag={element}
                    width="22.5px"
                    height="22.5px"
                    fill="#1da1f2"
                  />
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
