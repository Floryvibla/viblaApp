import { View, Text, Dimensions } from 'react-native'
import styled from "styled-components/native"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { othersConstants } from '../../redux/constants'
import Header from './Header'
import ReadMore from '../Others/ReadMore'
import VideoPost from './VideoPost'
import PhotoPost from './PhotoPost'
import TextPost from './TextPost'

const { width, height } = Dimensions.get('window')

const Post = ({ item, navigation, feed=true, shouldPlay }) => {
  const dispatch = useDispatch()
  const [like, setLike] = useState(false)

  const handleLike= () => {
    setLike(!like)
  }
  const handleComment= () => {
    navigation.navigate('selfPost')
  }

  return (
    <View style={{position: "relative"}}>
        {item.type === "Fotos" &&
          <PhotoPost 
            imgPost={item.story}
            onDoubleTap={handleLike}
            state={like}
            item={item}
            onPressComment={handleComment}
            onPressLike={handleLike}
          />
        }
        {item.type === "video" &&
          <VideoPost 
            source={item?.url}
            onDoubleTap={handleLike}
            state={like}
            item={item}
            onPressComment={handleComment}
            onPressLike={handleLike}
            feed={feed}
            shouldPlay={shouldPlay}
          />
        }
        {item.type === "text" &&
          <TextPost 
            imgPost={item.story}
            onDoubleTap={handleLike}
            state={like}
            item={item}
            onPressComment={handleComment}
            onPressLike={handleLike}
          />
        }
    </View>
  )
}

export const Area = styled.View`
  width: 100%;
  /* height: ${height}px; */
  position: relative;
`

export default Post