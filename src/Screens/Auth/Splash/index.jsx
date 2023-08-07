import { View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { colors } from '../../../Constants/styles'
import Loading from '../../../components/Loading'
import { Text } from '../../../components/styles'

export const Splash = ({ loading }) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.dark}}>
      <ImageBackground
        source={require('../../../../assets/splash.png')}
        style={{flex: 1, justifyContent: "center", alignItems: "center"}}
      >
        {loading &&
          <>
            <View style={{marginTop: "50%"}}>
              <Loading size={40} />
            </View>
            <Text> Carregando... </Text>
          </>
        }
      </ImageBackground>
    </View>
  )
}
