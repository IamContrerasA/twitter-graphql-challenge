import * as React from 'react'
import { Icons } from '../../Icons'

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
  const icons = ['Image', 'Gif', 'Poll', 'Emoji', 'Schedule']
  return (
    <NewTweetStyle>
      <NewTweetUserPhoto src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FXwdmPbkmqKjK3vueMPQ0ZLGlayEU2CApg&usqp=CAU" />
      <NewTweetWrapper>
        <NewTweetContent placeholder="What's happening?" />
        <NewTweetChooser>Everyone can read</NewTweetChooser>
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
  )
}

export { NewTweet }
