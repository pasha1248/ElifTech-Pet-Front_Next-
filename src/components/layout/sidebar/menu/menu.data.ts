/** @format */

import { IMenuItem } from './menu.interface'
import { HiHome, HiChartBar, HiStar, HiCollection } from 'react-icons/hi'
import { MdOutlinePayment, MdOutlineScreenSearchDesktop } from 'react-icons/md'
import { AiOutlineMessage } from 'react-icons/ai'

export const menu: IMenuItem[] = [
  {
    title: 'Dashboard',
    icon: HiHome,
    link: '/dashboard',
  },
  {
    title: 'Browse cource',
    icon: MdOutlineScreenSearchDesktop,
    link: '/trending',
  },
  {
    title: 'My courses',
    icon: HiStar,
    link: '/my-channel',
  },
  {
    title: 'Messanger',
    icon: AiOutlineMessage,
    link: '/video-chat',
  },
  {
    title: 'Analitics',
    icon: HiChartBar,
    link: '/subscriptions',
  },

  {
    title: 'Payment',
    icon: MdOutlinePayment,
    link: '/video-chat',
  },
]
