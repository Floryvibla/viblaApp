import React, { ReactNode } from 'react'
import { TextStyled, VariantTextProps, TypeTextProps, WeightTextProps } from './styles'
import { urlFile } from '../../config/http'
import { colors } from '../../Constants/styles'

interface PropsText {
  children: ReactNode
  variant?: VariantTextProps
  type?: TypeTextProps
  color?: keyof typeof colors
  weight?: WeightTextProps
}

const TextUI = ({
  children,
  variant,
  type,
  color,
  weight
}: PropsText) => {
  
  return (
    <TextStyled 
      color={color} 
      type={type} 
      variant={variant}
      weight={weight}
    >
      {children}
    </TextStyled>
  )
}

export default TextUI