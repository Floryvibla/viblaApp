import React, { useMemo } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Alert, Platform } from 'react-native';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import { Renderer, TextureLoader } from 'expo-three';
import ExpoTHREE from "expo-three"
import {
  AmbientLight,
  BoxGeometry,
  Fog,
  GridHelper,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from 'three';
import { AssetsSelector } from 'expo-images-picker';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MediaType } from 'expo-media-library';
import { colors } from '../../Constants/styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const ForceInset = {
  top: 'never',
  bottom: 'never',
};

// IOS users , make sure u can use the images uri to upload , if your getting invalid file path or u cant work with asset-library:// 
// Use = > getImageMetaData: true which will be little slower but give u also the absolute path of the Asset. just console loge the result to see the localUri

// See => https://docs.expo.dev/versions/latest/sdk/media-library/#assetinfo



export default function ImagePickerGallery() {

    const navigation =  useNavigation()
    // const { data } = useRoute().params

  const onSuccess = (data) => {
    // Alert.alert('Done', data.length + 'Images selected')
    navigation.navigate('editor story', {
        data: {
            photo: data[0].mediaType === 'photo' && data[0].localUri, 
            stories: data[0].mediaType === 'video' && data[0].localUri,
            type: data[0].mediaType === 'photo' ? 'image' : data[0].mediaType,
            width: data[0].width,
            height: data[0].height
        }
    })
    // console.log(data[0]);
  };

  const widgetErrors = useMemo(
    () => ({
      errorTextColor: 'black',
      errorMessages: {
        hasErrorWithPermissions: 'Please Allow media gallery permissions.',
        hasErrorWithLoading: 'There was an error while loading images.',
        hasErrorWithResizing: 'There was an error while loading images.',
        hasNoAssets: 'No images found.',
      },
    }),
    []
  );

  const widgetSettings = useMemo(
    () => ({
      getImageMetaData: Platform.OS === 'ios', // true might perform slower results but gives meta data and absolute path for ios users
      initialLoad: 100,
      assetsType: [MediaType.photo, MediaType.video],
      minSelection: 1,
      maxSelection: 1,
      portraitCols: 4,
      landscapeCols: 4,
    }),
    []
  );

  const widgetResize = useMemo(
    () => ({
      width: 50,
      compress: 0.7,
      base64: false,
      saveTo: 'jpeg',
    }),
    []
  );

  const _textStyle = {
    color: 'white',
  };

  const _buttonStyle = {
    backgroundColor: colors.goldDark500,
    borderRadius: 5,
  };

  const widgetNavigator = useMemo(
    () => ({
      Texts: {
        finish: 'Continuar',
        back: 'Voltar',
        // selected: 'Selecionado',
      },
      midTextColor: 'black',
      minSelection: 1,
      buttonTextStyle: _textStyle,
      buttonStyle: _buttonStyle,
      onBack: () => navigation.goBack(),
      onSuccess: (event) => onSuccess(event),
    }),
    []
  );

  const widgetStyles = useMemo(
    () => ({
      margin: 2,
      bgColor: colors.dark,
      spinnerColor: 'blue',
      widgetWidth: 99,
      videoIcon: {
        Component: Ionicons,
        iconName: 'ios-videocam',
        color: colors.white_100,
        size: 20,
      },
      selectedIcon: {
        Component: Ionicons,
        iconName: 'ios-checkmark-circle-outline',
        color: colors.white,
        bg: '#fbc261b5',
        size: 26,
      },
    }),
    []
  );

  let timeout;

  React.useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    // <View style={styles.container}>
    //     <AssetsSelector
    //         Settings={widgetSettings}
    //         Errors={widgetErrors}
    //         Styles={widgetStyles}
    //         Navigator={widgetNavigator}
    //         SelectedOneAction
    //     // Resize={widgetResize} know how to use first , perform slower results.

    //     />
    // </View>
    <GLView
      style={{flex: 1, backgroundColor: 'white'}}
      onContextCreate={async (gl) => {
        const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
        const sceneColor = 0x6ad6f0;

        // Create a WebGLRenderer without a DOM element
        const renderer = new Renderer({ gl });
        renderer.setSize(width, height);
        renderer.setClearColor(sceneColor);

        const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
        camera.position.set(2, 5, 5);

        const scene = new Scene();
        scene.fog = new Fog(sceneColor, 1, 10000);
        scene.add(new GridHelper(10, 10));

        const ambientLight = new AmbientLight(0x101010);
        scene.add(ambientLight);

        const pointLight = new PointLight(0xffffff, 2, 1000, 1);
        pointLight.position.set(0, 200, 200);
        scene.add(pointLight);

        const spotLight = new SpotLight(0xffffff, 0.5);
        spotLight.position.set(0, 500, 100);
        spotLight.lookAt(scene.position);
        scene.add(spotLight);

        const cube = new IconMesh();
        scene.add(cube);

        camera.lookAt(cube.position);

        function update() {
          cube.rotation.y += 0.05;
          cube.rotation.x += 0.025;
        }

        // Setup an animation loop
        const render = () => {
          timeout = requestAnimationFrame(render);
          update();
          renderer.render(scene, camera);
          gl.endFrameEXP();
        };
        render();
      }}
    >

    </GLView>
  );
}

class IconMesh extends Mesh {
  constructor() {
    super(
      new BoxGeometry(1.0, 1.0, 1.0),
      new MeshStandardMaterial({ color: 0x00ff00 })
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
