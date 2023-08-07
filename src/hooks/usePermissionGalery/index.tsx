import React, { useState } from 'react'
import { View, Text } from 'react-native'
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import PermissionsModal from '../../components/Modals/Interno/Permissions';

export type MediaGaleryProps = {
  uri?: string;
  type?: 'image' | 'video';
}


export function usePermissionGalery() {

  const [permissionGalery, requestPermissionGalery] = MediaLibrary.usePermissions();
  const [medias, setMedias] = useState<MediaGaleryProps[]>([])
  const [isLoadingMedias, setIsLoadingMedias] = useState<boolean>(false)

  const openImagePickerAsync = async () => { 
    setIsLoadingMedias(true);   
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      selectionLimit: 4
    });

    if (!pickerResult.canceled) {
      const imgsUri = pickerResult.assets.map((i: any) => {
        return {
          uri: i.uri,
          type: i.type,
        }
      })
      setMedias(imgsUri)
    }

    // console.log("pickerResult: ", pickerResult);
    
    setIsLoadingMedias(false)
  }

  const verificationPermissionGalery = () => {   
     
    if (!permissionGalery) {
      return <View />
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
  }

  return {
    medias,
    isLoadingMedias,
    openImagePickerAsync,
    verificationPermissionGalery
  }
}