import { View } from 'react-native'
import React from 'react'
import { Area, LogoImage, Wrapper } from './styles'
import Logo from "../../../Assets/vibla/icon_white.png"
import { Button, ButtonLinearGradient, Text } from '../../../components/styles'
import { colors } from '../../../Constants/styles'
import dataLanguage from "../../../mocks/language/ptBR.json"
import { useNavigation } from '@react-navigation/native'
import TextUI from '../../../components/Text'
import ButtonUI from '../../../components/ButtonUI'
import { useNavigate } from '../../../hooks/useNavigate'

export const Welcome = () => {
  const { navigatePublic } = useNavigate()

  const navigateToLogin =  () => {
    navigatePublic.navigate('login')
  }

  const navigateToCodeinvitation =  () => {
    navigatePublic.navigate('codeInvitation')
  }

  return (
    <Area>
      <LogoImage source={Logo} resizeMode="contain" />
      <Wrapper>
        <TextUI variant='title'>{dataLanguage.welcome}</TextUI>
      </Wrapper>
      <Wrapper style={{width: "65%"}}>
        <TextUI align='center' variant='subtitle' color='darkGray'>{dataLanguage.resume_in_msg_welcome}</TextUI>
      </Wrapper>
      <Wrapper>
        <ButtonUI onPress={navigateToCodeinvitation} title='Eu tenho convite'/>
        <ButtonUI variant='outline' onPress={navigateToLogin} title='Entrar'/>
      </Wrapper>
    </Area>
  )
}
