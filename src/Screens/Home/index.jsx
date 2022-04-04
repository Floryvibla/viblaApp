import { View, Text } from 'react-native'
import React from 'react'
import { colors } from "../../Constants/styles"
import StoryCard from '../../Components/Stories'
import Post from '../../Components/Post'
import { StoryContainer, PostArea, Divisor } from './styles'
import { data } from '../../datas/fakeStories'
import HeaderHome from '../../Components/Header'

const Home = () => {

  const renderStory= ({ item } ) => (
    <StoryCard item= {item} />
  )

  const renderPost= ({ item } ) => (
    <Post item= {item} />
  )

  return (
    <View style={{flex: 1, backgroundColor: colors.dark }}>
      <HeaderHome />
      {/* <Divisor /> */}
      <PostArea
        ListHeaderComponent={
          <StoryContainer
            data={data}
            renderItem={renderStory}
            keyExtractor={item => item.story}
            horizontal={true}
          />
        }
        data={data}
        renderItem={renderPost}
        keyExtractor={item => item.story}
      />
    </View>
  )
}

export default Home