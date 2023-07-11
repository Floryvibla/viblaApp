// import { View, } from 'react-native'
import React, { useRef } from 'react'
import styled from "styled-components/native"
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { EvilIcons, Foundation } from '@expo/vector-icons';
import Curtido from './Curtido'
import NoLike from "../../Assets/saudacão/wakanda_nolike.png"
import Like from "../../Assets/saudacão/wakanda_like.png"
import { Dimensions, TouchableHighlight } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Text } from '../styles';

const { width, height } = Dimensions.get('screen')

const SocialPost = ({ share, color, size, state, onPressLike, onPressComment, nameIconHear, countLike, countComment }) => {
  return (
    <Area>
      <LikeArea>
        <CommentIcon onPress={onPressLike} color={state ? colors.dourado : colors.white_100} name={"heart"} />
        <Text size={14} mb={4} start ml={3}>{countLike === 0 ? "" : countLike}</Text>
      </LikeArea>
      <CommentArea onPress={onPressComment}>
        <CommentIcon name="comment" />
        <Text size={14} mb={4} start ml={3}>{countComment === 0 ? "" : countComment}</Text>
      </CommentArea>
      <ShareArea>
        {/* <CommentIcon name="share" /> */}
        <Ionicons name="share-sharp" size={size ?? 20} color={share ? colors.gold : color ?? colors.white_100} />
        {/* <Text>1k</Text> */}
      </ShareArea>
    </Area>
  )
}


export const CommentArea = styled.Pressable`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
  
`
export const CommentIcon = styled(MaterialCommunityIcons)`
  color: ${({color}) => color ? color : colors.white_100};
  font-size: ${({size}) => size ?? 15}px;
`

export const LikeArea = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`
export const ShareArea = styled.Pressable`
  flex-direction: row;
  align-items: center;
  margin: 0px 0px;
`
export const SubtitleArea = styled.Pressable`
  /* flex-direction: row;
  align-items: center; */
`

export const Area = styled.View`
  width: 100%;
  /* height: 40px; */
  flex-direction: row;
  /* padding: 5px 10px; */
  justify-content: space-around;
  /* background-color: red; */
`

export default SocialPost