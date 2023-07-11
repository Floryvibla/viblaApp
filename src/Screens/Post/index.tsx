import { Keyboard, Platform, Pressable, TextInput, View, ScrollView, Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { colors } from "../../Constants/styles";
import { AreaPreviewMedia, Container, Footer, Header, Wrapper } from './styles';
import TextUI from '../../Components/Text';
import { LIMIT_TEXT } from '../../Constants/app';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MediaGaleryProps, usePermissionGalery } from '../../hooks/usePermissionGalery';
import { PreviewMedia } from '../../Components/PreviewMedia';
import { postsActions } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const AddPost = () => {

  const navigation = useNavigation<any>();
  const dispatch = useDispatch()

  const { openImagePickerAsync, verificationPermissionGalery, medias, isLoadingMedias } = usePermissionGalery()
  const { isAuth } = useSelector((state: any) => state.auth)

  const { dataPost, mutate } = postsActions.LoadPosts()

  const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

  const inputRef = useRef<TextInput>(null);
  const footerRef = useRef<ScrollView>(null);
  const [value, setValue] = useState("");

  const onCancel = () => {
    navigation.goBack();
  };

  const onPressGetImgs = () => {
    inputRef.current?.focus();
    verificationPermissionGalery()
    openImagePickerAsync()
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isLoadingMedias]);

  const handleKeyboardWillShow = () => {
    footerRef.current && footerRef.current?.scrollToEnd({ animated: true });
  };

  const handleSubmit = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    const updatePost = {
      attributes: {
        ...dataPost[0].attributes,
        createdAt: formattedDate,
        comments: {
          data: []
        },
        shared_posts: {
          data: []
        },
        liked_posts: {
          data: []
        },
        owner: {
          data: {
            ...dataPost[0]?.attributes.owner.data,
            id: isAuth.id,
            attributes: {
              username: isAuth.username,
              biography: isAuth.biography,
              profession: isAuth.profession,
              is_verified: isAuth.is_verified,
              is_founder: isAuth.is_founder
            }
          }
        },
        info: value,
      },
      id: currentDate
    }

    const data = {
      owner: isAuth.id,
      info: value
    }

    // console.log([...dataPost, updatePost]);
    mutate([updatePost, ...dataPost], false)
    navigation.navigate("Main")
    dispatch(postsActions.createPost(data)) 
    
  }

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", handleKeyboardWillShow);
    setValue("")
  }, [dataPost]);

  return (
    <Container>
      <Header>
        <Pressable onPress={onCancel}>
          <TextUI variant='subtitle'>Cancelar</TextUI>
        </Pressable>
        <Pressable onPress={handleSubmit}>
          <TextUI
            color={value.length > 0 ? 'gold' : 'transparenteGray'}
            variant='subtitle'
            weight={700}
          >
            Postar
          </TextUI>
        </Pressable>
      </Header>
      <Wrapper>
        <TextInput 
          placeholder='O que você quer falar?'
          style={{fontSize: 16, width: '100%', color: colors.white_100}}
          placeholderTextColor={colors.darkGray}
          multiline
          ref={inputRef}
          value={value}
          onChangeText={text => setValue(text)}
          maxLength={LIMIT_TEXT}
        />
        {medias && (
          <ScrollView horizontal>
            <AreaPreviewMedia>
              {medias.map((item: MediaGaleryProps) => (
                <PreviewMedia type={item.type} source={item.uri} key={item.uri} />
              ))}
            </AreaPreviewMedia>
          </ScrollView>
        )}
      </Wrapper>
      {Platform.OS === 'ios' && (
        <View style={{position: 'absolute', bottom: HEIGHT / 2.8, width: '100%', backgroundColor: colors.dark}} >
          {/* <ScrollView ref={footerRef}> */}
            <Footer>
              <Pressable onPress={onPressGetImgs}>
                <Ionicons name="image-outline" size={24} color={colors.white} />
              </Pressable>
            </Footer>
          {/* </ScrollView> */}
        </View>
      )}
      {Platform.OS === 'android' && (
        <Footer>
          <Pressable onPress={onPressGetImgs}>
            <Ionicons name="image-outline" size={24} color={colors.white} />
          </Pressable>
        </Footer>
      )}
    </Container>
  );
};

export default AddPost;
