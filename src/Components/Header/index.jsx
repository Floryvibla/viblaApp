import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CirclePerfil from '../Others/CirclePerfil'
import { Container, Touche, Left, IconNotif, NewMsg, Center, LogoImage, Right } from './styles'
import { colors } from "../../Constants/styles"
import Logo from "../../Assets/vibla/logo_white.png"

const Header = () => {
  const msg= true
  return (
    <Container>
      <Left>
        <CirclePerfil/>
        <IconNotif>
          <Ionicons name="notifications" size={20} color={colors.white_100} />
          {msg && <NewMsg />}
        </IconNotif>
      </Left>
      <Center>
        <LogoImage source={Logo} resizeMode="cover" />
      </Center>
      <Right>
        <Touche>
          <Feather name="search" size={20} color={colors.white_100} />
        </Touche>
        <Touche>
          <AntDesign name="appstore-o" size={20} color={colors.white_100} />
        </Touche>
      </Right>
    </Container>
  )
}

export default Header