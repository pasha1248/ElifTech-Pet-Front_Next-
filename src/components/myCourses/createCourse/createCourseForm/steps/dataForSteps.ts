/** @format */

import RateIconComplexity1 from '../../../../../ui/icon/RateIconComplexity1'
import RateIconComplexity2 from '../../../../../ui/icon/RateIconComplexity2'
import RateIconComplexity3 from '../../../../../ui/icon/RateIconComplexity3'
import { TiStarOutline } from 'react-icons/ti'

export const plans = [
  {
    name: 'complexity1',
    icon: RateIconComplexity1,
  },
  {
    name: 'complexity2',
    icon: RateIconComplexity2,
  },
  {
    name: 'complexity3',
    icon: RateIconComplexity3,
  },
  {
    name: 'complexityAll',
    icon: TiStarOutline,
  },
]

export const infoForPaymantEn = [
  {
    title: 'Free',
    price: 0,
    benefits: [
      'File storage 1gb',
      'Creating a personal online course',
      'Course editor (creating and editing courses)',
      'Built-in messenger for communication',
      'Accounting of payments and statistics',
      'User accounting system',
    ],

    description: [{ cloud: 1, users: 200 }],
  },
  {
    title: 'Plus',
    price: 7.3,
    benefits: [
      'File storage 5gb',
      'Max cour',
      'Creating a personal online course',
      'Course editor (creating and editing courses)',
      'Built-in messenger for communication',
      'Accounting of payments and statistics',
      'User accounting system',
    ],
    description: [{ cloud: 5, users: 400 }],
  },
  {
    title: 'Plus',
    price: 7.3,
    benefits: [
      'File storage 30gb',

      'Creating a personal online course',
      'Course editor (creating and editing courses)',
      'Built-in messenger for communication',
      'Accounting of payments and statistics',
      'User accounting system',
    ],
    description: [{ cloud: 30, users: 400 }],
  },
]

export const infoForPaymantUa = [
  {
    title: 'Free',
    price: 0,
    benefits: [
      'Cховище файлів 1gb',
      '',
      'Створення персонального онлайн курсу ',
      'Редактор курсу (створення та редагування курсів)',
      'Вбудований месенджер для спілкування',
      'Облік платежів і статистика',
      'Система обліку користувачів',
    ],
    description: [{ cloud: 1, users: 200 }],
  },
  {
    title: 'Плюс',
    price: 299,
    benefits: [
      'Cховище файлів 5gb',
      'Створення персонального онлайн курсу ',
      'Редактор курсу (створення та редагування курсів)',
      'Вбудований месенджер для спілкування',
      'Облік платежів і статистика',
      'Система обліку користувачів',
    ],
    description: [{ cloud: 5, users: 400 }],
  },
  {
    title: 'Плюс',
    price: 299,
    benefits: [
      'Cховище файлів 30gb',
      'Створення персонального онлайн курсу ',
      'Редактор курсу (створення та редагування курсів)',
      'Вбудований месенджер для спілкування',
      'Облік платежів і статистика',
      'Система обліку користувачів',
    ],
    description: [{ cloud: 5, users: 400 }],
  },
]
