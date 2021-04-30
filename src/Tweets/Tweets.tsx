import * as React from 'react'
import { Icons } from '../Icons'
import { useTweetsContext } from './TweetsContext'

import {
  TweetScroll,
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
  const { tweetsData, fetchMore, likeTweet, unlikeTweet } = useTweetsContext()
  const [page, setPage] = React.useState(2)

  function scrollEvent(e: React.UIEvent<HTMLElement>) {
    const bottom =
      e.currentTarget.scrollHeight -
        e.currentTarget.scrollTop -
        e.currentTarget.clientHeight <
      1

    if (bottom) {
      setPage(page + 1)

      fetchMore({
        variables: {
          page: page,
        },
      })
    }
  }

  function handleHashtag(e: string) {
    const regex = /#\w*/i
    const regexResult = regex.exec(e)
    if (!regexResult) return e
    return (
      <div>
        {e.substring(0, regexResult.index)}
        <TweetInfoHashtag>{regexResult[0]}</TweetInfoHashtag>
        {e.substring(regexResult.index + regexResult[0].length, e.length)}
      </div>
    )
  }

  return (
    <TweetScroll onScroll={scrollEvent}>
      {tweetsData.map((tweet: any, index: any) => {
        return (
          <TweetsStyle key={index}>
            <TweetProfilePhoto src={tweet.authorId.picture.thumbnail} />
            <div>
              <TweetHeader>
                <TweetHeaderUserInfoName>
                  {tweet.authorId.name}
                </TweetHeaderUserInfoName>
                <Icons
                  tag="Confirmed"
                  width="22.5px"
                  height="22.5px"
                  fill="#1da1f2"
                />
                <TweetHeaderUserInfoPublic>
                  {tweet.authorId.publicName}
                </TweetHeaderUserInfoPublic>
                <TweetHeaderUserInfoTimeAgo>
                  . {tweet.createdAt}
                </TweetHeaderUserInfoTimeAgo>
              </TweetHeader>
              <TweetInfo>
                {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                  tweet.text?.split(`\n`).map((e: string, i: number) => {
                    return <div key={i}>{handleHashtag(e)}</div>
                  })
                }
              </TweetInfo>
              {tweet.aditionalPhoto || tweet.picture ? (
                <TweetAditional>
                  <TweetPhoto src={tweet.aditionalPhoto || tweet.picture} />
                  {tweet.aditionalTitle ||
                  tweet.aditionalText ||
                  tweet.aditionalLink ? (
                    <TweetAditionalContent>
                      <TweetAditionalTitle>
                        {tweet.aditionalTitle}
                      </TweetAditionalTitle>
                      <TweetAditionalText>
                        {tweet.aditionalText}
                      </TweetAditionalText>
                      <TweetAditionalLink>
                        <Icons
                          tag="TweetLinked"
                          width="19px"
                          height="19px"
                          fill="#6e767d"
                        />
                        {tweet.aditionalLink}
                      </TweetAditionalLink>
                    </TweetAditionalContent>
                  ) : null}
                </TweetAditional>
              ) : null}
              <TweetFooter>
                <Icons tag="Reply" width="19px" height="19px" fill="#6e767d" />
                {tweet.replayCount}
                <Icons
                  tag="Retweet"
                  width="19px"
                  height="19px"
                  fill="#6e767d"
                />
                {tweet.retweetCount}

                <Icons
                  tag="Like"
                  width="19px"
                  height="19px"
                  fill={tweet.hasLiked ? 'red' : '#6e767d'}
                  onClick={() =>
                    tweet.hasLiked
                      ? unlikeTweet({ tweetId: tweet.id }, index)
                      : likeTweet({ tweetId: tweet.id }, index)
                  }
                />
                {tweet.likeCount}
                <Icons tag="Share" width="19px" height="19px" fill="#6e767d" />
              </TweetFooter>
            </div>
          </TweetsStyle>
        )
      })}
    </TweetScroll>
  )
}

export { Tweets }
