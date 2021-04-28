import * as React from 'react'
import { Icons } from '../Icons'

import {
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
} from './TwittsStyle'

function Twitts() {
  return (
    <TwittsStyle>
      <TwittProfilePhoto src="https://pbs.twimg.com/profile_images/1280897745906270214/_lUXucxE.png" />
      <div>
        <TwittHeader>
          <TwittHeaderUserInfoName>Upwork</TwittHeaderUserInfoName>
          <Icons
            tag="Confirmed"
            width="22.5px"
            height="22.5px"
            fill="#1da1f2"
          />
          <TwittHeaderUserInfoPublic> @Name</TwittHeaderUserInfoPublic>
          <TwittHeaderUserInfoTimeAgo> . 6sn</TwittHeaderUserInfoTimeAgo>
        </TwittHeader>
        <TwittInfo>
          How alternative staffing solutions help organizations improve their
          <TwittInfoHashtag> #TalentSourcing</TwittInfoHashtag>:
          <br />
          👏Ability to scale business as needed <br />
          👏Access to qualified
          <TwittInfoHashtag> #RemoteWorkers</TwittInfoHashtag> globally
          <br />
          👏Improved productivity with faster hires and streamlined processes
        </TwittInfo>
        <TwittAditional>
          <TwittPhoto src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5f3bc4c67b9de11ad00e1395_Onboarding%20Talent.png" />
          <TwittAditionalContent>
            <TwittAditionalTitle>
              How Alternative Staffing Solutions Stronger Recruitment | Upwork
            </TwittAditionalTitle>
            <TwittAditionalText>
              Talent sourcing is important for enterprise growth, and
              alternative staffing solutions like Upwork enable hiring managers
              to focus on the...
            </TwittAditionalText>
            <TwittAditionalLink>
              <Icons
                tag="TweetLinked"
                width="19px"
                height="19px"
                fill="#6e767d"
              />
              upwork.com
            </TwittAditionalLink>
          </TwittAditionalContent>
        </TwittAditional>
        <TwittFooter>
          <Icons tag="Reply" width="19px" height="19px" fill="#6e767d" />
          <Icons tag="Retweet" width="19px" height="19px" fill="#6e767d" />
          998
          <Icons tag="Like" width="19px" height="19px" fill="#6e767d" /> 999
          <Icons tag="Share" width="19px" height="19px" fill="#6e767d" />
        </TwittFooter>
      </div>
    </TwittsStyle>
  )
}

export { Twitts }
