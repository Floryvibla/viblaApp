import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Welcome } from '../Screens/Auth'
import { SafeArea } from '../components/styles'
import { ForgotPassword } from '../Screens/Auth/ForgotPassword'
import { CodeForgotPassword } from '../Screens/Auth/CodeForgotPassword'
import { ResetPassword } from '../Screens/Auth/ResetPassword'
import { CodeInvitation } from '../Screens/Auth/CodeInvitation'
import { Signup } from '../Screens/Auth/Signup'
import ModalInterno from '../components/Modals/Interno'

const AuthStack = () => {
    const Stack= createNativeStackNavigator()
  return (
    <SafeArea>
        <ModalInterno />
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: "#000"
                }
            }} 
        >
            <Stack.Screen 
                name='welcome'
                component={Welcome}
            />
            <Stack.Screen 
                name='login'
                component={Login}
            />
            <Stack.Screen 
                name='forgotPassword'
                component={ForgotPassword}
            />
            <Stack.Screen 
                name='codeForgotPassword'
                component={CodeForgotPassword}
            />
            <Stack.Screen 
                name='resetPassword'
                component={ResetPassword}
            />
            <Stack.Screen 
                name='codeInvitation'
                component={CodeInvitation}
            />
            <Stack.Screen 
                name='signup'
                component={Signup}
            />
        
        </Stack.Navigator>
    </SafeArea>
  )
}

export default AuthStack