import React, { useRef } from 'react'
import Logo from "../../../Assets/vibla/icon_white.png"
import { Area, LogoImage } from '../Welcome/styles'
import dataLanguage from "../../../mocks/language/ptBR.json"
import { Button, ButtonLinearGradient, Text, TextInput, Wrapper, Touch, AreaFormKeyBoard, DatePickerInput } from '../../../components/styles.js'
import { colors } from '../../../Constants/styles'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { formatDate } from '../../../functions/maskInput'
// import DatePicker from 'react-native-date-picker'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { othersActions } from '../../../redux/actions/others.actions'
import HeaderBack from '../../../components/Header/HeaderBack'
import ButtonUI from '../../../components/ButtonUI'
import TextUI from '../../../components/Text'

export const Signup = () => {

  const userNameRef = useRef()
  const birthDate = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { openModal, contentDisplayModal } = useSelector(state => state.others)

  const [data, setData] = useState({
    birth_date: new Date()
  })

  const handleOnchageDate = value => {
    setData({...data, birth_date: value})
  }

  const handleSubmit = () => {
    dispatch(othersActions.openModal({title: "notification welcome"}))
  }
 
  return (
    <AreaFormKeyBoard
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <HeaderBack />
      <Wrapper marginBottom={10}>
        <TextUI variant='subtitle'>{dataLanguage.msg_signup}</TextUI>
      </Wrapper>
      <Wrapper>
        <TextInput 
          placeholder={dataLanguage.full_name}
          returnKeyType="next"
          onSubmitEditing={() => userNameRef.current.focus()}
          // blurOnSubmit={false}
        />
        <TextInput 
          placeholder={dataLanguage.username}
          returnKeyType="next"
          onSubmitEditing={() => birthDate.current.focus()}
          ref={userNameRef}
          // blurOnSubmit={false}
        />
        {/* <TextInput 
          placeholder={dataLanguage.birth_date}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          ref={birthDate}
          keyboardType='numeric'
          // blurOnSubmit={false}
        /> */}
        {/* <DatePickerInput 
          date={data.birth_date}
          onDateChange={handleOnchageDate}
        /> */}
        {/* <DatePicker date={data.birth_date} onDateChange={handleOnchageDate}/> */}
        <TextInput 
          placeholder={dataLanguage.placeholder_password}
          secureTextEntry
          ref={passwordRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordConfirmRef.current.focus()}
        />
        <TextInput 
          placeholder={dataLanguage.confirm_password}
          marginBottom={0}
          secureTextEntry
          ref={passwordConfirmRef}
          returnKeyType="done"
        />
      </Wrapper>
      <Wrapper>
        <ButtonUI 
          onPress={handleSubmit}
          title={dataLanguage.continue}
        />
      </Wrapper>
    </AreaFormKeyBoard>
  )
}
