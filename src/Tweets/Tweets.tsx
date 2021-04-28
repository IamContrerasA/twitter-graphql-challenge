import * as React from 'react'
import { Icons } from '../Icons'

import {
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
} from './TweetsStyle'

function Tweets() {
  return (
    <TweetsStyle>
      <TweetProfilePhoto src="https://pbs.twimg.com/profile_images/1280897745906270214/_lUXucxE.png" />
      <div>
        <TweetHeader>
          <TweetHeaderUserInfoName>Upwork</TweetHeaderUserInfoName>
          <Icons
            tag="Confirmed"
            width="22.5px"
            height="22.5px"
            fill="#1da1f2"
          />
          <TweetHeaderUserInfoPublic> @Name</TweetHeaderUserInfoPublic>
          <TweetHeaderUserInfoTimeAgo> . 6sn</TweetHeaderUserInfoTimeAgo>
        </TweetHeader>
        <TweetInfo>
          How alternative staffing solutions help organizations improve their
          <TweetInfoHashtag> #TalentSourcing</TweetInfoHashtag>:
          <br />
          👏Ability to scale business as needed <br />
          👏Access to qualified
          <TweetInfoHashtag> #RemoteWorkers</TweetInfoHashtag> globally
          <br />
          👏Improved productivity with faster hires and streamlined processes
        </TweetInfo>
        <TweetAditional>
          <TweetPhoto src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5f3bc4c67b9de11ad00e1395_Onboarding%20Talent.png" />
          <TweetAditionalContent>
            <TweetAditionalTitle>
              How Alternative Staffing Solutions Stronger Recruitment | Upwork
            </TweetAditionalTitle>
            <TweetAditionalText>
              Talent sourcing is important for enterprise growth, and
              alternative staffing solutions like Upwork enable hiring managers
              to focus on the...
            </TweetAditionalText>
            <TweetAditionalLink>
              <Icons
                tag="TweetLinked"
                width="19px"
                height="19px"
                fill="#6e767d"
              />
              upwork.com
            </TweetAditionalLink>
          </TweetAditionalContent>
        </TweetAditional>
        <TweetFooter>
          <Icons tag="Reply" width="19px" height="19px" fill="#6e767d" />
          <Icons tag="Retweet" width="19px" height="19px" fill="#6e767d" />
          998
          <Icons tag="Like" width="19px" height="19px" fill="#6e767d" /> 999
          <Icons tag="Share" width="19px" height="19px" fill="#6e767d" />
        </TweetFooter>
      </div>
    </TweetsStyle>
  )
}

export { Tweets }
