import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import CardPost from './CardPost'
import BarBottom from './BarBottom'
import ReadMore from '../Others/ReadMore'

const Post = ({ item }) => {

  const [like, setLike] = useState(false)

  const handleLike= () => {
    setLike(!like)
  }

  return (
    <View>
        <Header 
            imageProfile={item.imageProfile}
            username={item.username}
        />
        <CardPost 
            imgPost={item.story}
            onDoubleTap={handleLike}
            state={like}
        />
        <BarBottom onPressLike={handleLike} state={like} />
        <ReadMore 
          text='Você pode encontrar a necessidade de referenciar um ícone SVG local ou uma imagem de dentro do seu projeto. Quando você estava configurando o projeto de exemplo, lembre-se de que você também instalou a biblioteca . Você pode usar isso para renderizar um ícone ou imagem SVG local dentro do seu projeto.react-native-svg-transformer' 
        />
    </View>
  )
}

export default Post