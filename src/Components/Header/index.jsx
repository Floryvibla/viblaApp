import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CirclePerfil from '../Others/CirclePerfil'
import { Container, Touche, Left, IconNotif, NewMsg, Center, LogoImage, Right, Title } from './styles'
import { colors } from "../../Constants/styles"
import Logo from "../../Assets/vibla/logo_white.png"
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../Dropdown';
import { othersActions } from '../../redux/actions/others.actions';

const Header = ({ navigation }) => {
  const msg= true
  const dispatch = useDispatch()
  const { openDropdown, titleDropdown } = useSelector(state => state.others)

  const handleOpenDropdown= () => {
    dispatch(othersActions.openDropdown(!openDropdown))
  }

  return (
    <Container onPress={() => dispatch(othersActions.closeDropdown())}>
      <Left>
        {/* <Touche  onPress={handleOpenDropdown}>
          <Title style={{fontWeight: 'bold', textTransform: 'capitalize'}}> {titleDropdown} </Title>
          <MaterialIcons name='keyboard-arrow-down' size={24} color={colors.white_100} />
        </Touche> */}
        
      </Left>
      <Center>
        <LogoImage source={Logo} resizeMode="cover" />
      </Center>
      <Right>
        {/* <Touche>
          <Feather name="video" size={25} color={colors.white_100} />
        </Touche>
        <Touche onPress={() => navigation.navigate('pageText')} style={{marginLeft: 20}}>
          <AntDesign name="appstore-o" size={25} color={colors.white_100} />
        </Touche> */}
        {/* <IconNotif onPress={() => navigation.navigate('notification')} transform>
          <Ionicons name="notifications" size={26} color={colors.white_100} />
          {msg && <NewMsg />}
        </IconNotif> */}
        <IconNotif margin>
          <Ionicons name="chatbox-ellipses-outline" size={26} color={colors.white_100} />
          {msg && <NewMsg />}
        </IconNotif>
        {/* <CirclePerfil/> */}
      </Right>
    </Container>
  )
}

export default Header