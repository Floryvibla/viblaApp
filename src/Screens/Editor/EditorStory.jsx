import { Alert, Image, Pressable, View, Dimensions } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Video, AVPlaybackStatus } from 'expo-av';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import CameraVB from '../../Components/Camera'
import { Area, Button, Text } from '../../Components/styles'
import HeaderBack from '../../Components/Header/HeaderBack'
import { colors } from '../../Constants/styles';
import VideoPost from '../../Components/Post/VideoPost';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import ButtonAction from '../../Components/Button';

const EditorStory = () => {

  const navigation = useNavigation()
  const { data } = useRoute().params
  const video = useRef(null);
  const [noBack, setNoBack] = useState(true)
  const [text, setText] = React.useState('flory');

  const hasUnsavedChanges = Boolean(text);

  // console.log(data);

  const handleBack = () => {
    Alert.alert(
      '',
      'Tem certeza que quer descartar suas edições?',
      [
        {
          text: 'Descartar',
          style: 'destructive',
          onPress: () => navigation.goBack(),
        },
        { text: "Cancelar", style: 'cancel', onPress: () => {} },
      ]
    );
  }

  // React.useEffect(
  //   () =>
  //     navigation.addListener('beforeRemove', (e) => {
  //       const action = e.data.action;
  //       if (!noBack) {
  //         return;
  //       }

  //       e.preventDefault();

  //       Alert.alert(
  //         '',
  //         'Tem certeza que quer descartar suas edições?',
  //         [
  //           {
  //             text: 'Descartar',
  //             style: 'destructive',
  //             onPress: () => navigation.dispatch(action),
  //           },
  //           { text: "Cancelar", style: 'cancel', onPress: () => {} },
  //         ]
  //       );
  //     }),
  //   [noBack, navigation]
  // );
  
  // console.log(data);

  const onPausedVideo = (index) => {
    setPaused(!paused)
    setVideoPaused(!paused ? index : false)
  }

  const { scale, height, width } = Dimensions.get("window")

  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        // { translateY: offset.value.y },
        // { scale: withSpring(isPressed.value ? scale - 1.5 : scale - 1.5) },
      ],
      // width: offset.value.x
      // backgroundColor: isPressed.value ? 'yellow' : 'blue',
    };
  });

  // console.log(data);
  // console.log(width, height);

  const start = useSharedValue({ x: 0, y: 0 });
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  return (
    <View   
      style={{flex: 1}}
    >
      {/* <HeaderBack btn contentRight={"Postar"} auth={false} title="" /> */}
      <View style={{flex: 10.5, position: "relative"}}>
        {/* <GestureDetector gesture={gesture}>
          <Animated.View 
            style={[{
              width: 100,
              height: 100,
              zIndex: 25,
              backgroundColor: "red",
              position: "absolute",
              borderRadius: 100,
              backgroundColor: 'red',
              alignSelf: 'center',
            }, animatedStyles]}
          />
        </GestureDetector> */}
        <Pressable 
          style={{
            backgroundColor: colors.dark+49, 
            padding: 4, 
            margin: 15,
            borderRadius: 25, 
            position: "absolute",
            // top: "10%",
            zIndex: 30
          }}
          onPress={handleBack}
        >
          <MaterialIcons name="close" size={25} color={colors.white_100} />
        </Pressable>
        {data?.type === "image"
          ? (
            <GestureDetector gesture={gesture}>
              <View style={[{borderRadius: 20}]}>
                <Image 
                  style={{width: '100%', height: '100%', borderRadius: 20}}
                  resizeMode="cover"
                  source={{uri: data.photo}}
                />
              </View>
            </GestureDetector>
          ) : (
            // <Video
            //   ref={video}
            //   style={{aspectRatio: 9/16, borderRadius: 20}}
            //   source={{
            //     uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            //   }}
            //   useNativeControls
            //   resizeMode="contain"
            //   isLooping
            //   // onPlaybackStatusUpdate={status => setStatus(() => status)}
            // />
            <View style={{aspectRatio: 9/16, borderRadius: 20}}>
              <VideoPost 
                shouldPlay={true} 
                source={data.stories}
                index={0}
                videoPaused={0}
                borderRadius
                playerEditor
                focusedVideo={0}
              />  
            </View>
          )
        }
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ButtonAction mt={20} title={"Postar"} onPress={() => navigation.navigate('Home')}>
          
        </ButtonAction>
      </View>
    </View>
  )
}

export default EditorStory