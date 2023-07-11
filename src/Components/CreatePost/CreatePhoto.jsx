import { View, Image, Dimensions, Pressable } from 'react-native'
import React, { useState, useRef, createRef } from 'react'
import { Area } from './styles'
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImageManipulator from 'expo-image-manipulator';
import { PanGestureHandler, PinchGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Animated } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../Constants/styles';
import { useEffect } from 'react';
import { Text, Wrapper } from '../styles';
import iconCamera from '../../Assets/icons/3d/camera.png'
import { useDispatch, useSelector } from 'react-redux';
import BaseModalInterno from '../Modals/Interno/Base';
import PermissionsModal from '../Modals/Interno/Permissions';
import GalleryPicker from '../GalleryPicker';
import ButtonAction from '../Button';
import { othersActions, postsActions } from '../../redux/actions';
import Dropdown from '../Dropdown';
import { useNavigation } from '@react-navigation/native';
import HeaderSelectTypePost from '../Header/HeaderSelectTypePost';

const CreatePhoto = () => {

  const dispatch = useDispatch()
  const { openDropdown, titleDropdown, typePostCreate, dataHeader } = useSelector(state => state.others)
  const { isAuth } = useSelector(state => state.auth)
  const { typesPost, successCreatePost, loadingCreatePost } = useSelector(state => state.posts)
  const camRef = useRef(null)
  const navigation = useNavigation()
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [permissionGalery, requestPermissionGalery] = MediaLibrary.usePermissions();
  const [capturePhoto, setCapturePhoto] = useState(false)
  const [flashCamera, setFlashCamera] = useState(false)
  const [imagePreview, setImagePreview] = useState(false)
  const [panEnabled, setPanEnabled] = useState(false);

  const { dataPost, mutate } = postsActions.LoadPosts()

  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  

  const pinchRef = createRef();
  const panRef = createRef();

  const onPinchEvent = Animated.event([{
    nativeEvent: { scale }
  }],
    { useNativeDriver: true });

  const onPanEvent = Animated.event([{
    nativeEvent: {
      translationX: translateX,
      translationY: translateY
    }
  }],
    { useNativeDriver: true });

  const handlePinchStateChange = ({ nativeEvent }) => {
    // enabled pan only after pinch-zoom
    if (nativeEvent.state === State.ACTIVE) {
      setPanEnabled(true);
    }

    // when scale < 1, reset scale back to original (1)
    const nScale = nativeEvent.scale;
    if (nativeEvent.state === State.END) {
      if (nScale < 1) {
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true
        }).start();
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true
        }).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true
        }).start();

        setPanEnabled(false);
      }
    }
  };

  const handleOpenDropdown= () => {
    dispatch(othersActions.openDropdown(!openDropdown))
  }



  useEffect(() => {
    if (flashCamera) {
      setTimeout(() => {
        setFlashCamera(false)
      }, 150);
    }
  }, [flashCamera])

  if (!permission || !permissionGalery) {
    return <Area />
  }

  if (!permission.granted) {
    return (
      <PermissionsModal 
        type={"permission-camera"}
        sizeIcon={120}
        description={"Por favor, forneça-nos acesso a sua câmera, para uma melhor experiência"}
        title={"Ativar Camera"}
        onPress={requestPermission}
        openModal={true}
      />
    )
  }

  if (!permissionGalery.granted) {
    return (
      <PermissionsModal 
        type={"permission-galery"}
        sizeIcon={120}
        description={"Por favor, forneça-nos acesso a sua galeria, para uma melhor experiência"}
        title={"Ativar Galeria"}
        onPress={requestPermissionGalery}
        openModal={true}
      />
    )
  }

  function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  }

  async function takePicture() {
    setFlashCamera(true)
    if (camRef) {
      const data = await camRef.current.takePictureAsync()
      setCapturePhoto(data.uri)
    }
  }

  async function onCropImage() {
    const { width, height } = imagePreview
    const imageResult = await ImageManipulator.manipulateAsync(imagePreview.uri, 
      [
        {crop: {
          height,
          width,
          originX: 0,
          originY: 0
        }}
      ],
        {compress: 0.1, format: ImageManipulator.SaveFormat.PNG}
    );

    setImagePreview({...imagePreview, ...imageResult});
  }

  const handleSubmit = () => {

    const updatePost = {
      ...dataPost.data[0],
      owner: isAuth.id,
      type: typePostCreate.id,
      info: value,
      id: dataPost.data[0].id + 1
    }

    const data = {
      type: typePostCreate.id,
      owner: isAuth.id,
      info: value
    }

    // console.log({...dataPost, data: [...dataPost.data, updatePost]});
    mutate({...dataPost, data: [...dataPost.data, updatePost]}, false)
    dispatch(postsActions.createPost(data)) 
  }

  // console.log(imagePreview);

  return (
    <Area>
      {openDropdown && 
        <Dropdown 
          type={"create post"} 
          titleCheck={typePostCreate.id} 
          items={typesPost.filter(i => i.id != 4)}  
        />
      }
      <HeaderSelectTypePost 
        onPressOpenDropdown={handleOpenDropdown} 
        title={"Post"} 
        dataImage={imagePreview}
        onPressBtnRight={handleSubmit}
        loadingContentRight={loadingCreatePost}
        successContentRight={successCreatePost}
      />
      <PanGestureHandler
        onGestureEvent={onPanEvent}
        ref={panRef}
        simultaneousHandlers={[pinchRef]}
        enabled={panEnabled}
        failOffsetX={[-1000, 1000]}
        shouldCancelWhenOutside
      >
        <Animated.View
          style={{flex: 3, marginBottom: 10}}
          initial
        >
          {/* <GestureHandlerRootView> */}
            {/* <PinchGestureHandler
              ref={pinchRef}
              onGestureEvent={onPinchEvent}
              simultaneousHandlers={[panRef]}
              onHandlerStateChange={handlePinchStateChange}
            > */}
              <Animated.Image 
                style={{width: "100%", height: "100%", transform: [{ scale }, { translateX }, { translateY }]}}
                source={{uri: imagePreview.uri}}
                resizeMode="cover"
              />
            {/* </PinchGestureHandler> */}
          {/* </GestureHandlerRootView> */}
          
        </Animated.View>
      </PanGestureHandler>
      <GalleryPicker preview={item => setImagePreview(item)}/>
    </Area>
  )
}

export default CreatePhoto