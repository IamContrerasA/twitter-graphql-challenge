import * as React from 'react'
import { Icons } from '../Icons'
import { useUserContext } from '../user/UserContext'
import { TimeAgo } from './TimeAgo'
import { useTweetsContext } from './TweetsContext'

import {
  TweetScroll,
  TweetsStyle,
  TweetProfilePhoto,
  TweetHeader,
  TweetHeaderUserInfo,
  TweetHeaderUserInfoName,
  TweetHeaderUserInfoPublic,
  TweetHeaderOptions,
  TweetHeaderDeleteOptionButton,
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
  const { user } = useUserContext()
  const {
    tweetsData,
    fetchMore,
    likeTweet,
    unlikeTweet,
    deleteTweet,
  } = useTweetsContext()
  const [page, setPage] = React.useState(2)
  const [deleteButton, setDeleteButton] = React.useState({
    index: -1,
    isShown: false,
  })

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

  function useOutsideChangeDeleteButton(ref: any) {
    React.useEffect(() => {
      function handleClickOutside(event: any) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (ref.current && !ref.current.contains(event.target)) {
          setDeleteButton({
            index: -1,
            isShown: false,
          })
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = React.useRef(null)
  useOutsideChangeDeleteButton(wrapperRef)

  return (
    <TweetScroll onScroll={scrollEvent}>
      {tweetsData.map((tweet: any, index: any) => {
        return (
          <TweetsStyle key={index}>
            <TweetProfilePhoto src={tweet.authorId.picture.thumbnail} />
            <div>
              <TweetHeader>
                <TweetHeaderUserInfo>
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
                  <TimeAgo date={tweet.createdAt} />
                </TweetHeaderUserInfo>
                {tweet.authorId.id === user.id ? (
                  <TweetHeaderOptions>
                    {deleteButton.isShown && deleteButton.index === index && (
                      <TweetHeaderDeleteOptionButton
                        ref={wrapperRef}
                        onClick={() =>
                          deleteTweet({ tweetId: tweet.id }, index)
                        }
                      >
                        delete
                      </TweetHeaderDeleteOptionButton>
                    )}
                    <Icons
                      tag="MoreCircle"
                      width="15px"
                      height="15px"
                      onClick={() =>
                        setDeleteButton({
                          index,
                          isShown: !deleteButton.isShown,
                        })
                      }
                    />
                  </TweetHeaderOptions>
                ) : null}
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
