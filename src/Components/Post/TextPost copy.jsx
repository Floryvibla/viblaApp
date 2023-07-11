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

const TextPost = ({ 
  info,
  width, 
  onDoubleTap, 
  state, 
}) => {

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
    <Area width={width ?? w}>
      
      <DoubleTap onDoubleTap={onDoubleTap}>
        <PostArea 
          // style={{borderBottomWidth: 1, borderBottomColor: "#cecece51"}}
        >
          <Text start size={info?.length > 20 ? 16 : 20}> {info} </Text>
        </PostArea>
      </DoubleTap>
      
      {/* <ReadMore 
        text=' 
      /> */}
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
  /* height: ${height / 3}px; */
  justify-content: center;
  align-items: center;
  position: relative;
  /* margin-top: 40px; */
  /* padding: 0px 0px 10px 0px; */
  /* background-color: red; */
`
export const PostArea = styled.Pressable`
  width: 100%;
  /* height: 100%; */
  padding: 0px 10px 10px 15px;

  /* border-bottom: 1px solid ${colors.white_100}; */
`
export const LikeArea = styled.View`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 36%;
  /* background-color: aliceblue; */
`

export default TextPost