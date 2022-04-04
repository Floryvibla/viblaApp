import { View, Text } from 'react-native'
import React from 'react'
import { colors } from "../../Constants/styles"
import StoryCard from '../../Components/Stories'
import Post from '../../Components/Post'
// import { StoryContainer, PostArea, Divisor } from './styles'
// import { data } from '../../datas/fakeStories'

const Chat = () => {

  const renderStory= ({ item } ) => (
    <StoryCard item= {item} />
  )

  const renderPost= ({ item } ) => (
    <Post item= {item} />
  )

  return (
    <View style={{flex: 1, backgroundColor: colors.dark }}>
      <Text>Chat</Text>
    </View>
  )
}

export default Chat