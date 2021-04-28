import * as React from 'react'
import { Icons } from '../Icons'
import {
  TrendStyle,
  TrendSearchStyle,
  TrendSearchInputStyle,
  TrendPostStyle,
  TrendPostTitleStyle,
  TrendPostHashtagStyle,
  TrendPostTextStyle,
  TrendPostTextWith,
  TrendPostPromoteTextStyle,
} from './TrendsStyle'

function Trends() {
  const [trends] = React.useState([
    {
      title: 'Turkey',
      hashtag: '#KKTC',
      with: 'Kıbrıs',
      text: 'Gittiğiniz her yerde hayata özgürce dokunmanız için!',
      Tweets: '9,042',
      promoted: 'xxx',
    },
    {
      title: 'Turkey',
      hashtag: '#KKTC',
      with: 'Kıbrıs',
    },
    {
      hashtag: '#hayatadokun',
      text: 'Gittiğiniz her yerde hayata özgürce dokunmanız için!',
      promoted: 'Deep Fresh Türkiye',
    },
    {
      title: 'Turkey',
      hashtag: '#LisanslıPsikologlar',
      Tweets: '9,042',
      promoted: 'xxx',
    },
    {
      hashtag: '#figmaogren',
      Tweets: '999',
      promoted: 'me',
    },
  ])
  return (
    <TrendStyle>
      <TrendSearchStyle>
        <Icons tag="Search" width="24px" height="24px" fill="#6E767D" />
        <TrendSearchInputStyle placeholder="Search Twitter" />
      </TrendSearchStyle>
      {trends.map((element, index) => {
        return (
          <TrendPostStyle key={index}>
            {element.title && (
              <TrendPostTitleStyle>
                Trending in {element.title}
                <Icons tag="Dotts" width="20px" height="20px" fill="#6E767D" />
              </TrendPostTitleStyle>
            )}
            <TrendPostHashtagStyle>{element.hashtag}</TrendPostHashtagStyle>
            <TrendPostTextStyle>
              {element.text && (
                <div>
                  Gitiniasndasdnalksdas dasdasdasdasdasnjkasndkjas a a a
                  ndkjasndkjasinalsdnalksndlkasnd
                </div>
              )}
              {element.with && (
                <div style={{ marginTop: '4px' }}>
                  Trending with
                  <TrendPostTextWith href="#"> kibris</TrendPostTextWith>
                </div>
              )}
              {element.Tweets && (
                <div style={{ marginTop: '4px' }}>{element.Tweets} Tweets</div>
              )}
              {element.promoted && (
                <TrendPostPromoteTextStyle>
                  <Icons
                    tag="Promote"
                    width="13px"
                    height="13px"
                    fill="#6E767D"
                  />
                  Promoted by {element.promoted}
                </TrendPostPromoteTextStyle>
              )}
            </TrendPostTextStyle>
          </TrendPostStyle>
        )
      })}
    </TrendStyle>
  )
}

export { Trends }
