import React, { useRef } from 'react'
import Logo from "../../../Assets/vibla/icon_white.png"
import { Area, LogoImage } from '../Welcome/styles'
import dataLanguage from "../../../mocks/language/ptBR.json"
import { Button, ButtonLinearGradient, Text, TextInput, Wrapper, Touch, AreaFormKeyBoard } from '../../../components/styles.js'
import { colors } from '../../../Constants/styles'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useEffect } from 'react'
import HeaderBack from '../../../components/Header/HeaderBack'

export const ResetPassword = () => {

  const passwordRef = useRef()
  const passwordRef1 = useRef()
  const navigation = useNavigation()

  const [data, setData] = useState({
    newPassword: "",
    confirmNewPassword: ""
  })
  const [errorMsg, setErrorMsg] = useState({
    newPassword: false,
    confirmNewPassword: false
  })

  const handleFocus = (type) => {
    // if (type === "confirmePassword") {
    //   if (data.confirmNewPassword.length > 5) {
    //     data.confirmNewPassword !== data.newPassword 
    //       ? setErrorMsg({...errorMsg, confirmNewPassword: true}) 
    //       : setErrorMsg({...errorMsg, confirmNewPassword: false})
    //   }else {
    //     setErrorMsg({...errorMsg, confirmNewPassword: false})
    //   }
    // } else {
    //   if (data.newPassword.length > 5) {
    //     setErrorMsg({...errorMsg, newPassword: false})
    //   } else {
    //     setErrorMsg({...errorMsg, newPassword: true})
    //   }
    // }
  }

  useEffect(() => {
    // passwordRef1.current.focus()
    
  }, [data])
  

  return (
    <AreaFormKeyBoard
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <HeaderBack />
      <LogoImage source={Logo} resizeMode="cover" />
      <Wrapper marginBottom={10}>
        <Text size={26} weight={600}> {dataLanguage.reset_password} </Text>
      </Wrapper>
      <Wrapper>
        <TextInput 
          placeholder={dataLanguage.placeholder_new_password}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          secureTextEntry
          onChangeText={text => setData({...data, newPassword: text})}
          value={data.newPassword}
          error={errorMsg.newPassword}
          ref={passwordRef1}
          onFocus={() => handleFocus("password")}
          // blurOnSubmit={false}
        />
        <TextInput 
          placeholder={dataLanguage.placeholder_confirm_password}
          marginBottom={0}
          secureTextEntry
          ref={passwordRef}
          returnKeyType="done"
          onChangeText={text => setData({...data, confirmNewPassword: text})}
          error={errorMsg.confirmNewPassword}
          value={data.confirmNewPassword}
          onFocus={() => handleFocus("confirmePassword")}
        />
      </Wrapper>
      <Wrapper>
        <Button onPress={() => navigation.navigate("login")}>
          <ButtonLinearGradient>
            <Text size={16} weight={"bold"}>{dataLanguage.reset_password}</Text>
          </ButtonLinearGradient>
        </Button>
      </Wrapper>
    </AreaFormKeyBoard>
  )
}
