import { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'
import { Button, ButtonProps } from '@dessover/react'

function handleClick() {
  console.log('Clicked!!')
}

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'OK',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
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
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}
