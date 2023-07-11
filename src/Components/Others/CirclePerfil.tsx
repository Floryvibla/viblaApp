import { View } from 'react-native'
import React from 'react'
import styled from "styled-components/native"
import { Entypo } from '@expo/vector-icons';
import { colors } from "../../Constants/styles"
import { ClickPressable, Text, Touch } from '../styles'
import { Icon } from '../Header/HeaderBack'
import { urlFile } from '../../config/http';



const CirclePerfil = ({ imgSrc, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Avatar
        source={imgSrc ? {uri: urlFile+imgSrc} : require('../../Assets/images/profile_default.png')}
      />
    </Container>
  )
}

export const Container = styled.Pressable`
  width: 35px;
  height: 35px;
  border: 1px solid ${colors.dourado};
  border-radius: 50px;
  position: relative;
  background-color: #cecece24;
  justify-content: center;
  align-items: center;
`
export const Avatar = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 50px;
`

export default CirclePerfil