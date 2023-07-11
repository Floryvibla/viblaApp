import { View, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState, TouchableWithoutFeedback } from 'react'
// import Video from 'react-native-video';
import { LinearGradient } from 'expo-linear-gradient';
import { Video, AVPlaybackStatus, Audio } from 'expo-av';
import styled from "styled-components/native"
import { AntDesign } from '@expo/vector-icons';
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

const VideoPost = ({ share, source, pause, index, playerEditor, onPress, style, shouldPlay, onDoubleTap, state, item, onPressComment, onPressLike, feed, focusedVideo, borderRadius }) => {
  const [like, setLike] = useState(state)
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [paused, setPaused] = useState(false)
  const [videoPaused, setVideoPaused] = useState(false)
  const navigation = useNavigation()

  const onPlayPausePress = () => {
    if (feed) {
      navigation.navigate("video")
    } 
    else {
      setPaused(!paused)
      setVideoPaused(!paused ? index : false)
    }
  }

  const w= Dimensions.get('window').width

  useEffect(() => {
    setLike(state)
    if (state) {
      setTimeout(() => {
        setLike(false)
      }, 2000);
    }

    if (shouldPlay) {
      if (videoPaused === index) {
        videoRef.current.pauseAsync()
      } else {
        videoRef.current.playAsync()
      }
    } 

  }, [state, videoPaused, pause])
  
  // console.log(pause);

  return (
    <Area onPress={onPlayPausePress} width={w} feed={feed}>
      {!playerEditor &&
        <Header 
          imageProfile={item.imageProfile}
          username={item.username}
          relative={feed}
          mt={feed ? 0 : 10}
        />
      }
      <Video
        ref={videoRef}
        style={style ?? {alignSelf: 'center', width: "100%", height: "100%", borderRadius: borderRadius ? 20 : 0}}
        source={{
          uri: source,
        }}
        resizeMode="cover"
        isLooping
        shouldPlay={shouldPlay}
        positionMillis={!playerEditor && !shouldPlay && 0}
        // isMuted={false}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        // useNativeControls={true}
      >

      </Video>
      {!playerEditor &&
        <>
          <SocialVideoPost share={share} onPressComment={onPressComment} onPressLike={onPressLike} state={state} />
          <Gradient
            locations={[0, 0.26, 0.6, 1]}
            colors={[
              "rgba(26, 26, 26, 0.6)",
              "rgba(26, 26, 26, 0)",
              "rgba(26, 26, 26, 0)",
              "rgba(26, 26, 26, 0.6)"
            ]}
          >

          </Gradient>
        </>

      }
      {focusedVideo === index && paused &&
        <View 
          style={{position: "absolute", zIndex: 30}}
        >
          <AntDesign name="play" size={100} color={colors.darkGray+89} />
        </View>
      }
    </Area>
  )
}

export const Area = styled.Pressable`
  width: ${({width}) => width}px;
  /* height: 100%; */
  justify-content: center;
  align-items: center;
  position: relative;
  /* margin: ${({feed}) => feed ? "50px 0px" : "0px"}; */

  /* background-color: red; */
`
export const PostArea = styled(Video)`
  width: 100%;
  height: ${({feed}) => feed ? 92+"%" : 100+"px"};
`
export const LikeArea = styled.View`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 36%;
    /* background-color: aliceblue; */
`
export const Gradient =  styled(LinearGradient)`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

export default VideoPost