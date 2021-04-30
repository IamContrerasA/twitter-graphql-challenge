import { graphql } from 'msw'
import { createMockDB, createTweet, currentUserId } from './createMockDB'

const db = createMockDB()

const paginate = (arr: any[], pageNumber: number, pageSize: number) =>
  arr.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)

const tweet = graphql.link('http://localhost:8080/')

export const handlers = [
  tweet.query('currentUser', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({
        user: db.users.get(currentUserId),
      }),
    )
  }),

  tweet.query('tweets', (req, res, ctx) => {
    const { page } = req.variables

    const pageCount = 10
    const tweets = [...db.tweets.values()]
    const tweetSet = paginate(tweets, page, pageCount)
    const sortedByTweets = tweetSet.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    const response = {
      tweets: sortedByTweets,
      pageCount: Math.ceil(tweets.length / pageCount),
    }
    return res(
      ctx.status(200),
      ctx.data({
        response,
      }),
    )
  }),

  tweet.mutation('tweet', (req, res, ctx) => {
    const { text, picture } = req.variables
    const newTweet = createTweet(text, picture)
    return res(ctx.status(200), ctx.data({ newTweet }))
  }),

  tweet.mutation('like', (req, res, ctx) => {
    const { tweetId } = req.variables
    const tweetData = db.tweets.get(tweetId)

    if (!tweetData) {
      return res(ctx.status(404))
    }

    const updatedTweet = {
      ...tweetData,
      hasLiked: true,
      likeCount: tweetData.likeCount + 1,
    }

    db.tweets.set(tweetData.id, updatedTweet)

    return res(ctx.status(200), ctx.data({ sucess: true, updatedTweet }))
  }),

  tweet.mutation('unlike', (req, res, ctx) => {
    const { tweetId } = req.variables
    const tweetData = db.tweets.get(tweetId)

    if (!tweetData) {
      return res(ctx.status(404))
    }

    const updatedTweet = {
      ...tweetData,
      hasLiked: false,
      likeCount: Math.max(tweetData.likeCount - 1, 0),
    }

    db.tweets.set(tweetData.id, updatedTweet)

    return res(ctx.status(200), ctx.data({ sucess: true, updatedTweet }))
  }),
]
