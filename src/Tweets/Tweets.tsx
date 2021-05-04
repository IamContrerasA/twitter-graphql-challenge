import * as React from 'react'
import { Tweet } from '../api'
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
  TweetUrl,
  TweetUrlImg,
  TweetUrlContent,
  TweetUrlTitle,
  TweetUrlDescription,
  TweetUrlDomain,
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

  type wordsWithIndex = {
    word: string
    index: number
  }

  function handleHashtagURL(e: string) {
    //const regexHashtag = /#(\w+)/g
    const regexHashtag = /(http?\w:\/\/)\w[^\s]+|#(\w+[^\s])/g
    let regexResult = regexHashtag.exec(e)
    if (regexResult == null) return e

    const wordsWithIndex: wordsWithIndex[] = []
    while (regexResult != null) {
      wordsWithIndex.push({ word: regexResult[0], index: regexResult.index })
      regexResult = regexHashtag.exec(e)
    }

    const newSentenceWithHashtag = (
      <div>
        {wordsWithIndex.map((element, index) => {
          return (
            <span key={index}>
              {e.substring(
                index === 0
                  ? 0
                  : wordsWithIndex[index - 1].index +
                      wordsWithIndex[index - 1].word.length +
                      1,
                element.index,
              )}
              <TweetInfoHashtag href="#">{`${element.word} `}</TweetInfoHashtag>
            </span>
          )
        })}
        {e.substr(
          wordsWithIndex[wordsWithIndex.length - 1].index +
            wordsWithIndex[wordsWithIndex.length - 1].word.length +
            1,
        )}
      </div>
    )
    // return e
    return newSentenceWithHashtag
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
      {tweetsData.map((tweet: Tweet, index: number) => {
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
                {tweet.authorId.id === user?.id ? (
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
                {tweet.text.split(`\n`).map((e: string, i: number) => {
                  return <div key={i}>{handleHashtagURL(e)}</div>
                })}
              </TweetInfo>
              {tweet.hasURL || tweet.picture ? (
                <TweetUrl>
                  <TweetUrlImg src={tweet.hasURL?.img ?? tweet.picture} />
                  {tweet.hasURL ? (
                    <TweetUrlContent>
                      <TweetUrlTitle>{tweet.hasURL.title}</TweetUrlTitle>
                      <TweetUrlDescription>
                        {tweet.hasURL.description}
                      </TweetUrlDescription>
                      <TweetUrlDomain>
                        <Icons
                          tag="TweetLinked"
                          width="19px"
                          height="19px"
                          fill="#6e767d"
                        />
                        {tweet.hasURL.domain}
                      </TweetUrlDomain>
                    </TweetUrlContent>
                  ) : null}
                </TweetUrl>
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
