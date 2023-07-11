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


const { width, height } = Dimensions.get('window')

const TextPost = ({ imgPost, onPress, onDoubleTap, state, item, onPressComment, onPressLike }) => {

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
      style={{borderBottomWidth: 1, borderColor: "#cecece51"}}
    >
      <Header 
        imageProfile={item.imageProfile}
        username={item.username}
        relative
      />
      <DoubleTap onDoubleTap={onDoubleTap}>
        <PostArea 
          // style={{borderBottomWidth: 1, borderBottomColor: "#cecece51"}}
        >
          <TextView> {item?.info} </TextView>
        </PostArea>
      </DoubleTap>
      <SocialPost onPressComment={onPressComment} onPressLike={onPressLike} state={state} />
      {/* <ReadMore 
        text='Você pode encontrar a necessidade de referenciar um ícone SVG local ou uma imagem de dentro do seu projeto. Quando você estava configurando o projeto de exemplo, lembre-se de que você também instalou a biblioteca . Você pode usar isso para renderizar um ícone ou imagem SVG local dentro do seu projeto.react-native-svg-transformer' 
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
export const PostArea = styled.TouchableOpacity`
  width: 100%;
  /* height: 100%; */
  padding: 0px 10px 10px 10px;

  /* border-bottom: 1px solid ${colors.white_100}; */
`
export const TextView = styled.Text`
  color: ${colors.white};
`
export const LikeArea = styled.View`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 36%;
  /* background-color: aliceblue; */
`

export default TextPost