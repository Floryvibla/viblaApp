import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef } from 'react'
import * as NavigationBar from 'expo-navigation-bar';
import styled from "styled-components/native"
import LottieView from  "lottie-react-native";
import Animation from "../../Assets/lotties/loading.json"
import { colors } from '../../Constants/styles';

type CustomActivityIndicatorProps = {
  color?: string;
  size?: "small" | "large";
  screen?: boolean
};

const Loading = ({
  screen
}: CustomActivityIndicatorProps) => {

  const animationRef = useRef<LottieView>(null);
  

  return (
    screen ? (
      <Container>
        {/* <CustomActivityIndicator size={40} /> */}
        <LottieView 
          ref={animationRef}
          source={Animation}
          autoPlay
          style={{width: 45}}
        />
      </Container>
    ) : (
      <LottieView 
        ref={animationRef}
        source={Animation}
        autoPlay
        style={{width: 20}}
      />
    )
  )
}

const Container = styled.View`
  position: absolute;
  z-index: 20;
  top: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.dark};
  flex: 1;
  width: 100%;
  height: 100%;
`

const CustomActivityIndicator = styled(ActivityIndicator).attrs<CustomActivityIndicatorProps>(
  ({ color = colors.gold, size = "small" }) => ({
    color,
  })
)``;

export default Loading