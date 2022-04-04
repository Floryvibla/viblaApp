import React from 'react'
import { Container, ScrollArea, Image, DotArea, Text } from './styles'

const SlideImage = ({ onScroll, item, active }) => {
  return (
    <Container>
      <ScrollArea
        onScroll={({nativeEvent}) => onScroll(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
      >
       { item.map((i, index) => (
           <Image
                key={index}
                resizeMode='cover'
                source={{uri: i}}
           />
       ))}   
      </ScrollArea>
      <DotArea>
          { item.map((img, index) => (
              <Text active={index == active} key={index}>●</Text>
          ))}
      </DotArea>
    </Container>
  )
}

export default SlideImage