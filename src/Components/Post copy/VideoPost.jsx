import { View, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState, TouchableWithoutFeedback } from 'react'
// import Video from 'react-native-video';
import { Video, AVPlaybackStatus } from 'expo-av';
import styled from "styled-components/native"
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"
import DoubleTap from '../Others/DoubleTap'
import Wakanda from '../Others/Wakanda'
import Header from './Header'
import SocialVideoPost from './SocialVideoPost'
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window')

const VideoPost = ({ source, onPress, shouldPlay, onDoubleTap, state, item, onPressComment, onPressLike, feed }) => {
  const [like, setLike] = useState(state)
  const ref = useRef(null);
  const [status, setStatus] = useState({});
  const [pause, setPause] = useState(false);
  const navigation = useNavigation()

  // useImperativeHandle(parenRef, () => ({
  //     play,
  //     stop,
  //     unload
  //   })
  // )

  // const play = async () => {
  //   if (ref.current == null) {
  //     return
  //   }
  //   const status = await ref.current.getStatusAsync()
  //   if (status?.isPlaying) {
  //     return 
  //   }
  //   try {
  //     await ref.current.playAsync()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const stop = async () => {
  //   if (ref.current == null) {
  //     return
  //   }
  //   const status = await ref.current.getStatusAsync()
  //   if (!status?.isPlaying) {
  //     return 
  //   }
  //   try {
  //     await ref.current.stopAsync()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const unload = async () => {
  //   if (ref.current == null) {
  //     return
  //   }
  //   try {
  //     await ref.current.unloadAsync()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const onPlayPausePress = () => {
    if (feed) {
      navigation.navigate("video")
    } 
    // else {
    //   setPause(!pause)
    //   console.warn(pause);
    // }
  }

  const w= Dimensions.get('window').width

  useEffect(() => {
    setLike(state)
    if (state) {
      setTimeout(() => {
        setLike(false)
      }, 2000);
    }
  }, [state])
  

  return (
    <Area width={w} feed={feed} >
      <Header 
        imageProfile={item.imageProfile}
        username={item.username}
        relative={feed}
      />
      <DoubleTap onPress={onPlayPausePress}>
        <PostArea 
          source={{uri: `${source}`}}
          ref={ref}
          // useNativeControls={true}
          resizeMode={Video.RESIZE_MODE_COVER}
          isLooping
          shouldPlay={shouldPlay}
          positionMillis={!shouldPlay && 0}
          // onPlaybackStatusUpdate={status => setStatus(() => status)}
          paused={pause}  
          feed={feed}
          // style={{aspectRatio: feed ? 2/3 : 9/16}}
        />
      </DoubleTap>
      <SocialVideoPost onPressComment={onPressComment} onPressLike={onPressLike} state={state} />
      {/* {like &&
        <LikeArea style={{elevation: 20, shadowColor: "#52006A"}}>
          <Wakanda />
        </LikeArea>
      } */}
    </Area>
  )
}

export const Area = styled.View`
  width: ${({width}) => width}px;
  /* height: ${height / 1.2}px; */
  justify-content: center;
  align-items: center;
  position: relative;
  /* margin: ${({feed}) => feed ? "50px 0px" : "0px"}; */

  /* background-color: red; */
`
export const PostArea = styled(Video)`
  width: 100%;
  height: ${({feed}) => feed ? height - 260 : height - 126}px;
`
export const LikeArea = styled.View`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 36%;
    /* background-color: aliceblue; */
`

export default VideoPost