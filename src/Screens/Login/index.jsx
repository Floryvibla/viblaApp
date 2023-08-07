import { View, Text } from 'react-native'
import React from 'react'
import { colors } from "../../Constants/styles"
import StoryCard from '../../components/Stories'
import Post from '../../components/Post'
import { StoryContainer, PostArea, Divisor } from './styles'
import { data } from '../../datas/fakeStories'

const Login = () => {

  const renderStory= ({ item } ) => (
    <StoryCard item= {item} />
  )

  const renderPost= ({ item } ) => (
    <Post item= {item} />
  )

  return (
    <View style={{flex: 1, backgroundColor: colors.dark }}>
      <Text>Login</Text>
    </View>
  )
}

export default Login