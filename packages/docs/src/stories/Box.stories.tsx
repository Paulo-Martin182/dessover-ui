import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@dessover/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text> Testing Element Box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
