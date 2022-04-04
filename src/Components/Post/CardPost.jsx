import { View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import styled from "styled-components/native"
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"
import DoubleTap from '../Others/DoubleTap'
import Wakanda from '../Others/Wakanda'


const CardPost = ({ imgPost, onPress, onDoubleTap, state }) => {

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
    <Area width={w} >
        <DoubleTap onDoubleTap={onDoubleTap}>
          <PostArea 
            source={{uri: `${imgPost}`}}
            resizeMode= "cover"
            onPress={onPress}
          />
        </DoubleTap>
        {like &&
            <LikeArea style={{elevation: 20, shadowColor: "#52006A"}}>
              <Wakanda />
            </LikeArea>
          }
    </Area>
  )
}

export const Area = styled.View`
    width: ${({width}) => width}px;
    height: 400px;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const PostArea = styled.Image`
    width: 100%;
    height: 100%;
`
export const LikeArea = styled.View`
    width: 100px;
    height: 100px;
    position: absolute;
    left: 36%;
    /* background-color: aliceblue; */
`

export default CardPost