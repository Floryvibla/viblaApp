import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Area, ListArea, Wrapper } from '../../Components/styles'
import { colors } from '../../Constants/styles'
import HeaderBack from '../../Components/Header/HeaderBack'
import CardGreeting from '../../Components/Cards/CardGreeting'
import { useState } from 'react'
import BarNotification from '../../Components/Bar/BarNotification'
import { notification } from '../../mocks/db.json'
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Notification = () => {

  const [closeGreeting, setCloseGreeting] = useState(false)

  const navigation = useNavigation()

  const { width: WIDTH_SCREEN } = Dimensions.get("window")

  const handleNavigate= item => {
    switch (item.type) {
      case "photo":
        return navigation.navigate('selfPost')
      case "text":
        return navigation.navigate('selfPost')
      case "video":
        return navigation.navigate('video')
  
      default:
        break;
    }
  }

  const renderPost= ({ item, index } ) => (
    <Pressable 
      style={{paddingHorizontal: 10, 
      width: WIDTH_SCREEN, backgroundColor: item.open ? "transparent" : colors.lightGray+29}}
      onPress={() => handleNavigate(item)}
    >
      <BarNotification 
        // imageProfile={item.imageProfile}
        username={"flory.mignon"}
        relative
        item={item}
        // isFollow={isFollow}
      />
    </Pressable>
  )

  return (
    <Area justify="flex-start" align="flex-start" style={{flex: 1}} bgColor={colors.dark}>
      <HeaderBack auth={false} title="Notificações" />
      <ListArea
        ListHeaderComponent={
          <Wrapper style={{paddingHorizontal: 20}}>
            {!closeGreeting && <CardGreeting onPress={() => setCloseGreeting(true)} />}
          </Wrapper>
        }
        ItemSeparatorComponent={() => <View style={{height: 0.5, width: "100%", backgroundColor: colors.lightGray+49}} />}
        data={notification}
        renderItem={renderPost}
        keyExtractor={item => item.id}
      />

    </Area>
  )
}

export default Notification