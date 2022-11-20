import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@dessover/react'

export default {
  title: 'Typograph/Heading',
  component: Heading,

  args: {
    children: 'Custom Title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão heading sempre será um `h2`, mas podemos alterar a propriedade `as`',
      },
    },
  },
}
