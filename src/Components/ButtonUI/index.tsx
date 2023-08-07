import React from 'react'
import { Text, Wrapper } from '../styles'
import { Container, ButtonLinearGradient } from './styles'
import { urlFile } from '../../config/http'
import TextUI from '../Text'
import { colors } from '../../Constants/styles'
import { ActivityIndicator, PressableProps } from 'react-native'
import Loading from '../Loading'

export interface PropsButtonUI extends PressableProps {
  loading?: boolean,
  title?: string, 
  variant?: 'outline' | 'solid' | 'secondary'
}

const ButtonUI = ({
  disabled,
  title= 'Próximo',
  variant= 'solid',
  loading,
  children,
  ...rest
}: PropsButtonUI) => {
  

  return (
    <Container variant={variant} disabled={loading ? loading : disabled} {...rest}>
      <ButtonLinearGradient
        disabled={loading ? loading : disabled}
        variant={variant}
      />
      <>
          {loading ? (
              <Loading />
            ) : (
              children ?? <TextUI variant='subtitle' weight={600} align='center'>{title}</TextUI>
            )
          }
        </>
    </Container>
  )
}

export default ButtonUI