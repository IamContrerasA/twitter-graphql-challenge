type ID = string

export interface ProfilePicture {
  thumbnail: string
  medium: string
  large: string
}

export interface Tweet {
  id: ID
  authorId: User
  picture: string
  text: string
  url?: string
  likeCount: number
  replayCount: number
  retweetCount: number
  hasLiked: boolean
  hasReplay: boolean
  hasRetweet: boolean
  createdAt: string
}

export interface User {
  id: ID
  name: string
  publicName: string
  dob: string
  picture: ProfilePicture
  tweets?: ID[]
}
