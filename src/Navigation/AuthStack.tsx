import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import styled from "styled-components/native"
import { Login, Welcome } from '../Screens/Auth'
import { ForgotPassword } from '../Screens/Auth/ForgotPassword'
import { CodeForgotPassword } from '../Screens/Auth/CodeForgotPassword'
import { ResetPassword } from '../Screens/Auth/ResetPassword'
import { CodeInvitation } from '../Screens/Auth/CodeInvitation'
import { Signup } from '../Screens/Auth/Signup'
import ModalInterno from '../components/Modals/Interno'
import { colors } from '../Constants/styles'

export type PublicAuthRoutes = {
    welcome: any
    login: any
    signup: any
    forgotPassword: any
    codeForgotPassword: any
    resetPassword: any
    codeInvitation: any
}

export type PublickAuthRoutesProps = NativeStackNavigationProp<PublicAuthRoutes>

const { Navigator, Screen }= createNativeStackNavigator<PublicAuthRoutes>()

const AuthStack = () => {
  return (
    <SafeArea>
        <ModalInterno />
        <Navigator 
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: "#000"
                }
            }} 
        >
            <Screen 
                name='welcome'
                component={Welcome}
            />
            <Screen 
                name='login'
                component={Login}
            />
            <Screen 
                name='forgotPassword'
                component={ForgotPassword}
            />
            <Screen 
                name='codeForgotPassword'
                component={CodeForgotPassword}
            />
            <Screen 
                name='resetPassword'
                component={ResetPassword}
            />
            <Screen 
                name='codeInvitation'
                component={CodeInvitation}
            />
            <Screen 
                name='signup'
                component={Signup}
                options={{
                    gestureEnabled: false
                }}
            />
        
        </Navigator>
    </SafeArea>
  )
}

export const SafeArea = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.dark};
    position: relative;
`

export default AuthStack