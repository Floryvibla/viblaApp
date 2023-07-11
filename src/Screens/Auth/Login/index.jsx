import React, { useRef } from 'react'
import { Alert, Keyboard, ScrollView, TouchableWithoutFeedback, View } from 'react-native'
import Logo from "../../../Assets/vibla/logo_white.png"
import { Area, LogoImage } from '../Welcome/styles'
import dataLanguage from "../../../mocks/language/ptBR.json"
import { Button, ButtonLinearGradient, Text, TextInput, Wrapper, Touch, AreaFormKeyBoard } from '../../../Components/styles.js'
import { colors } from '../../../Constants/styles'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { othersActions } from '../../../redux/actions/others.actions'
import Loading from '../../../Components/Loading'
import { authActions } from '../../../redux/actions/auth.actions'
import { useEffect } from 'react'
import HeaderBack from '../../../Components/Header/HeaderBack'

export const Login = () => {

  const passwordRef = useRef()
  const navigation = useNavigation()

  const dispatch = useDispatch()
  const { loadingAuth, successAuth, myData, errorAuth } = useSelector(state => state.auth)

  const [data, setData] = useState({
    identifier: "",
    password: ""
  })
  const [inputIsFocused, setInputIsFocused] = useState("")
  const [inputIsEmpty, setInputIsEmpty] = useState(true)

  const handleSubmit = () => {
    if (data.identifier.trim().length > 0 && data.password.trim().length > 0) {
      dispatch(authActions.auth(data))
    } else {
      Alert.alert("", "Entra um dado")
    }
  }

  const onResetAuth = () => {
    dispatch(authActions.cleanAuth())
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleFocus = (type) => {
    setInputIsFocused(type);
  };

  const handleBlur = () => {
    setInputIsFocused("");
  };

  useEffect(() => {
    const response = data.identifier.trim().length > 3 && data.password.trim().length >= 6
    setInputIsEmpty(!response)
  }, [data.identifier, data.password])
  
    

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{flex: 1}}>
        <HeaderBack onBack={onResetAuth} />
        <AreaFormKeyBoard
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={10}
        >
          {/* <ScrollView style={{width: '100%'}}> */}
            <Wrapper marginTop={0}>
              <LogoImage source={Logo} resizeMode="contain" />
            </Wrapper>
            {/* <Wrapper marginBottom={10}>
              <Text size={18}> {dataLanguage.login} </Text>
            </Wrapper> */}
            <Wrapper>
              <TextInput 
                placeholder={dataLanguage.placeholder_user}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
                value={data.identifier}
                onChangeText={text => setData({...data, identifier: text})}
                blurOnSubmit={false}
                onFocus={() => handleFocus("identifier")}
                onBlur={handleBlur}
                isFocused={inputIsFocused === "identifier"}
                autoCapitalize="none"
                keyboardType="email-address"
              />
              <TextInput 
                placeholder={dataLanguage.placeholder_password}
                marginBottom={0}
                secureTextEntry
                autoCapitalize="none"
                ref={passwordRef}
                returnKeyType="done"
                value={data.password}
                onChangeText={text => setData({...data, password: text})}
                onFocus={() => handleFocus("password")}
                onBlur={handleBlur}
                isFocused={inputIsFocused === "password"}
              />
            </Wrapper>
            {/* <Touch 
              // style={{backgroundColor: "red", }}
              onPress={() => navigation.navigate("forgotPassword")} 
              width={90} 
              marginTop={0} 
              align="flex-end"
            >
              <Text size={14} color={colors.lightGray}> {dataLanguage.forgot_password} </Text>
            </Touch> */}
            <Wrapper>
              <Button 
                opacity={inputIsEmpty ? 0.6 : 1} 
                bgColor={inputIsEmpty ? colors.darkGray : colors.goldDark500} 
                onPress={handleSubmit}
              >
                {!inputIsEmpty ? (
                    <ButtonLinearGradient>
                      {loadingAuth
                        ? <Loading size={50} />
                        : <Text size={16} weight={"bold"}>{dataLanguage.text_btn_login}</Text>
                      }
                    </ButtonLinearGradient>
                  ): (
                    <Text size={16} weight={"bold"}>{dataLanguage.text_btn_login}</Text>
                  )
                }
              </Button>
            </Wrapper>
          {/* </ScrollView> */}
        </AreaFormKeyBoard>
      </View>
    </TouchableWithoutFeedback>
  )
}
