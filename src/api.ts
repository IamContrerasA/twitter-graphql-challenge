type ID = string

export interface ProfilePicture {
  thumbnail: string
  medium: string
  large: string
}

export interface Post {
  id: ID
  authorId: ID
  picture: string
  text: string
  likeCount: number
  hasLiked: boolean
  createdAt: string
}

export interface User {
  id: ID
  username: string
  firstName: string
  lastName: string
  dob: string
  picture: ProfilePicture
  posts: ID[]
}
