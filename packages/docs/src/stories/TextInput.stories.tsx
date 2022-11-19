import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@dessover/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,

  args: {},
  decorators: [
    Story => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">Nome completo</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Nome completo',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
export const WithPreifx: StoryObj<TextInputProps> = {
  args: {
    prefix: 'domain.com/',
  },
}
