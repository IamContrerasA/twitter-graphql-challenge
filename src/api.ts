type ID = string

export interface LinkPreview {
  url: string
  title: string
  description: string
  domain: string
  img: string
}

export interface Tweet {
  id: ID
  authorId: User
  picture: string
  text: string
  hasURL?: LinkPreview
  likeCount: number
  replayCount: number
  retweetCount: number
  hasLiked: boolean
  hasReplay: boolean
  hasRetweet: boolean
  createdAt: string
}

export interface ProfilePicture {
  thumbnail: string
  medium: string
  large: string
}

export interface User {
  id: ID
  name: string
  publicName: string
  dob: string
  picture: ProfilePicture
  tweets?: ID[]
}
