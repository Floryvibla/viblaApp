import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable } from 'react-native'
import { Container, ScrollArea, Image, DotArea, Text } from './styles'

const SlideImage = ({ onScroll, item, active }) => {

  const navigation = useNavigation()

  return (
    <Container>
      <ScrollArea
        onScroll={({nativeEvent}) => onScroll(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
      >
       {item.map((item, index) => (
        <Pressable key={index} onPress={() => navigation.navigate("event", {
          poster: item
        })}>
          <Image
            resizeMode='cover'
            source={{uri: item}}
          />
        </Pressable>
       ))}   
      </ScrollArea>
      <DotArea>
        {item.map((img, index) => (
          <Text active={index == active} key={index}>●</Text>
        ))}
      </DotArea>
    </Container>
  )
}

export default SlideImage