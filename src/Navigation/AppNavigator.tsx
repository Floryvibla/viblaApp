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

export type AppRoutes = {
  Main: any
  Discover: any
  Add: any
  notification: any
  Profile: any
}

function AppNavigator({ linking }) {
  const { isAuth } = useSelector((state: any) => state.auth)
  const { isLogged } = useSelector((state: any) => state.others)
  const dispatch = useDispatch<any>()

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
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      {/* <NativeBaseProvider> */}
        {isAuth ? <StackNavigation /> : <AuthStack />}
      {/* </NativeBaseProvider> */}
    </NavigationContainer>
  )
}

export default AppNavigator
