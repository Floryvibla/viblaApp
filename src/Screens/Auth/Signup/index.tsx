import React, { useEffect, useState } from 'react'
import dataLanguage from "../../../mocks/language/ptBR.json"
import { useDispatch, useSelector } from 'react-redux'
import { othersActions } from '../../../redux/actions/others.actions'
import ButtonUI from '../../../components/ButtonUI'

import { Container } from './styles'
import { FormUI } from '../../../components/FormUI'
import TextInputUI from '../../../components/InputUI'
import { useDataValidation } from '../../../hooks/useDataValidation'
import useBackButtonBlocker from '../../../hooks/useBackButtonBlocker'
import { conditionsSignup } from '../../../hooks/useDataValidation/conditions'
import { useFetch } from '../../../hooks/fetchs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { storageKeys } from '../../../Constants/localStorage'
import HttpInterno from '../../../config/http'
import { authConstants } from '../../../redux/constants'

export const Signup = () => {

  useBackButtonBlocker();

  const httpInterno= HttpInterno()
  const dispatch = useDispatch<any>()
  
  const { dataFetch, postFetchwithHeader } = useFetch()

  const [data, setData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPass: ''
  })

  
  const { isValid, errors, onMsgValidateErro } = useDataValidation(data, conditionsSignup);

  const handleInputChange = (key: keyof typeof data, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  

  const handleSubmit = () => {
    if (isValid) {
      
      postFetchwithHeader({ url: 'auth/local/register', data: {
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password
      }})
      console.log('Dados válidos:', data);
    } else {
      // Lógica para lidar com os dados inválidos
      console.log('Dados inválidos:', errors);
    }
  };

  useEffect(() => {
    if (dataFetch.success) {
      console.log("dataFetch: ", dataFetch.data);
      AsyncStorage.setItem(storageKeys.auth, JSON.stringify(dataFetch.data))
      dispatch(othersActions.openModal({title: "notification welcome", data}))
    }
  }, [dataFetch])
  
  
 
  return (
    <Container>
      <FormUI 
        variant='auth' 
        titleHeader={'Crie seu perfil'}
        showIconBack={false}
        marginVertical
        scrollEnabled
      >
        <TextInputUI
          autoFocus
          placeholder={dataLanguage.full_name}
          value={data.name}
          onChangeText={(value) => handleInputChange('name', value)}
          returnKeyType="next"
          isError={onMsgValidateErro({key: 'name'})}
        />
        <TextInputUI 
          placeholder={dataLanguage.username}
          returnKeyType="next"
          autoCapitalize="none"
          value={data.username}
          onChangeText={(value) => handleInputChange('username', value)}
          isError={onMsgValidateErro({key: 'username'})}/>

        <TextInputUI 
          placeholder={'Email'}
          value={data.email}
          onChangeText={(value) => handleInputChange('email', value)}
          isError={onMsgValidateErro({key: 'email'})}
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
        />
        <TextInputUI 
          placeholder={dataLanguage.placeholder_password}
          value={data.password}
          onChangeText={(value) => handleInputChange('password', value)}
          isError={onMsgValidateErro({key: 'password'})}
          returnKeyType="next"
          secureTextEntry
          autoCapitalize="none"
        />
        <TextInputUI 
          placeholder={dataLanguage.confirm_password}
          value={data.confirmPass}
          onChangeText={(value) => handleInputChange('confirmPass', value)}
          isError={onMsgValidateErro({key: 'confirmPass'})}
          secureTextEntry
          autoCapitalize="none"
        />
        <ButtonUI 
          onPress={handleSubmit}
          title={dataLanguage.continue}
          disabled={!isValid}
          loading={dataFetch.loading}
        />
      </FormUI>
    </Container>
  )
}
