# Twitter GraphQL challenge

## Setup

### Running the project

```
yarn start
```

###

## API Documentation

### `query currentUser`

Returns the current user

Response: 200

```
User
```

### `query tweets`

Results are returned in sets of 10, sorted by date

Query params:

```
{
  page: number // ?page=1
}
```

Response: 200

```
Tweet[]
```

### `mutation tweet`

Create a tweet

Body:

```
{
  text: string
  picture: string
}
```

Response: 200

```
Tweet
```

### `mutation like`

Like a tweet

Body:

```
{
  tweetId: string
}
```

Response: 200

```
{
  success: true
  updatedTweet
}
```

### `mutation unlike`

Unlike a tweet

Body:

```
{
  tweetId: string
}
```

Response: 200

```
{
  success: true
  updatedTweet
}
```

### `mutation delete`

Delete a tweet

Body:

```
{
  tweetId: string
}
```

Response: 200

```
{
  success: true
}
```
