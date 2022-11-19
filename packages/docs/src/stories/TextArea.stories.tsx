import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@dessover/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,

  args: {},
  decorators: [
    Story => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">Nos Envie um feedback</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Enviar observações...',
  },
}
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
