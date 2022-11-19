import { ComponentProps } from 'react'
import * as S from './styles'
import { User } from 'phosphor-react'

export interface AvatarProps extends ComponentProps<typeof S.AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <S.AvatarContainer>
      <S.AvatarImage {...props} />
      <S.AvatarFallback delayMs={600}>
        <User />
      </S.AvatarFallback>
    </S.AvatarContainer>
  )
}
