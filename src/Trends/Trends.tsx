import * as React from 'react'
import { Icons } from '../Icons'
import { useTrendsContext } from './TrendsContext'
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
  const { trendsData } = useTrendsContext()

  return (
    <TrendStyle>
      <TrendSearchStyle>
        <Icons tag="Search" width="24px" height="24px" fill="#6E767D" />
        <TrendSearchInputStyle placeholder="Search Twitter" />
      </TrendSearchStyle>
      {trendsData.map((element, index) => {
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
              {element.text && <div>{element.text}</div>}
              {element.with && (
                <div style={{ marginTop: '4px' }}>
                  Trending with
                  <TrendPostTextWith href="#">
                    {' '}
                    {element.with}
                  </TrendPostTextWith>
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
