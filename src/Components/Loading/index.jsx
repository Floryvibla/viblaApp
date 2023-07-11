import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import LottieView from  "lottie-react-native";
import Animation from "../../Assets/lotties/loading.json"

const Loading = ({size, bg}) => {

  const animationRef = useRef(null);

  return (
    bg 
    ? (
      <View 
        style={{
          position: "absolute", 
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00000096",
          width: "100%",
          height: "100%",
          zIndex: 20
        }}
      >
        <LottieView
          source={Animation}
          loop
          autoPlay
          style={{width: size ?? 100}}
          ref={animationRef}
        />
      </View>
    )
    : (
      <LottieView
        source={Animation}
        loop
        autoPlay
        style={{width: size ?? 100}}
        ref={animationRef}
      />
    )
  )
}

export default Loading