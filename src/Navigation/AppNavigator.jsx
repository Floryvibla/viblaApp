import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './StackNavigation'
import TabBottomNavigation from './TabBottomNavigation'


function AppNavigator() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle='light-content' />
      <StackNavigation />
      {/* <TabBottomNavigation /> */}
    </NavigationContainer>
  )
}

export default AppNavigator