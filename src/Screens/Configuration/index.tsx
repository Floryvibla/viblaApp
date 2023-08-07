import React, { useState } from 'react'
import { colors } from "../../Constants/styles"
import StoryCard from '../../components/Stories'
import { Container } from './styles'
import { HeaderBack } from '../../components/Header/HeaderBack'
import CardProfile from '../../components/CardProfile'
import dataMenu from '../../mocks/menu_configuration.json'
import FeedPost from '../../components/Post/FeedPost'
import { FlatList, Pressable, View } from 'react-native'
import { useDispatch } from 'react-redux'
import BarOption from '../../components/Bar'
import { useNavigation } from '@react-navigation/native'
import { othersActions } from '../../redux/actions/others.actions'
import { authActions } from '../../redux/actions/auth.actions'
import { useNavigate } from '../../hooks/useNavigate'

const Configuration = () => {

  const dispatch = useDispatch<any>()
  const { navigation } = useNavigate()

  const [activeOption, setActiveOption] = useState("Todos")

  const handleLogout = () => {
    dispatch(authActions.logout())
  }

  const handleMenu = ({title}) => {

    // if (title.toLowerCase() === "sair") {
    //   
    // }else {
    //   navigation.navigate(title)
    // }

    switch (title) {
      case "Sair":
        return handleLogout()
      case "Convide os amigos":
        return navigation.navigate('inviteFriends')
      default:
        return navigation.goBack()
    }
  }

  const renderPost= ({ item, index } ) => (
    <Pressable onPress={() => handleMenu(item)}>
      <BarOption title={item.title} titleIcon={item.title_icon} />
    </Pressable>
  )

  return (
    <Container>
      <HeaderBack title="Configurações"/>
      <FlatList
        // ItemSeparatorComponent={() => <View style={{height: 0.5, width: "100%", backgroundColor: colors.lightGray}} />}
        data={dataMenu.conta}
        renderItem={renderPost}
        keyExtractor={item => item.title}
      />
    </Container>
  )
}

export default Configuration