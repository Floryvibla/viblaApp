import { View, Text, FlatList, Platform, ViewToken } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import HeaderHome from '../../components/Header'
import { Container, Divisor } from './styles'
import Post from '../../components/Post'
import { othersActions, postsActions } from '../../redux/actions'
import { PostDataDto, PostDto } from '../../dtos/postsDtos'
import { formatDate } from '../../utils/dates'
import { useDispatch, useSelector } from 'react-redux'
import * as NavigationBar from 'expo-navigation-bar';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { HEIGHT_HEADER_FEED } from '../../utils'
import Loading from '../../components/Loading'
import { useNavigate } from '../../hooks/useNavigate'
import { Modalize } from 'react-native-modalize'
import TextUI from '../../components/Text'
import SelfPost from '../SelfPost'
import { useModal } from '../../hooks/useModal'
import { Modal } from '../../components/Modals'
import { AppContext } from '../../context/AppContext'
import { useIsFocused } from '@react-navigation/native'

const Home = () => {

  const { navigation } = useNavigate()
  const dispatch = useDispatch<any>()
  
  const isFocusedScreen = useIsFocused();

  const { onOpenModal: handleOpenModal, modal } = useModal()
  const { state: {showHeader}, UpdateState } = useContext(AppContext)

  const bottomTabBarHeight = useBottomTabBarHeight()

  const modalizeRef = useRef<Modalize>(null);

  const onOpenModal = (index: number) => {
    // if (modal.displayName === 'selfpost') {
      // modalizeRef.current?.open();
      handleOpenModal({displayName: 'selfpost', data: {dataPost, indexCurrentPost: index}})
    // }
  };
  
  // console.log("Modal: ", modal);
  

  const { contentDisplayModal } = useSelector((state: any) => state.others)

  const { dataPost, mutate } = postsActions.LoadPosts()

  const [currentPost, setCurrentPost] = useState<PostDto | null>(null)

  const onViewableItemsChanged = useRef(({ changed }: { changed: ViewToken[] }) => {
    if (changed && changed.length > 0) {
      setCurrentPost(changed[0].item)
      // console.log("changed: ", changed);
      
    }
  });

  const onOpen = (item: any) => {
    dispatch(othersActions.openModal({
      title: "optionHeaderPost",
      data: item
    }))
  };

  const handleToSelfPost= (index: number) => {
    // console.log(item);
    // navigation.navigate('selfPost')
    // dispatch(othersActions.openModal({
    //   title: "selfPost",
    //   data: item
    // }))
    onOpenModal(index)
  }

  const renderPost = ({item, index}: {item: PostDto, index: number}) => (
    <Post 
      username={item?.attributes.owner.data?.attributes.username}
      createdAt={formatDate(item?.attributes.createdAt)}
      onPressDot={() => onOpen(item)}
      isActiveOptionsPost={contentDisplayModal === 'optionHeaderPost'}
      info={item?.attributes.info}
      onPressPost={() => handleToSelfPost(index)}
      medias={item?.attributes.medias}
      isCurrentPost={item?.id === currentPost?.id}
      // id={item?.id}
    />
  )
  
  useEffect(() => {
    // Platform.OS === 'android' && NavigationBar.setBackgroundColorAsync('transparent');
    UpdateState({showHeader: isFocusedScreen})
  }, [isFocusedScreen])

  if (!dataPost) {
    return <Loading screen />
  }
  
  
  return (
    <>
      <Container>
        <FlatList 
          data={dataPost}
          keyExtractor={(item: any) => item.id}
          renderItem={renderPost}
          showsVerticalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged.current}
          // bounces={false}
          ItemSeparatorComponent={() => <Divisor />}
          contentContainerStyle={{
            paddingTop: HEIGHT_HEADER_FEED,
            paddingBottom: bottomTabBarHeight
          }}
          viewabilityConfig={{
            waitForInteraction: false,
            itemVisiblePercentThreshold: 100
          }}
          // snapToInterval={200}
          scrollEventThrottle={200}
        />
      </Container>
    </>
    
  )
}

export default Home