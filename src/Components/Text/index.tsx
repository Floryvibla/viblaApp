import React, { ReactNode } from 'react'
import { TextStyled, VariantTextProps, TypeTextProps, WeightTextProps, TextStyledProps } from './styles'
import { urlFile } from '../../config/http'
import { colors } from '../../Constants/styles'

type PropsText = TextStyledProps & {
  children: ReactNode
}

const TextUI = ({
  children,
  ...rest
}: PropsText) => {
  
  return (
    <TextStyled {...rest}>
      {children}
    </TextStyled>
  )
}

export default TextUI