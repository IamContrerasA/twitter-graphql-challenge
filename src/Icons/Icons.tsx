import * as React from 'react'
import TwitterIcon from './svg/Twitter.svg'
import ConfirmedIcon from './svg/Confirmed.svg'
import DottsIcon from './svg/Dotts.svg'
import EmojiIcon from './svg/Emoji.svg'
import ExploreIcon from './svg/Explore.svg'
import ExploreFillIcon from './svg/Explore-Fill.svg'
import Extend from './svg/Extend.svg'
import GifIcon from './svg/Gif.svg'
import HeroIcon from './svg/Hero.svg'
import HomeIcon from './svg/Home.svg'
import HomeFillIcon from './svg/Home-Fill.svg'
import ImageIcon from './svg/Image.svg'
import MessagesIcon from './svg/Messages.svg'
import MessagesFillIcon from './svg/Messages-Fill.svg'
import MoreIcon from './svg/More.svg'
import NotificationIcon from './svg/Notification.svg'
import NotificationFillIcon from './svg/Notification-Fill.svg'
import PollIcon from './svg/Poll.svg'
import ProfileIcon from './svg/Profile.svg'
import ProfileFillIcon from './svg/Profile-Fill.svg'
import PromoteIcon from './svg/Promote.svg'
import SearchIcon from './svg/Search.svg'
import ScheduleIcon from './svg/Schedule.svg'
import TweetLinkedIcon from './svg/Tweet-Linked.svg'
import LikeIcon from './svg/Like.svg'
import ReplyIcon from './svg/Reply.svg'
import RetweetIcon from './svg/Retweet.svg'
import ShareIcon from './svg/Share.svg'

type IconsProps = {
  tag: string
  width?: string
  height?: string
  fill?: string
}

function Icons({
  tag,
  width = '24px',
  height = '24px',
  fill = 'white',
}: IconsProps) {
  const components: any = {
    Twitter: TwitterIcon,
    Confirmed: ConfirmedIcon,
    Dotts: DottsIcon,
    Emoji: EmojiIcon,
    Explore: ExploreIcon,
    ExploreFill: ExploreFillIcon,
    Extend: Extend,
    Gif: GifIcon,
    Home: HomeIcon,
    HomeFill: HomeFillIcon,
    Messages: MessagesIcon,
    MessagesFill: MessagesFillIcon,
    Image: ImageIcon,
    More: MoreIcon,
    MoreFill: MoreIcon,
    Notifications: NotificationIcon,
    NotificationsFill: NotificationFillIcon,
    Poll: PollIcon,
    Profile: ProfileIcon,
    ProfileFill: ProfileFillIcon,
    Promote: PromoteIcon,
    Search: SearchIcon,
    Hero: HeroIcon,
    Schedule: ScheduleIcon,
    TweetLinked: TweetLinkedIcon,
    Like: LikeIcon,
    Reply: ReplyIcon,
    Retweet: RetweetIcon,
    Share: ShareIcon,
  }
  const IconName: any = components[tag]

  return <IconName width={width} height={height} fill={fill} />
}

export { Icons }
