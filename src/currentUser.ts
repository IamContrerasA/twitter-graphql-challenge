import { User } from './api'

export const currentUser: Omit<User, 'id' | 'posts'> = {
  firstName: 'firstName',
  lastName: 'lastName',
  username: 'username',
  dob: new Date().toISOString(),
  picture: {
    thumbnail: 'url',
    medium: 'url',
    large: 'url',
  },
}
