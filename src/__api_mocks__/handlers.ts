import { graphql } from 'msw'
import { createMockDB, createPost, currentUserId } from './createMockDB'

const db = createMockDB()

const paginate = (arr: any[], pageNumber: number, pageSize: number) =>
  arr.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)

const tweet = graphql.link('http://localhost:8080/')

export const handlers = [
  // Handles a "GetUserInfo" query
  tweet.query('currentUser', (req, res, ctx) => {
    return res(
      ctx.data({
        user: db.users.get(currentUserId),
      }),
    )
  }),

  // rest.get('/currentUser', (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(db.users.get(currentUserId)))
  // }),
  // rest.get('/posts', (req, res, ctx) => {
  //   // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  //   const page = Number(req.url.searchParams.get('page')) || 1

  //   const pageCount = 10
  //   const posts = [...db.posts.values()]
  //   const postSet = paginate(posts, page, pageCount)
  //   const sortedByPosts = postSet.sort(
  //     (a, b) =>
  //       new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  //   )

  //   const response = {
  //     posts: sortedByPosts,
  //     pageCount: Math.ceil(posts.length / pageCount),
  //   }
  //   return res(ctx.status(200), ctx.json(response))
  // }),
  // rest.get('/posts/:id', (req, res, ctx) => {
  //   const { id } = req.params

  //   const post = db.posts.get(id)

  //   return res(ctx.status(200), ctx.json(post))
  // }),
  // rest.get('/friends', (req, res, ctx) => {
  //   const users = [...db.users.values()]
  //     .filter((user) => user.id !== currentUserId)
  //     .map((user) => {
  //       return {
  //         ...user,
  //         posts: [...db.posts.values()]
  //           .filter((post) => post.authorId === user.id)
  //           .map((post) => post.id),
  //       }
  //     })
  //   return res(ctx.status(200), ctx.json(users))
  // }),
  // rest.get('/friends/:id', (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(db.users.get(req.params.id)))
  // }),

  // rest.post<{ text: string; picture: string }>('/post', (req, res, ctx) => {
  //   const { text, picture } = req.body

  //   const newPost = createPost(text, picture)

  //   return res(ctx.status(200), ctx.json(newPost))
  // }),
  // rest.post<{ postId: string }>('/like', (req, res, ctx) => {
  //   const { postId } = req.body
  //   const post = db.posts.get(postId)

  //   if (post) {
  //     const updatedPost = {
  //       ...post,
  //       hasLiked: true,
  //       likeCount: post.likeCount + 1,
  //     }

  //     db.posts.set(post.id, updatedPost)

  //     return res(ctx.status(200), ctx.json({ success: true }))
  //   }
  // }),
  // rest.post<{ postId: string }>('/unlike', (req, res, ctx) => {
  //   const { postId } = req.body
  //   const post = db.posts.get(postId)

  //   if (post) {
  //     const updatedPost = {
  //       ...post,
  //       hasLiked: false,
  //       likeCount: Math.max(post.likeCount - 1, 0),
  //     }

  //     db.posts.set(post.id, updatedPost)

  //     return res(ctx.status(200), ctx.json({ success: true }))
  //   }
  // }),

  // rest.patch<{ picture?: string; text?: string }>(
  //   '/posts/:id',
  //   (req, res, ctx) => {
  //     const { id } = req.params
  //     const { picture, text } = req.body
  //     const post = db.posts.get(id)

  //     if (post && post.picture !== picture && post.text !== text) {
  //       const updatedPost = {
  //         ...post,
  //         text: text ?? post.text,
  //         picture: picture ?? post.picture,
  //         likeCount: post.likeCount + 1,
  //       }

  //       db.posts.set(post.id, updatedPost)

  //       return res(ctx.status(200), ctx.json(updatedPost))
  //     }
  //   },
  // ),
]
