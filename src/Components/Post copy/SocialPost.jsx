// import { View, } from 'react-native'
import React, { useRef } from 'react'
import styled from "styled-components/native"
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons, Foundation } from '@expo/vector-icons';
import Curtido from './Curtido'
import NoLike from "../../Assets/saudacão/wakanda_nolike.png"
import Like from "../../Assets/saudacão/wakanda_like.png"
import { Dimensions, TouchableHighlight } from 'react-native';
import { Modalize } from 'react-native-modalize';

const { width, height } = Dimensions.get('screen')

const SocialPost = ({ state, onPressLike, onPressComment, nameIconHear }) => {
  return (
    <Area>
        <LikeArea>
          <CommentIcon onPress={onPressLike} color={state ? colors.dourado : colors.white} name={"heart"} />
          <Text>258</Text>
        </LikeArea>
        <CommentArea onPress={onPressComment}>
          <CommentIcon name="comment" />
          <Text>25</Text>
        </CommentArea>
        <ShareArea>
          <CommentIcon name="share" />
          {/* <Text>1k</Text> */}
        </ShareArea>
    </Area>
  )
}


export const CommentArea = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
  
`
export const CommentIcon = styled(MaterialCommunityIcons)`
  color: ${({color}) => color ? color : colors.white};
  font-size: ${({size}) => size ?? 20}px;
`

export const Text = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  margin-left: 3px;
`
export const LikeArea = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`
export const ShareArea = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 0px 0px;
`
export const SubtitleArea = styled.TouchableOpacity`
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