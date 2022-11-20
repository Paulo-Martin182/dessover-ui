import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, CheckBox, CheckBoxProps } from '@dessover/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,

  args: {},
  decorators: [
    Story => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2', alignItems: 'center' }}>
          {Story()}
          <Text size="sm">Aceitar termos de uso</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {}
