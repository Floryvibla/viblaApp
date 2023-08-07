import { View, Text, FlatList, Platform } from 'react-native'
import React, { useEffect, useRef } from 'react'
import HeaderHome from '../../components/Header'
import { Container, Divisor } from './styles'
import { useNavigation } from '@react-navigation/native'
import Post from '../../components/Post'
import { othersActions, postsActions } from '../../redux/actions'
import { PostDataDto, PostDto } from '../../dtos/postsDtos'
import { formatDate } from '../../utils/dates'
import { useDispatch, useSelector } from 'react-redux'
import * as NavigationBar from 'expo-navigation-bar';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { HEIGHT_HEADER_FEED } from '../../utils'

const Home = () => {

  const navigation = useNavigation<any>()
  const dispatch = useDispatch<any>()

  const bottomTabBarHeight = useBottomTabBarHeight()
  

  const { contentDisplayModal } = useSelector((state: any) => state.others)

  const { dataPost, mutate } = postsActions.LoadPosts()

  const onOpen = (item: any) => {
    dispatch(othersActions.openModal({
      title: "optionHeaderPost",
      data: item
    }))
  };

  const handleToSelfPost= (item: any) => {
    // console.log(item);
    navigation.navigate('selfPost', {
      idPost: item.id,
      data: item,
      isOnPressComment: true
    })
  }

  // console.log("dataPost: ", dataPost);

  const renderPost = ({item}: {item: PostDto}) => (
    <Post 
      username={item?.attributes.owner.data?.attributes.username}
      createdAt={formatDate(item?.attributes.createdAt)}
      onPressDot={() => onOpen(item)}
      isActiveOptionsPost={contentDisplayModal === 'optionHeaderPost'}
      info={item?.attributes.info}
      onPressPost={() => handleToSelfPost(item)}
      medias={item?.attributes.medias}
    />
  )
  
  useEffect(() => {
    // Platform.OS === 'android' && NavigationBar.setBackgroundColorAsync('transparent');
  }, [])
  
  
  return (
    <Container>
      <FlatList 
        data={dataPost}
        keyExtractor={(item: any) => item.id}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
        // bounces={false}
        ItemSeparatorComponent={() => <Divisor />}
        contentContainerStyle={{
          paddingTop: HEIGHT_HEADER_FEED,
          paddingBottom: bottomTabBarHeight
        }}
      />
    </Container>
  )
}

export default Home