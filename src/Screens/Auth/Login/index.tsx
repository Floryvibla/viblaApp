import React, { useRef, useState, useEffect } from 'react'
import { Alert, Pressable } from 'react-native'
import dataLanguage from "../../../mocks/language/ptBR.json"
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../../redux/actions/auth.actions'
import ButtonUI from '../../../components/ButtonUI'
import TextInputUI, { InputTextProps } from '../../../components/InputUI'
import TextUI from '../../../components/Text'
import { AreaForgertPass, Container, Wrapper } from './styles'
import { FormUI } from '../../../components/FormUI'
import { useNavigate } from '../../../hooks/useNavigate'
import { useDataValidation } from '../../../hooks/useDataValidation'
import { conditionsLogin } from '../../../hooks/useDataValidation/conditions'

export const Login = () => {
  const { navigatePublic } = useNavigate()
  const dispatch = useDispatch<any>()

  const { loadingAuth } = useSelector((state: any) => state.auth)

  const [data, setData] = useState({
    identifier: "",
    password: ""
  })

  const { isValid, errors, onMsgValidateErro } = useDataValidation(data, conditionsLogin);

  const onForgotPass = () => {
    navigatePublic.navigate('forgotPassword')
  };

  const handleSubmit = () => {
    if (isValid) {
      dispatch(authActions.auth(data))
    } 
  }

  return (
    <Container>
      <FormUI variant='auth' showHeaderBack>
        <TextInputUI
          value={data.identifier}
          onChangeText={value => setData({...data, identifier: value})} 
          placeholder={"Email ou Usuário"}
          autoFocus
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          isError={onMsgValidateErro({key: 'identifier'})}
        />
        <TextInputUI 
          placeholder={dataLanguage.placeholder_password}
          value={data.password}
          onChangeText={value => setData({...data, password: value})}
          secureTextEntry
          autoCapitalize="none"
          isError={onMsgValidateErro({key: 'password'})}
        />
        <AreaForgertPass>
          <Pressable onPress={onForgotPass}>
            <TextUI color='goldLight' weight={500}> {dataLanguage.forgot_password} </TextUI>
          </Pressable>
        </AreaForgertPass>
        <ButtonUI 
          loading={loadingAuth} 
          disabled={!isValid}
          title={dataLanguage.text_btn_login} 
          onPress={handleSubmit}
        />
      </FormUI>
    </Container>
  )
}
