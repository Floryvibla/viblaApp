import { View, Text } from 'react-native'
import React from 'react'
import styled from "styled-components/native"
import { colors } from "../../Constants/styles"


export const Container = styled.TouchableOpacity`
    width: ${({ size }) => size ? "43" : "33"}px;
    height: ${({ size }) => size ? "43" : "33"}px;
    border: 2px solid ${props => props.colorCircle ?? colors.dourado};
    border-radius: 50px;
`
export const ImageBack = styled.Image`
    width: ${({ size }) => size ?? "30"}px;
    height: ${({ size }) => size ?? "30"}px;
    border-radius: 50px;
`

const CirclePerfil = ({ imgSrc, colorCircle, size }) => {
  return (
    <Container size={size} colorCircle= {colorCircle}>
      <ImageBack
        source={imgSrc ? {uri: imgSrc} : require('../../Assets/images/woman.jpg')}
        size={size}
      />
    </Container>
  )
}

export default CirclePerfil