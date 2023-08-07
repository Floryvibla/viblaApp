import React, { useEffect } from 'react'
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import * as NavigationBar from 'expo-navigation-bar';
import * as Linking from 'expo-linking'
import 'react-native-gesture-handler';
import { Audio } from "expo-av";
import AppNavigator from './src/Navigation/AppNavigator';
import { Provider, useDispatch } from 'react-redux'
import { store } from './src/redux/store'
import { SWRConfig } from 'swr';
import { colors } from './src/Constants/styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const prefix = Linking.createURL('/')

export default function App() {

  const linking = {
    prefixes: [prefix]
  }

  useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    Platform.OS === 'android' && NavigationBar.setPositionAsync('absolute');
    Platform.OS === 'android' && NavigationBar.setBackgroundColorAsync('transparent');
  }, []);

  // console.log("Teste2");
  

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <SWRConfig
          value={{
            revalidateOnFocus: true,
            revalidateOnReconnect: true,
            revalidateIfStale: true,
            focusThrottleInterval: 5000
            // revalidateOnMount: false
          }}
        >
          <GestureHandlerRootView style={{ flex: 1 }}>
          <AppNavigator linking={linking}/>
          </GestureHandlerRootView>
        </SWRConfig>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark
  }
});
