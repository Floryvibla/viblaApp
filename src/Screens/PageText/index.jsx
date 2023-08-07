import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from "../../Constants/styles"
import StoryCard from '../../components/Stories'
import Post from '../../components/Post'
import { StoryContainer, PostArea, Divisor } from './styles'
import { data } from '../../datas/fakeStories'
import HeaderHome from '../../components/Header'
import ModalComments from '../../components/Modals/Comments'
import { useDispatch, useSelector } from 'react-redux'
import { postsActions } from '../../redux/actions/posts.actions'
import HeaderSelfPost from '../../components/Header/HeaderSelfPost'

const PageText = ({ navigation }) => {

  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(postsActions.loadPosts())
    // console.log(posts)
  }, [posts])

  const renderStory= ({ item } ) => (
    <StoryCard item= {item} />
  )

  const renderPost= ({ item } ) => (
    <Post item= {item} navigation={navigation} />
  )

  // console.log(posts);
  

  return (
    <View style={{flex: 1, backgroundColor: colors.dark }}>
      <HeaderSelfPost title="Teste" navigation={navigation} />
      {/* <Divisor /> */}
      <PostArea
        // ListHeaderComponent={
        //   <StoryContainer
        //     data={data}
        //     renderItem={renderStory}
        //     keyExtractor={item => item.story}
        //     horizontal={true}
        //   />
        // }
        ItemSeparatorComponent={() => <View style={{height: 30}} />}
        data={data.filter(item => item.type === "text")}
        renderItem={renderPost}
        keyExtractor={item => item.story}
      />
      {/* <ModalComments /> */}
    </View>
  )
}

export default PageText