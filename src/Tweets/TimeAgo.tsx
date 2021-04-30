import * as React from 'react'
import { format } from 'timeago.js'
import { TweetHeaderUserInfoTimeAgo } from './TweetsStyle'

type TimeAgoProps = {
  date: string
}

function TimeAgo({ date }: TimeAgoProps) {
  return (
    <TweetHeaderUserInfoTimeAgo> . {format(date)}</TweetHeaderUserInfoTimeAgo>
  )
}

export { TimeAgo }
