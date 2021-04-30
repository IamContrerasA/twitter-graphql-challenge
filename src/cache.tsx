import { InMemoryCache, Reference } from '@apollo/client'

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        response: {
          keyArgs: false,
          merge(existing, incoming) {
            let tweets: Reference[] = []
            if (existing?.tweets) {
              tweets = tweets.concat(existing.tweets)
            }
            if (incoming?.tweets) {
              tweets = tweets.concat(incoming.tweets)
            }
            return {
              ...incoming,
              tweets,
            }
          },
        },
      },
    },
  },
})
