import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@dessover/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/Paulo-Martin182.png',
    alt: 'Paulo Martin',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
