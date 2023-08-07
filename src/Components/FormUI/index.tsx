import React, { useRef } from 'react'
import { Keyboard, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, Platform } from 'react-native'
import Logo from "../../Assets/vibla/logo_white.png"

import { Container, Content, FormKeyBoard, LogoImage, Wrapper } from './styles'
import { HeaderBack } from '../Header/HeaderBack'


export interface FormUIProps extends TouchableWithoutFeedbackProps {
  variant?: 'auth'
  showHeaderBack?: boolean
  showIconBack?: boolean
  marginVertical?: boolean
  titleHeader?: string
  scrollEnabled?: boolean
}

export const FormUI = ({
  scrollEnabled= false,
  showHeaderBack=true,
  showIconBack,
  marginVertical,
  titleHeader,
  variant,
  children,
  ...rest
}: FormUIProps) => {

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback style={{backgroundColor: 'yellow', flex: 1}} onPress={dismissKeyboard} {...rest}>
      <Container>
        {showHeaderBack && <HeaderBack />}
        <FormKeyBoard
          behavior={Platform.OS == "ios" ? "padding" : null}
        >
          <Content scrollEnabled={scrollEnabled} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
            {variant === 'auth' && (
              <Wrapper style={{marginVertical: 20}}>
                <LogoImage source={Logo} resizeMode="contain" />
              </Wrapper>
            )}
            <Wrapper>
              {children}
            </Wrapper>
          </Content>
        </FormKeyBoard>
      </Container>
    </TouchableWithoutFeedback>
  )
}
