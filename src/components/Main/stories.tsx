import { Meta, StoryFn } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryFn = (args) => <Main {...args} />
export const Basic: StoryFn = (args) => <Main {...args} />
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}
