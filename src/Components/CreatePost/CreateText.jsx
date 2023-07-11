import { View, TouchableOpacity, TextInput, Pressable, Alert } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Area } from './styles'
import { Text, Wrapper } from '../styles'
import ButtonAction from '../Button'
import { colors } from '../../Constants/styles';
import { LIMIT_TEXT } from '../../Constants/app';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { othersActions } from '../../redux/actions/others.actions';
import CardListSerie from '../Cards/CardListSerie';
import HeaderSelectTypePost from '../Header/HeaderSelectTypePost';
import Dropdown from '../Dropdown';
import { postsActions } from '../../redux/actions';

const CreateText = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { openModal, contentDisplayModal } = useSelector(state => state.others)
  const { isAuth } = useSelector(state => state.auth)
  const { typesPost, successCreatePost, loadingCreatePost } = useSelector(state => state.posts)
  const inputRef = useRef(null)
  const [value, setValue] = useState("")
  const { openDropdown, titleDropdown, typePostCreate } = useSelector(state => state.others)

  const danger= LIMIT_TEXT - value.length <= 20
  const countText= (LIMIT_TEXT - value.length)

  const { dataPost, mutate } = postsActions.LoadPosts()

  const handlePost= () => {
    navigation.goBack()
    setValue('')
  }

  const onOpenModal= () => {
    inputRef.current.blur()
    dispatch(othersActions.openModal('add serie'))
  }

  const onClosePost= () => {
    if (value.length > 0) {
      Alert.alert(
        '',
        'Tem certeza que quer desistir?',
        [
          {
            text: 'Descartar o post',
            style: 'destructive',
            onPress: () => {
              inputRef?.current?.clear()
              navigation.goBack()
            },
          },
          { text: "Cancelar", style: 'cancel', onPress: () => {} },
        ]
      );
    }else {
      navigation.goBack()
    }
  }

  const handleOpenDropdown= () => {
    dispatch(othersActions.openDropdown(!openDropdown))
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

  useEffect(() => {
    // inputRef.current.focus()
    if (!openModal) {
      inputRef.current.focus()
    }
    if (successCreatePost) {
      setValue('')
    }
  }, [openModal, successCreatePost])

  // console.log({...dataPost.data[0]});
  

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
        title={typePostCreate.title} 
        type="text"
        onPressBtnRight={handleSubmit}
        loadingContentRight={loadingCreatePost}
        successContentRight={successCreatePost}
      />
      {/* <Wrapper
        initial
        widthStyle="100%"
        marginBottom={0}
        style={{paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
      >
        <Pressable onPress={onClosePost}>
          <Ionicons name="close" size={30} color={colors.lightGray} />
        </Pressable>
        <View
          style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}
        >
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            borderRadius: 40,
            borderWidth: 1,
            borderColor: danger ? colors.danger : colors.gold,
            marginRight: 20
          }}>
            <Text size={12} color={danger ? colors.danger : colors.darkGray} second> {countText} </Text>
          </View>
          <ButtonAction 
            title={"Postar"}
            size={"50%"}
            btnmb={0}
            mb={0}
            mt={10}
            sizeTitle={15}
            onPress={handlePost}
          />
        </View>
      </Wrapper> */}
      <Wrapper
        initial
        widthStyle='100%'
        style={{paddingHorizontal: 20, justifyContent: 'space-between', height: '50%'}}
      >
        <TextInput 
          placeholder='O que você quer falar?'
          style={{fontSize: 25, width: '100%', color: colors.white_100}}
          placeholderTextColor={colors.darkGray}
          multiline
          ref={inputRef}
          value={value}
          onChangeText={text => setValue(text)}
          maxLength={LIMIT_TEXT}
        />
        {/* <CardListSerie onPress={onOpenModal} add /> */}
      </Wrapper>
    </Area>
  )
}

export default CreateText