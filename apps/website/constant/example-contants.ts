import { HiUsers } from 'react-icons/hi'
import { IoMdHome } from 'react-icons/io'
import { IoSettingsSharp } from 'react-icons/io5'
import { MdOutlinePayment } from 'react-icons/md'

export const exampleUsersData = [
  {
    id: 1,
    user: {
      name: 'Henry John',
      email: 'henry.john@email.com',
      avatar: 'http://bit.ly/47jPX1D',
    },
    revenue: '₦12.99',
    status: 'Done',
  },
  {
    id: 2,
    user: {
      name: 'Beth Harvey',
      email: 'beth@email.com',
      avatar: 'http://bit.ly/43kBcJt',
    },
    revenue: '₦42.99',
    status: 'In process',
  },
  {
    id: 3,
    user: {
      name: 'Oliver Twist',
      email: 'oliver@email.com',
      avatar: 'https://rb.gy/39f8mx',
    },
    revenue: '₦45.99',
    status: 'In process',
  },
  {
    id: 4,
    user: {
      name: 'Katherine Gill',
      email: 'jestrada@email.com',
      avatar: 'http://bit.ly/47jPX1D',
    },
    revenue: '₦55.29',
    status: 'Done',
  },
  {
    id: 5,
    user: {
      name: 'Ella Josos',
      email: 'josos.ella@email.com',
      avatar: 'http://bit.ly/47jPX1D',
    },
    revenue: '₦12.96',
    status: 'Done',
  },
  {
    id: 6,
    user: {
      name: 'Jessica Emma',
      email: 'jessicaemma@email.com',
      avatar: 'https://rb.gy/39f8mx',
    },
    revenue: '₦22.29',
    status: 'In process',
  },
  {
    id: 7,
    user: {
      name: 'Lilian Casper',
      email: 'casper.lilian@email.com',
      avatar: 'http://bit.ly/47jPX1D',
    },
    revenue: '₦62.99',
    status: 'Done',
  },
  {
    id: 8,
    user: {
      name: 'Joe Casper',
      email: 'joe@email.com',
      avatar: 'http://bit.ly/43kBcJt',
    },
    revenue: '₦62.99',
    status: 'In process',
  },
]

export const asideItems = [
  { label: 'Overview', icon: IoMdHome },
  { label: 'Users', icon: HiUsers },
  { label: 'Payments', icon: MdOutlinePayment },
  { label: 'Settings', icon: IoSettingsSharp },
]

export const exampleDashboardData = [
  {
    id: 1,
    name: 'Total sales',
    numbers: '₦6,000,000.00',
  },
  {
    id: 2,
    name: 'Top Users',
    numbers: '600',
  },
  {
    id: 3,
    name: 'Most Paid',
    numbers: '450',
  },
  {
    id: 4,
    name: 'Recent transactions',
    numbers: '600',
  },
]
