import { Check } from 'phosphor-react'
import React, { ComponentProps } from 'react'

import { CheckBoxContainer, CheckBoxIndicator } from './styles'

export function CheckBox({ ...props }: CheckBoxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}

export interface CheckBoxProps extends ComponentProps<typeof CheckBoxContainer> {}

CheckBox.displayName = 'CheckBox'
