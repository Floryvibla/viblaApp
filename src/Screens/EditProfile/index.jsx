import React, { useState } from 'react'
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { colors } from "../../Constants/styles"
import StoryCard from '../../Components/Stories'
import { Area, AreaFormKeyBoard, ClickPressable, ScrollArea, Text, Touch, Wrapper } from '../../Components/styles'
import HeaderBack from '../../Components/Header/HeaderBack'
import CardProfile from '../../Components/CardProfile'
import { data } from '../../datas/fakeStories'
import FeedPost from '../../Components/Post/FeedPost'
import { Pressable } from 'react-native'
import CirclePerfil from '../../Components/Others/CirclePerfil'
import PermissionsModal from '../../Components/Modals/Interno/Permissions';
import InputText from '../../Components/InputText';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {

  const navigation = useNavigation()

  const [permission, requestPermission] = MediaLibrary.usePermissions();
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    img_profile: "",
    name: "Flory",
    username: "florymignon",
    bio: "",
    category: ""
  })

  if (!permission) {
    return <Area />
  }

  if (!permission.granted) {
    return (
      <PermissionsModal 
        type={"permission-galery"}
        sizeIcon={120}
        description={"Por favor, forneça-nos acesso a sua galeria, para uma melhor experiência"}
        title={"Ativar galeria"}
        onPress={requestPermission}
        openModal={true}
      />
    )
  }

  const openImagePickerAsync = async () => {    
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    setData({...data, img_profile: pickerResult.uri})
  }

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      navigation.goBack()
    }, 1000);
  }

  return (
    <Area justify="flex-start" align="flex-start" style={{flex: 1}} bgColor={colors.dark}>
      <HeaderBack title="Editar perfil" contentRight={"Salvar"} onPressBtnContentRight={handleSubmit} loadingContentRight={loading} />
      <AreaFormKeyBoard
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollArea>
          <Wrapper style={{flex: 1}} marginBottom={0}>
            <CirclePerfil 
              noPicture={!data.img_profile?.length > 0}
              size={100}
              edit
              imgSrc={data.img_profile?.length > 0 && data?.img_profile}
            />
            <ClickPressable onPress={openImagePickerAsync}>
              <Text size={16} color={colors.gold}>Alterar foto</Text>
            </ClickPressable>
          </Wrapper>
          <Wrapper marginTop={0}>
            <InputText 
              label={"Nome"}
              mb
              onChangeText={text => setData({...data, name: text})}
              value={data.name}
            />
            <InputText 
              label={"Nome de usuário"}
              mb
              onChangeText={text => setData({...data, username: text})}
              value={data.username}
            />
            <InputText 
              label={"Categoria"}
              mb
              onChangeText={text => setData({...data, category: text})}
              value={data.category}
            />
            <InputText 
              label={"Bio"}
              mb
              multiline
              numberOfLines={4}
              countText={80}
              // maxLength={80}
              onChangeText={text => setData({...data, bio: text})}
              value={data.bio}
            />
          </Wrapper>
        </ScrollArea>
      </AreaFormKeyBoard>
    </Area>
  )
}

export default EditProfile