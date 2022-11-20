import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',

  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    background: '$green300',
    color: '$white',
  },

  variants: {
    variant: {
      primary: {
        color: 'White',
        background: '$green500',
      },
      secondary: {
        color: '$green300',
        border: '2px solid $green500',
      },
    },

    outlined: {
      true: {
        backgroundColor: 'none',
      },
    },

    size: {
      md: {
        padding: '0 $4',
        height: 46,
      },
    },
  },

  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      css: {
        color: 'blueviolet',
        borderColor: 'darkviolet',
        '&:hover': {
          color: 'white',
        },
      },
    },
    {
      variant: 'secondary',
      outlined: true,
      css: {
        color: 'gray',
        borderColor: 'lightgray',
        '&:hover': {
          color: 'black',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
