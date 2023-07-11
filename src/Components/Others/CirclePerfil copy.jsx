import { View } from 'react-native'
import React from 'react'
import styled from "styled-components/native"
import { Entypo } from '@expo/vector-icons';
import { colors } from "../../Constants/styles"
import { Avatar, ClickPressable, Text, Touch } from '../styles'
import { Icon } from '../Header/HeaderBack'
import { urlFile } from '../../config/http';


export const Container = styled.Pressable`
  width: ${({ size }) => size ?? 35}px;
  height: ${({ size }) => size ?? 35}px;
  border: 1px solid ${props => props.colorCircle ?? colors.dourado};
  border-radius: 50px;
  position: relative;
  background-color: #cecece24;
  justify-content: center;
  align-items: center;
`

const CirclePerfil = ({ imgSrc, story, colorCircle, size, noPicture, edit, onPressEditProfile, background, onPress, hashtag }) => {
  return (
    <Container onPress={onPress} size={size} colorCircle= {colorCircle}>
      { hashtag ? <Text size={28} >#</Text> :
        !imgSrc ?
          story 
            ? <Entypo name="plus" size={24} color={colors.darkGray} />
            : <Avatar source={require('../../Assets/images/profile_default.png')} background={background} />
          : (
            <Avatar
              source={imgSrc ? {uri: urlFile+imgSrc} : require('../../Assets/images/profile_default.png')}
              size={size}
              background={background}
            />
          )
      }
    </Container>
  )
}

export default CirclePerfil