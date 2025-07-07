
import Home from '@/app/icons/home'

import Workflows from '@/app/icons/workflows'
import Settings from '@/app/icons/settings'
import Category from '@/app/icons/category'
import Payment from '@/app/icons/payment'
import Templates from '@/app/icons/cloud_download'
import Logs from '@/app/icons/clipboard'
import { Connection } from './types'




export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}))

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: '/scrollp_1.jpeg',
  },
  {
    title: 'Cursor',
    link: 'https://finance-map.vercel.app/',
    thumbnail: '/scrollp_2.jpeg',
  },
  {
    title: 'Rogue',
    link: 'https://just-exhibit-v1.vercel.app/',
    thumbnail: '/scrollp_3.jpeg',
  },

  {
    title: 'Editorially',
    link: 'https://vector-ai-poc-v1.vercel.app/',
    thumbnail: '/scrollp_4.jpeg',
  },
  {
    title: 'Editrix AI',
    link: 'https://kaggle-clone-xi.vercel.app/',
    thumbnail: '/scrollp_5.jpeg',
  },
  {
    title: 'Pixel Perfect',
    link: 'https://ai-resume-builder-seven-omega.vercel.app/',
    thumbnail: '/scrollp_1.jpeg',
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail: '/scrollp_3.jpeg',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: '/scrollp_2.jpeg',
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail: '/scrollp_1.jpeg',
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail: '/scrollp_1.jpeg',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail: '/scrollp_1.jpeg',
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail: '/scrollp_1.jpeg',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail: '/scrollp_1.jpeg',
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail: '/scrollp_1.jpeg',
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail: '/scrollp_1.jpeg',
  },
]

export const menuOptions = [
  { name: 'Dashboard', Component: Home, href: '/dashboard' },
  { name: 'Workflows', Component: Workflows, href: '/workflows' },
  { name: 'Settings', Component: Settings, href: '/settings' },
  { name: 'Connections', Component: Category, href: '/connections' },
  { name: 'Billing', Component: Payment, href: '/billing' },
  { name: 'Templates', Component: Templates, href: '/templates' },
  { name: 'Logs', Component: Logs, href: '/logs' },
]

export const EditorCanvasDefaultCardTypes = {
  Email: { description: 'Send and email to a user', type: 'Action' },
  Condition: {
    description: 'Boolean operator that creates different conditions lanes.',
    type: 'Action',
  },
  AI: {
    description:
      'Use the power of AI to summarize, respond, create and much more.',
    type: 'Action',
  },
  Slack: { description: 'Send a notification to slack', type: 'Action' },
  'Google Drive': {
    description:
      'Connect with Google drive to trigger actions or to create files and folders.',
    type: 'Trigger',
  },
  Notion: { description: 'Create entries directly in notion.', type: 'Action' },
  'Custom Webhook': {
    description:
      'Connect any app that has an API key and send data to your applicaiton.',
    type: 'Action',
  },
  Discord: {
    description: 'Post messages to your discord server',
    type: 'Action',
  },
  'Google Calendar': {
    description: 'Create a calendar invite.',
    type: 'Action',
  },
  Trigger: {
    description: 'An event that starts the workflow.',
    type: 'Trigger',
  },
  Action: {
    description: 'An event that happens after the workflow begins',
    type: 'Action',
  },
  Wait: {
    description: 'Delay the next action step by using the wait timer.',
    type: 'Action',
  },
}

export const CONNECTIONS: Connection[] = [
  {
    title: 'Google Drive',
    description: 'Connect your google drive to listen to folder changes',
    image: '/googleDrive.png',
    connectionKey: 'googleNode',
    alwaysTrue: true,
  },
  {
    title: 'Discord',
    description: 'Connect your discord to send notification and messages',
    image: '/discord.png',
    connectionKey: 'discordNode',
    accessTokenKey: 'webhookURL',
  },
  {
    title: 'Notion',
    description: 'Create entries in your notion dashboard and automate tasks.',
    image: '/notion.png',
    connectionKey: 'notionNode',
    accessTokenKey: 'accessToken',
  },
  {
    title: 'Slack',
    description:
      'Use slack to send notifications to team members through your own custom bot.',
    image: '/slack.png',
    connectionKey: 'slackNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
]
