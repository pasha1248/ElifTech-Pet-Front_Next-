/** @format */

import { IMenuItem } from './menu.interface'
import { HiHome, HiChartBar, HiStar, HiCollection } from 'react-icons/hi'
import { MdOutlinePayment, MdOutlineScreenSearchDesktop } from 'react-icons/md'
import { AiOutlineMessage } from 'react-icons/ai'
import Menu from './Menu'
import { AppRoute } from './menu.enum'

export const menuEn: IMenuItem[] = [
  {
    title: 'Dashboard',
    icon: HiHome,
    link: '/dashboard',
  },
  {
    title: 'Browse cources',
    icon: MdOutlineScreenSearchDesktop,
    link: AppRoute.BROWSE_COURSES,
  },
  {
    title: 'My courses',
    icon: HiStar,
    link: AppRoute.MY_COURSES,
  },
  {
    title: 'Messanger',
    icon: AiOutlineMessage,
    link: '/messager',
  },
  {
    title: 'Analitics',
    icon: HiChartBar,
    link: '/analitics',
  },

  {
    title: 'Payment',
    icon: MdOutlinePayment,
    link: '/pay',
  },
]

export const menuUa: IMenuItem[] = [
  {
    title: 'Панель',
    icon: HiHome,
    link: '/dashboard',
  },
  {
    title: 'Перегляньте курси',
    icon: MdOutlineScreenSearchDesktop,
    link: AppRoute.BROWSE_COURSES,
  },
  {
    title: 'Мої курси',
    icon: HiStar,
    link: AppRoute.MY_COURSES,
  },
  {
    title: 'Повідомлення',
    icon: AiOutlineMessage,
    link: '/messager',
  },
  {
    title: 'Аналітика',
    icon: HiChartBar,
    link: '/analitics',
  },

  {
    title: 'Платежі',
    icon: MdOutlinePayment,
    link: '/pay',
  },
]
