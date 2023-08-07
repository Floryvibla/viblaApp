import React from 'react'
import { Dimensions, Image, Pressable, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../../Constants/styles"
import { IsNewMsg, Wrapper, Container } from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from '../../../hooks/useNavigate';
import Logo from "../../../Assets/vibla/logo_white.png"

export interface HeaderHomeProps {
  isNewMsg?: boolean
}

export const HeaderHome = ({ 
  isNewMsg
}: HeaderHomeProps) => {

  const { navigation } = useNavigate()

  const dispatch = useDispatch<any>()

  const onNavigateToInviteFriends = () => {
    navigation.navigate('inviteFriends')
  }

  return (
    <Container>
      <Wrapper/>
      <Wrapper style={{justifyContent: 'center'}} flex={2}>
        <Image style={{ width: 90, height: 30 }} source={Logo} resizeMode="cover" />
      </Wrapper>
      <Wrapper style={{ justifyContent: 'flex-end' }}>
        <Pressable style={{position: 'relative'}}>
          <Ionicons name="chatbox-ellipses-outline" size={26} color={colors.white_100} />
        </Pressable>
        <Pressable style={{position: 'relative'}} onPress={onNavigateToInviteFriends}>
          <Ionicons name="qr-code-outline" size={26} color={colors.white_100} />
          {isNewMsg && <IsNewMsg />}
        </Pressable>
      </Wrapper>
    </Container>
  )
}