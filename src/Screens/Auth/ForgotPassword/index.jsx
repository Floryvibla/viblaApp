import React, { useRef } from 'react'
import Logo from "../../../Assets/vibla/icon_white.png"
import { Area, LogoImage } from '../Welcome/styles'
import dataLanguage from "../../../mocks/language/ptBR.json"
import { Button, ButtonLinearGradient, Text, TextInput, Wrapper, Touch, AreaFormKeyBoard } from '../../../components/styles'
import { colors } from '../../../Constants/styles'
import { Platform, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HeaderBack } from '../../../components/Header/HeaderBack'
// import {HeaderBack} from '../../../components/Header/HeaderBack'

export const ForgotPassword = () => {

  const passwordRef = useRef()
  const navigation = useNavigation()

  return (
    <AreaFormKeyBoard
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <HeaderBack />
      <LogoImage source={Logo} resizeMode="contain" />
      <Wrapper marginBottom={10}>
        <Text  size={26} weight={600}> {dataLanguage.forgot_password} </Text>
      </Wrapper>
      <Wrapper width={1.2} marginTop={0} marginBottom={0}>
        <Text color={colors.darkGray} size={15} > {dataLanguage.nao_se_preocupe} </Text>
        <Text color={colors.darkGray} size={15} > {dataLanguage.msg_insert_email_} </Text>
      </Wrapper>
      <Wrapper >
        <TextInput 
          placeholder={"Email"}
          marginBottom={0}
          ref={passwordRef}
          returnKeyType="done"
          keyboardType='email-address'
        />
      </Wrapper>
      <Wrapper>
        <Button onPress={() => navigation.navigate("codeForgotPassword")}>
          <ButtonLinearGradient>
            <Text size={16} weight={"bold"}>{dataLanguage.reset_password}</Text>
          </ButtonLinearGradient>
        </Button>
      </Wrapper>
      <Wrapper marginTop={0}>
        <Touch onPress={() => navigation.goBack()}>
          <Text color={colors.gold} size={20} >{dataLanguage.cancel}</Text>
        </Touch>
      </Wrapper>
    </AreaFormKeyBoard>
  )
}
