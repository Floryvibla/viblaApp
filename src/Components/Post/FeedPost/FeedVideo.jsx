import { View, Text } from 'react-native'
import React from 'react'
import { Video, AVPlaybackStatus } from 'expo-av';
import { ImageIllustration, Wrapper } from '../../styles'

const FeedVideo = ({ source }) => {
  return (
    <Wrapper>
      <Video
        source={{uri: `${source}`}}
        // useNativeControls={true}
        resizeMode={Video.RESIZE_MODE_COVER}
        // isLooping
        shouldPlay={false}
        positionMillis={!shouldPlay && 0}
        // onPlaybackStatusUpdate={status => setStatus(() => status)}
        paused={pause}  
        feed={feed}
        style={{aspectRatio: feed ? 2/3 : 9/16}}
      >

      </Video>
    </Wrapper>
  )
}

export default FeedVideo