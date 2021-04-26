# React Personal Project Challenge

## Description

### Build a clone of the instagram feed.

Feed cards should include:

- Header with avatar photo, username, and button to edit post if the post belongs to you
- Post picture
- Row with a heart indicating whether or not the current user has liked the post. The heart button can be clicked to like the post which fills the heart.
- Number of total likes
- Currently should have 1 comment which is the "text" of the post
- Row indicating how long ago the post was created.

Feed should:

- Implement infinite scrolling and pagination

Creating a post:

- There should be a floating button that is used to create a post
- Creating a post launches a modal where the user can choose a picture and text for the post
- Creating a post adds it to the top of the post list

Editing a post:

- Clicking on the edit post button launches the same modal used to create a post but with values filled in

Like/Unlike post:

- Clicking on the heart icon on a post should increment/decrement the like count and fill/unfill the heart. Should be able to click rapidly in succession without issues.

Design elements:

- Should create a basic design system of components to use
- Spacing/Sizes should match instagram
- Design should look identical to instagram

Notes:

- All files but `src/mocks/` can be removed/repurposed/renamed
- Be as organized as possible. I recommend a flat feature based project structure. This will be one of the major focuses of the learning process.

## Setup

### Running the project

```
yarn start
```

### API

The api is mocked out using `msw`. See the the api documentation below. Requests can simply be made to the / endpoints.

### Login

For this project there will be no logging in. Your user is hard coded in `src/currentUser.ts`, start by adjusting your user to your liking.

###

## API Documentation

### `GET /currentUser`

Returns the current user

Response: 200

```
User
```

### `GET /posts`

Results are returned in sets of 10, sorted by date

Query params:

```
{
  page: number // ?page=1
}
```

Response: 200

```
Post[]
```

### `GET /posts/:id`

Find post by id

Response: 200

```
Post
```

#### URL Params

```
{
  id: string
}
```

### `GET /friends`

Get all friends

Response: 200

```
User[]
```

### `GET /friends/:id`

Find friend by id

Response: 200

```
Post
```

### `POST /post`

Create a post

Body:

```
{
  text: string
  picture: string
}
```

Response: 200

```
Post
```

### `POST /like`

Like a post

Body:

```
{
  postId: string
}
```

Response: 200

```
{
  success: true
}
```

### `POST /unlike`

Unlike a post

Body:

```
{
  postId: string
}
```

Response: 200

```
{
  success: true
}
```

### `PATCH /posts/:id`

Update a post

Response: 200

```
Post
```
