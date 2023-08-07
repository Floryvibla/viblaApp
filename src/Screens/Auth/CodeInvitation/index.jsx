import React, { useRef } from 'react'
import Logo from "../../../Assets/vibla/icon_white.png"
import { Area, LogoImage } from '../Welcome/styles'
import dataLanguage from "../../../mocks/language/ptBR.json"
import { Button, ButtonLinearGradient, Text, TextInput, Wrapper, Touch, AreaFormKeyBoard } from '../../../components/styles'
import { colors } from '../../../Constants/styles'
import { Platform, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HeaderBack from '../../../components/Header/HeaderBack'

export const CodeInvitation = () => {

  const inputRef = useRef()
  const navigation = useNavigation()

  return (
    <AreaFormKeyBoard
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <HeaderBack />
      <LogoImage source={Logo} resizeMode="contain" />
      <Wrapper width={1.4} marginTop={0} marginBottom={0}>
        <Text color={colors.darkGray} size={15} > {dataLanguage.text_invitation_resume}</Text>
      </Wrapper>
      <Wrapper >
        <TextInput 
          placeholder={dataLanguage.placeholder_code_reset_password}
          marginBottom={0}
          ref={inputRef}
          returnKeyType="done"
        />
      </Wrapper>
      <Wrapper>
        <Button onPress={() => navigation.navigate("signup")}>
          <ButtonLinearGradient>
            <Text size={16} weight={"bold"}>{dataLanguage.confirm}</Text>
          </ButtonLinearGradient>
        </Button>
      </Wrapper>
      <Wrapper marginTop={0}>
        <Touch onPress={() => navigation.navigate("welcome")}>
          <Text color={colors.gold} size={20} >{dataLanguage.not_have_invitation}</Text>
        </Touch>
      </Wrapper>
    </AreaFormKeyBoard>
  )
}
