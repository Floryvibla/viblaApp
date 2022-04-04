import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/Home';
import SearchScreen from '../Screens/Search';
import HeaderHome from '../Components/Header';
import TabBottomNavigation from './TabBottomNavigation';


function StackNavigation() {
  const Stack= createNativeStackNavigator()

  return (
    <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={TabBottomNavigation}
          options={{
            headerShown: false,
            headerTitle: HeaderHome,
            headerStyle: {
              backgroundColor: "#000"
            }
          }}
        />
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          options={{
            headerShown: false
          }}
        />
    </Stack.Navigator>
  )
}

export default StackNavigation