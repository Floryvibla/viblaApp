import React, { useRef } from 'react'
import Logo from "../../../Assets/vibla/icon_white.png"
import { Area, LogoImage } from '../Welcome/styles'
import dataLanguage from "../../../mocks/language/ptBR.json"
import { Button, ButtonLinearGradient, Text, TextInput, Wrapper, Touch, AreaFormKeyBoard } from '../../../components/styles'
import { colors } from '../../../Constants/styles'
import { Platform, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HeaderBack from '../../../components/Header/HeaderBack'

export const CodeForgotPassword = () => {

  const passwordRef = useRef()
  const navigation = useNavigation()

  return (
    <AreaFormKeyBoard
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <HeaderBack />
      <LogoImage source={Logo} resizeMode="cover" />
      <Wrapper width={75} marginTop={0} marginBottom={0}>
        <Text color={colors.darkGray} size={15} > {dataLanguage.text_code_reset_password} flory.contato@gmail.com</Text>
      </Wrapper>
      <Wrapper >
        <TextInput 
          placeholder={dataLanguage.placeholder_code_reset_password}
          marginBottom={0}
          ref={passwordRef}
          returnKeyType="done"
        />
      </Wrapper>
      <Wrapper>
        <Button onPress={() => navigation.navigate("resetPassword")}>
          <ButtonLinearGradient>
            <Text size={16} weight={"bold"}>{dataLanguage.confirm}</Text>
          </ButtonLinearGradient>
        </Button>
      </Wrapper>
      <Wrapper marginTop={0}>
        <Touch onPress={() => navigation.navigate("forgotPassword")}>
          <Text color={colors.gold} size={20} >{dataLanguage.resend}</Text>
        </Touch>
      </Wrapper>
    </AreaFormKeyBoard>
  )
}
