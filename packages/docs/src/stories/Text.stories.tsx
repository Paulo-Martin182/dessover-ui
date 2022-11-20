import { Meta, StoryObj } from '@storybook/react'
import { Text, BoxProps } from '@dessover/react'

export default {
  title: 'Typograph/Text',
  component: Text,

  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam delectus magnam harum porro, facere id est? Animi expedita, quam, assumenda voluptate quisquam dolores obcaecati ullam dolore doloremque, ipsa non.',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
export const CustomTag: StoryObj<BoxProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
