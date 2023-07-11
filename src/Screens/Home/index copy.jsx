import { View, Dimensions } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useSWRNativeRevalidate } from "@nandorojo/swr-react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../Constants/styles"
import StoryCard from '../../Components/Stories'
import Post from '../../Components/Post'
import { StoryContainer, PostArea, Divisor } from './styles'
import { data } from '../../datas/fakeStories'
import HeaderHome from '../../Components/Header'
import ModalComments from '../../Components/Modals/Comments'
import { useDispatch, useSelector } from 'react-redux'
import { commentActions, othersActions, postsActions } from '../../redux/actions'
import Dropdown from '../../Components/Dropdown'
import { Pressable } from 'react-native'
import { SafeArea, Text } from '../../Components/styles'
import { useNavigation } from '@react-navigation/native'
import { urlFile } from '../../config/http';
import Loading from '../../Components/Loading';

const Home = ({ }) => {

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { posts } = useSelector(state => state.posts)
  const { isAuth } = useSelector(state => state.auth)
  const { openDropdown, titleDropdown } = useSelector(state => state.others)
  const [focusedIndex, setFocusedIndex] = useState(0);
  
  const { dataPost, mutate } = postsActions.LoadPosts()
  // useSWRNativeRevalidate({ mutate })

  // console.log("isAuth: ", isAuth.id);

  const { height: HEIGHT } = Dimensions.get('window')

  const filterData = titleDropdown === "Todos" 
    ? dataPost?.data?.filter( i => i.type !== "video") 
    : dataPost?.data?.filter( i => i.type === titleDropdown.toLowerCase())

  const ITEM_HEIGHT = HEIGHT - 250;
  

  // console.log(filterData);

  const handleScroll = React.useCallback((event) => {
    dispatch(othersActions.closeDropdown())

    const offset = Math.round(event.nativeEvent.contentOffset.y / ITEM_HEIGHT);

    // console.log(offset, ITEM_HEIGHT);
    setFocusedIndex(offset)
  }, [setFocusedIndex]);

  const handleCreateStory = () => {
    navigation.navigate('create story')
  }

  const handleLikePost = (id) => {
    const updateLikePost = dataPost.data.map(data => {
      if (data.id === id) {
        return {
          ...data,
          viewer_is_liked: !data.viewer_is_liked,
          likes: data.likes ? data.viewer_is_liked ? (data.likes - 1) : (data.likes + 1) : 1
        }
      }
      return data
    })
    dispatch(postsActions.likePost({post: id}))
    mutate({...dataPost, data: updateLikePost})
  }

  const handlePressCommentPost= (item) => {
    // console.log(item);
    navigation.navigate('selfPost', {
      idPost: item.id,
      data: item,
      isOnPressComment: true
    })
  }

  const renderStory= ({ item } ) => (
    <StoryCard 
      item= {item} 
    />
  )

  const renderPost= ({ item, index } ) => (
    <Pressable 
    >
      {/* {index % 2 === 0 &&
        <View style={{flexDirection: 'row', paddingHorizontal: 40, paddingTop: 10}}>
          <Ionicons name="share-sharp" size={15} color={colors.darkGray} style={{marginRight: 5}} />
          <Text size={12} second start>Compartilhado por Flory</Text>
        </View>
      } */}
      <Post 
        // share={index % 2 === 0} 
        // shouldPlay={focusedIndex === index} 
        // item= {item.attributes} 
        // navigation={navigation} 
        // type={item.attributes.type}
        // avatar={item.attributes.owner.data?.avatar}
        // countComment={item.attributes.comments}
        // idUser={item.attributes.owner.data.id}
        isOwnerPost={item.attributes.owner.data.id === isAuth.id}
        info={item.attributes?.info}

        // isLikedPost={item.attributes.viewer_is_liked}
        // isSharedPost={item.attributes.viewer_is_shared}
        username={item.attributes.owner.data.attributes.username}
        idPost={item.id}
        // countLike={item.attributes.likes}
        // imgPost={urlFile+item.attributes.image}
        // onPressLike={() => handleLikePost(item.id)}
        // onPressComment={() => handlePressCommentPost(item.attributes)}
      />
    </Pressable>
  )

  const myStory = data.filter(i => i.id === 10)[0]
  

  return (
    <SafeArea>
      <View  
        style={{flex: 1, backgroundColor: colors.dark, position: "relative" }}
        // onPress={() => dispatch(othersActions.closeDropdown())}
      >
        {/* {openDropdown && <Dropdown />} */}
        <HeaderHome navigation={navigation} />
        {/* <Divisor /> */}

        <PostArea
          // ListHeaderComponent={
          //   <View style={{height: 150, flexDirection: "row"}}>
          //     <StoryContainer
          //       data={data.filter(i => i.id !== 10)}
          //       renderItem={renderStory}
          //       keyExtractor={item => item.id}
          //       horizontal={true}
          //       showsHorizontalScrollIndicator={false}
          //       ListHeaderComponent={<StoryCard onPresseAvatar={handleCreateStory} item= {myStory} />}
          //     />
          //   </View>
          // }
          // ItemSeparatorComponent={() => <View style={{height: 0}} />}
          data={dataPost}
          renderItem={renderPost}
          keyExtractor={item => item.id}
          onScroll={handleScroll}
          showsVerticalScrollIndicator={false}
            // onViewableItemsChanged={onViewableItemsChanged}
            // viewabilityConfig={viewabilityConfig}
          // pagingEnabled
        />
        {/* <ModalComments /> */}
      </View>
    </SafeArea>
  )
}

export default Home