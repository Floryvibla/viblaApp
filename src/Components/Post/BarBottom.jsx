// import { View, } from 'react-native'
import React, { useState } from 'react'
import styled from "styled-components/native"
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Curtido from './Curtido'
import NoLike from "../../Assets/saudacão/wakanda_nolike.png"
import Like from "../../Assets/saudacão/wakanda_like.png"
import { TouchableHighlight } from 'react-native';



const BarBottom = ({ state, onPressLike }) => {

  return (
    <Area>
        <CommentArea>
          <CommentIcon name="comment" />
          <Text>25</Text>
        </CommentArea>
        <LikeArea>
          <TouchableHighlight onPress={onPressLike} >
            <Image source={state ? Like : NoLike} resizeMode= "cover" />
          </TouchableHighlight>
          <Text>258</Text>
        </LikeArea>
        <ShareArea>
          <CommentIcon name="share-google" />
          <Text>1k</Text>
        </ShareArea>
    </Area>
  )
}


export const CommentArea = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
export const CommentIcon = styled(EvilIcons)`
  color: #E6E6E6;
  font-size: 30px;
`

export const Text = styled.Text`
  font-size: 16px;
  color: #E6E6E6;
  margin-left: 3px;
`
export const LikeArea = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Image = styled.Image`
  width: 30px;
  height: 30px;
  /* margin-right: 5px; */
`
export const ShareArea = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
export const SubtitleArea = styled.TouchableOpacity`
  /* flex-direction: row;
  align-items: center; */
`

export const Area = styled.View`
  width: 100%;
  /* height: 40px; */
  flex-direction: row;
  padding: 5px 10px;
  justify-content: space-between;
  /* background-color: red; */
`

export default BarBottom