import React, { useEffect } from 'react'
import { Platform, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// import { NativeBaseProvider } from "native-base";
import AuthStack from './AuthStack'
import { useDispatch, useSelector } from 'react-redux'
import StackNavigation from './StackNavigation'
import { authActions } from '../redux/actions'
import { Splash } from '../Screens/Auth'
import { getToken } from '../utils/functions'

function AppNavigator({ linking }) {
  const { isAuth } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    // Verifica o token e faz o logout se necessário
    getToken().then(data => {
      if (data) {
        dispatch(authActions.logout(data))
      } else {
        dispatch(authActions.logout())
      }
    })
  }, [dispatch])

  // Renderiza o componente de Splash se o estado de autenticação ainda não foi definido
  if (isAuth === null) {
    return <Splash />
  }

  return (
    <NavigationContainer linking={linking}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {/* <NativeBaseProvider> */}
        {isAuth ? <StackNavigation /> : <AuthStack />}
      {/* </NativeBaseProvider> */}
    </NavigationContainer>
  )
}

export default AppNavigator
