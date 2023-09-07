// import { View, } from 'react-native'
import React, { useRef } from 'react'
import styled from "styled-components/native"
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { EvilIcons, Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Dimensions, TouchableHighlight } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Text } from '../styles';
import TextUI from '../Text';

const { width:WIDTH, height } = Dimensions.get('screen')

const sizeIcon = 18

interface SocialPostProps {
  share?: any
  color?: any 
  size?: any 
  stateLike?: boolean 
  onPressLike?: () => void 
  onPressComment?: any 
  nameIconHear?: any 
  countLike?: any 
  countComment?: any
  onPressDot?: () => void 
}

interface IconProps {
  isActive?: boolean
}

const SocialPost = ({
  stateLike,
  countLike,
  countComment,
  onPressDot,
  onPressComment
}: SocialPostProps) => {
  return (
    <Area>
      <Wrapper>
        <AreaIcon onPress={onPressComment}>
          <TextUI>{countComment}</TextUI>
          <IconMaterial name={"comment-processing"} />
        </AreaIcon>
        <AreaIcon>
          <TextUI>{countLike}</TextUI>
          <IconMaterial isActive={stateLike} name={"heart"} />
        </AreaIcon>
        <AreaIcon>
          <TextUI>{countLike}</TextUI>
          <IconAntDesign isActive={stateLike} name={"retweet"} />
        </AreaIcon>
      </Wrapper>

      <Wrapper>
        <AreaIcon onPress={onPressDot}>
          <Entypo name="dots-three-horizontal" size={22} color={colors.white} />
        </AreaIcon>
      </Wrapper>
    </Area>
  )
}


export const Wrapper = styled.View`
  flex-direction: row;
  gap: 20px;
`
export const CommentArea = styled.Pressable`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`
export const IconMaterial = styled(MaterialCommunityIcons)<IconProps>`
  color: ${({ isActive }) => isActive ? colors.dourado : colors.white_100};
  font-size: ${22}px;
`
export const IconAntDesign = styled(AntDesign)<IconProps>`
  color: ${({ isActive }) => isActive ? colors.dourado : colors.white_100};
  font-size: ${22}px;
`
export const AreaIcon = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
  gap: 5px;
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
  padding: 0px 20px;
  justify-content: space-between;
  /* background-color: red; */
`

export default SocialPost