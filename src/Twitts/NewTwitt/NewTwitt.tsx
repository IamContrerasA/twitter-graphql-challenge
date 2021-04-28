import * as React from 'react'
import { Icons } from '../../Icons'

import {
  NewTwittStyle,
  NewTwittUserPhoto,
  NewTwittWrapper,
  NewTwittContent,
  NewTwittChooser,
  NewTwittFooter,
  NewTwittIcons,
  NewTwittButton,
} from './NewTwittStyle'

function NewTwitt() {
  const icons = ['Image', 'Gif', 'Poll', 'Emoji', 'Schedule']
  return (
    <NewTwittStyle>
      <NewTwittUserPhoto src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FXwdmPbkmqKjK3vueMPQ0ZLGlayEU2CApg&usqp=CAU" />
      <NewTwittWrapper>
        <NewTwittContent placeholder="What's happening?" />
        <NewTwittChooser>Everyone can read</NewTwittChooser>
        <NewTwittFooter>
          <NewTwittIcons>
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
          </NewTwittIcons>
          <NewTwittButton>Tweet</NewTwittButton>
        </NewTwittFooter>
      </NewTwittWrapper>
    </NewTwittStyle>
  )
}

export { NewTwitt }
