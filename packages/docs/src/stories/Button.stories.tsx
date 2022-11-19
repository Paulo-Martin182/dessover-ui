import { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'
import { Button, ButtonProps } from '@dessover/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'OK',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: (
      <>
        Próximo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}
