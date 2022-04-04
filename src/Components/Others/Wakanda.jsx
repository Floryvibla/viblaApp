import { View, Text } from 'react-native'
import React from 'react'
import styled from "styled-components/native"
import * as Animatable from 'react-native-animatable'
import Left from "../../Assets/saudacão/bras.png"


const Wakanda = () => {
  return (
    <Area useNativeDriver animation="zoomIn" iterationCount={1} duration={300} style={{elevation: 20, shadowColor: "#52006A"}}>
        <IconLeft 
            style={{elevation: 20, shadowColor: "#52006A"}}
            source={Left}
            resizeMode= "cover"
        />
        <IconRight 
            style={{elevation: 20, shadowColor: "#52006A"}}
            source={Left}
            resizeMode= "cover"
            // useNativeDriver animation="fadeIn" iterationCount={Infinity} duration={3000}
        />
        {/* <Animatable.Text useNativeDriver animation="fadeIn" iterationCount={Infinity} duration={3000}>Wakanda aa</Animatable.Text> */}
    </Area>
  )
}

export const Area = styled(Animatable.View)`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const IconLeft = styled(Animatable.Image)`
    width: 100%;
    height: 100%;
    position: absolute;
`
export const IconRight = styled(IconLeft)`
    transform: scaleX(-1);
`

export default Wakanda