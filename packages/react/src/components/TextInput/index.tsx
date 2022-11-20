import { ComponentProps } from 'react'
import * as S from './styles'

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <S.TextInputContainer>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
      <S.Input {...props} />
    </S.TextInputContainer>
  )
}

export interface TextInputProps extends ComponentProps<typeof S.Input> {
  prefix?: string
}

TextInput.displayName = 'TextInput'
