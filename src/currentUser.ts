import { User } from './api'

export const currentUser: Omit<User, 'id' | 'tweets'> = {
  name: 'Özer SUBAŞI 👨‍🍳',
  publicName: '@ozerSubasi',
  dob: new Date().toISOString(),
  picture: {
    thumbnail: 'https://randomuser.me/api/portraits/lego/8.jpg',
    medium: 'https://randomuser.me/api/portraits/med/lego/8.jpg',
    large: 'https://randomuser.me/api/portraits/thumb/lego/8.jpg',
  },
}
