import { View } from 'react-native'
import React, { useState, useRef } from 'react'
import { Area, CameraArea, CameraBox, BottomArea, PreviewGaleria, Button } from './styles'
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../Constants/styles';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';
import { useEffect } from 'react';
import { Background, ButtonLinearGradient, Card, ClickPressable, Flash, ImageIllustration, Modal, Text, Wrapper } from '../styles';
import iconCamera from '../../Assets/icons/3d/camera.png'
import { useDispatch } from 'react-redux';
import Loading from '../Loading';
import ImagePickerGallery from './ImagePickerGallery';
import { useNavigation } from '@react-navigation/native';
import PermissionsModal from '../Modals/Interno/Permissions';

const CameraVB = ({ isStory, onClose, onData }) => {

  const dispatch = useDispatch()
  const navigation =  useNavigation()
  const camRef = useRef(null)
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [permissionGalery, requestPermissionGalery] = MediaLibrary.usePermissions();
  const [permissionMicrophone, requestPermissionMicrophone] = Camera.useMicrophonePermissions();
  const [capturePhoto, setCapturePhoto] = useState(false)
  const [recordVideo, setRecordVideo] = useState(false)
  const [dataRecord, setDataRecord] = useState(false)
  const [loadingTakePicture, setLoadingTakePicture] = useState(false)
  const [flashCamera, setFlashCamera] = useState(false)
  const [openGallery, setOpenGallery] = useState(false)

  const { width, height } = Dimensions.get('window')

  if (!permission || !permissionGalery || !permissionMicrophone) {
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
  if (!permissionMicrophone.granted) {
    return (
      <PermissionsModal 
        type={"permission-microphone"}
        sizeIcon={120}
        description={"Por favor, forneça-nos acesso ao seu microfone, para uma melhor experiência"}
        title={"Ativar Microfone"}
        onPress={requestPermissionMicrophone}
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
    setLoadingTakePicture(true)
    if (camRef) {
      let data = await camRef.current.takePictureAsync()

      if (type === 'front') {
        data = await manipulateAsync(
          data.uri,
          [
            { rotate: 180 },
            { flip: FlipType.Vertical },
          ],
          { compress: 1, format: SaveFormat.PNG }
        )
      }
      // setCapturePhoto(data.uri)
      setLoadingTakePicture(false)
      onData && onData({
        photo: data.uri, 
        stories: false,
        type: 'image'
      })
    }
  }

  async function takeVideo() {
    // setLoadingTakePicture(true)
    if (camRef) {
      setRecordVideo(true)
      let data = await camRef.current.recordAsync({
        VideoQuality:['2160p'], 
        maxDuration:10, 
        maxFileSize:200, 
        mute:false, 
        mirror: false
      })
      // setRecordVideo(false)
      setDataRecord(data)
      console.log(data);

      // if (type === 'front') {
      //   data = await manipulateAsync(
      //     data.uri,
      //     [
      //       { rotate: 180 },
      //       { flip: FlipType.Vertical },
      //     ],
      //     { compress: 1, format: SaveFormat.PNG }
      //   )
      // }
      // setCapturePhoto(data.uri)
      // setLoadingTakePicture(false)
      // onData && onData({
      //   photo: data.uri, 
      //   stories: false,
      //   type: 'image'
      // })
      
    }
  }

  async function stopVideo() {
    // setLoadingTakePicture(true)
    
    camRef.current.stopRecording()
    setRecordVideo(false)
  }

  const openImagePickerAsync = async () => {    
    setLoadingTakePicture(true)
    // const pickerResult = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   videoMaxDuration: 30,
    //   aspect: [9, 16]
    //   // base64: true
    // });
    // console.log(pickerResult);
    setLoadingTakePicture(false)
    navigation.navigate('images picker')
    // if (!pickerResult.cancelled) {
    //   onData && onData({
    //     photo: pickerResult.type === 'image' && pickerResult.uri, 
    //     stories: pickerResult.type === 'video' && pickerResult.uri,
    //     type: pickerResult.type
    //   })
    // }
  }

  
  return (
    <Area>
      {openGallery 
        ? <ImagePickerGallery />
        : (
          <Camera 
        style={{
          aspectRatio: isStory ? 9/16 : 3/4, 
          position: "relative",
        }} 
        type={type}
        ref={camRef}
        // pictureSize
      >
        {loadingTakePicture && <Loading bg /> }
        <CameraBox>
          <Button 
            style={{backgroundColor: colors.dark+49, padding: 4, borderRadius: 25}}
            onPress={onClose}
          >
            <MaterialIcons name="close" size={25} color={colors.white_100} />
          </Button>
          {/* <Button>
              <MaterialIcons name="tag-faces" size={35} color={colors.white_100} />
          </Button>
          <Button style={{marginTop: 20}}>
              <Ionicons name="color-filter-outline" size={35} color={colors.white_100} />
          </Button> */}
        </CameraBox>

        <BottomArea>
            <View style={{alignItems: "center", justifyContent: "center"}}>
                <PreviewGaleria 
                  style={{alignItems: "center", justifyContent: "center", backgroundColor: colors.dark}} 
                  onPress={openImagePickerAsync}
                >
                    {/* {!capturePhoto
                      ? <View style={{width: "100%", height: "100%", backgroundColor: "#cecece", borderRadius: 10}} />
                      : <Image source={{uri: capturePhoto}} style={{width: "100%", height: "100%", borderRadius: 10}} />
                    } */}
                  <MaterialIcons name="insert-photo" size={40} color={colors.white_100} />
                </PreviewGaleria>
            </View>
            
            <View 
              style={{
                width: recordVideo ? 100 : 70, 
                height: recordVideo ? 100 : 70, 
                borderRadius: 50, 
                borderWidth: 4, 
                borderColor: colors.white_100, 
                padding: 4,
                marginHorizontal: 50,
                justifyContent: 'center',
                alignItems: 'center'
                // left: width / 2
              }}
            >
                <Button
                  style={{
                    width: recordVideo ? 70 : 60, 
                    height: recordVideo ? 70 : 60, 
                    borderRadius: 50, 
                    backgroundColor: recordVideo ? colors.danger : colors.white_100, 
                  }} 
                  onPress={takeVideo}
                  // onLongPress={({nativeEvent}) => console.log(nativeEvent.timestamp)}
                />
            </View>

            <Button style={{backgroundColor: colors.dark+49, padding: 5, borderRadius: 25}} 
                onPress={toggleCameraType}
            >
                <Ionicons name="sync" size={35} color={colors.white_100} />
            </Button>
        
        </BottomArea>
      </Camera>
        )
      }
    </Area>
  )
}

export default CameraVB