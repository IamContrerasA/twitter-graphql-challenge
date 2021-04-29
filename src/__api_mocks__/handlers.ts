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
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    const page = Number(req.url.searchParams.get('page')) || 1

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
]
