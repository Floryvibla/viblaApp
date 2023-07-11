import { Dimensions, Image, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { colors } from '../../Constants/styles'

const GrilImage = ({ uri, selected }) => {
    const { height, width } = Dimensions.get('window')
    // console.log(uri);
  return (
    <View
        style={{
            position: 'relative',
            // width: width / 4,
            height: width / 4,
            backgroundColor: colors.white,
            margin: 1
            // padding: 20
        }}
    >
      <Image 
        style={{width: width / 4, height: width / 4}}
        source={{uri}}
      />
      {selected === uri &&
        <View 
            style={{
                width: "100%", height: "100%", position: "absolute", backgroundColor: colors.gold+89, justifyContent: 'center', alignItems: "center"
            }}
        >
            <Feather name="check-circle" size={20} color={colors.white_100} />
        </View>
      }
    </View>
  )
}

export default GrilImage