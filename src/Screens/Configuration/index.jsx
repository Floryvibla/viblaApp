import React, { useState } from 'react'
import { colors } from "../../Constants/styles"
import StoryCard from '../../Components/Stories'
import { Area, ListArea, ScrollArea, Text, Touch, Wrapper } from '../../Components/styles'
import HeaderBack from '../../Components/Header/HeaderBack'
import CardProfile from '../../Components/CardProfile'
import dataMenu from '../../mocks/menu_configuration.json'
import FeedPost from '../../Components/Post/FeedPost'
import { Pressable, View } from 'react-native'
import { PostArea } from '../Home/styles'
import { useDispatch } from 'react-redux'
import BarOption from '../../Components/Bar'
import { useNavigation } from '@react-navigation/native'
import { othersActions } from '../../redux/actions/others.actions'
import { authActions } from '../../redux/actions/auth.actions'

const Configuration = () => {

  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [activeOption, setActiveOption] = useState("Todos")

  const handleMenu = ({title}) => {

    // if (title.toLowerCase() === "sair") {
    //   
    // }else {
    //   navigation.navigate(title)
    // }
    const handleLogout = () => {
      dispatch(authActions.logout())
      console.log("Yeee");
    }

    switch (title) {
      case "Sair":
        return handleLogout()
      case "Convide os amigos":
        return navigation.navigate(title)
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
    <Area justify="flex-start" align="flex-start" style={{flex: 1}} bgColor={colors.dark}>
      <HeaderBack auth={false} title="Configurações" />
      <ListArea
        // ItemSeparatorComponent={() => <View style={{height: 0.5, width: "100%", backgroundColor: colors.lightGray}} />}
        data={dataMenu.conta}
        renderItem={renderPost}
        keyExtractor={item => item.title}
      />
    </Area>
  )
}

export default Configuration