import { View, Text, Pressable, Dimensions, Platform } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { colors } from "../../Constants/styles"
import {  PostAreaVideoPage, Divisor } from './styles'
import { data } from '../../datas/fakeStories'
import { useDispatch, useSelector } from 'react-redux'
import { othersActions } from '../../redux/actions/others.actions'
import VideoPost from '../../Components/Post/VideoPost'
import { useNavigation } from '@react-navigation/native';

const VideoScreen = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.posts)
  const [paused, setPaused] = useState(false)
  const [videoPaused, setVideoPaused] = useState(false)
  const [like, setLike] = useState(false)

  const videoRef = useRef(null)

  const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
  const ITEM_HEIGHT = HEIGHT - 125;

  const calcul = (HEIGHT / 100) * (Platform.OS === "ios" ? 14.9 : 10 )

  const navigation = useNavigation()

  const handleLike= () => {
    setLike(!like)
  }
  const handleComment= () => {
    navigation.navigate('selfPost')
  }


  const handleScroll = React.useCallback((event) => {
    dispatch(othersActions.closeDropdown())

    const offset = Math.round(event.nativeEvent.contentOffset.y / ITEM_HEIGHT);
    
    if (videoPaused === offset) {
      setPaused(false)
    } else {
      setPaused(true)
    }
    // console.log(Math.round(event.nativeEvent.contentOffset.y));
    setFocusedIndex(offset)
  }, [setFocusedIndex]);

  useEffect(() => {
    if (videoPaused === focusedIndex) {
      setPaused(true)
    } else {
      setPaused(false)
      setVideoPaused(false)
    }
  }, [focusedIndex, videoPaused, paused])
  
  
  const renderPost= ({ item, index } ) => (
    <View
      style={{
        width: "100%", 
        height: Platform.OS === "ios" ? HEIGHT - calcul : HEIGHT - calcul, 
        position: "relative",
        justifyContent: "center", alignItems: "center"
        // backgroundColor: "green"
      }}>
      <VideoPost 
        shouldPlay={focusedIndex === index} 
        feed={false}
        focusedVideo={focusedIndex} 
        item= {item} 
        navigation={navigation} 
        source={item?.url}
        index={index}
        // videoPaused={videoPaused}
        state={like}
        onPressComment={handleComment}
        onPressLike={handleLike}
      />
    </View>
  )
  

  return (
    <View  
      style={{flex: 1, backgroundColor: colors.dark, position: "relative" }}
    >
      <PostAreaVideoPage
        // windowSize={4}
        // initialNumToRender={0}
        // maxToRenderPerBatch={2}
        data={data.filter( i => i.type === "video")}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        onScroll={handleScroll}
        pagingEnabled
        // onMomentumScrollEnd={onScrollEnd}
        showsVerticalScrollIndicator={false}
      />
      {/* <ModalComments /> */}
    </View>
  )
}

export default VideoScreen