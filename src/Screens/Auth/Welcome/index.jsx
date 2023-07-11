import { View } from 'react-native'
import React from 'react'
import { Area, LogoImage } from './styles'
import Logo from "../../../Assets/vibla/icon_white.png"
import { Button, ButtonLinearGradient, Text, Wrapper } from '../../../Components/styles'
import { colors } from '../../../Constants/styles'
import dataLanguage from "../../../mocks/language/ptBR.json"
import { useNavigation } from '@react-navigation/native'

export const Welcome = () => {
  const navigation = useNavigation()
  return (
    <Area>
      <LogoImage source={Logo} resizeMode="contain" />
      <Wrapper marginBottom={10}>
        <Text size={26} weight={600}> {dataLanguage.welcome} </Text>
      </Wrapper>
      <Wrapper width={1.4} marginTop={10}>
        <Text color={colors.darkGray}> 
          {dataLanguage.resume_in_msg_welcome}
        </Text>
      </Wrapper>
      <Wrapper>
        <Button onPress={() => navigation.navigate("login")}>
          <ButtonLinearGradient>
            <Text size={16} weight={"bold"}>Entrar</Text>
          </ButtonLinearGradient>
        </Button>
        <Button onPress={() => navigation.navigate("codeInvitation")}>
          <ButtonLinearGradient>
            <Text size={16} weight={"bold"}>Eu tenho convite</Text>
          </ButtonLinearGradient>
        </Button>
      </Wrapper>
    </Area>
  )
}
