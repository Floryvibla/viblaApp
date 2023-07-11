import { View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import styled from "styled-components/native"
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"
import DoubleTap from '../Others/DoubleTap'
import Wakanda from '../Others/Wakanda'
import Header from './Header'
import SocialPost from './SocialPost'
import ReadMore from '../Others/ReadMore'
import { Text } from '../styles'


const { width, height } = Dimensions.get('window')

const PhotoPost = ({ imgPost, info, onPress, onDoubleTap, state, item, onPressComment, onPressLike, share }) => {

  const [like, setLike] = useState(state)

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
    <Area width={w} 
      // style={[{borderBottomWidth: 1, borderColor: colors.transparenteGray}]}
    >
      {/* <Header 
        imageProfile={item.imageProfile}
        username={item.username}
        relative
      /> */}
      <DoubleTap onDoubleTap={onDoubleTap}>
        <PostArea 
          source={{uri: `${imgPost}`}}
          resizeMode= "cover"
          onPress={onPress}
          style={{aspectRatio: 4/5, borderRadius: 10}}
        />
      </DoubleTap>
      
      
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
  align-items: center;
  position: relative;
  /* background-color: red; */
`
export const PostArea = styled.Image`
  width: 100%;
  /* height: 100%; */
  /* aspect-ratio: 4/5; */
`
export const LikeArea = styled.View`
    width: 100px;
    height: 100px;
    position: absolute;
    left: 36%;
    /* background-color: aliceblue; */
`

export default PhotoPost