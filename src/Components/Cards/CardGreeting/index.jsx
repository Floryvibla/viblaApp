import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Image, Pressable } from 'react-native'
import { Text, Wrapper } from '../../styles'
import defaultImage from '../../../Assets/icons/3d/sun.png'
import { colors } from '../../../Constants/styles'


const CardGreeting = ({ name="Flory", poster, onPress }) => {

    const msg = `Todo novo dia é dia de mudar a sua vida`
  return (
    <Wrapper
        widthStyle={"100%"}
        initial
        center
        row
        style={{borderRadius: 20, backgroundColor: colors.goldDark}}
    >
        <Wrapper
            initial
            widthStyle={"80%"}
            style={{padding: 20}}
        >
            <Text bold start> Bom dia, {name} </Text>
            <Text start color={colors.lightGray} second> {msg} </Text>
        </Wrapper>
        <Wrapper
            initial
            // center
            widthStyle={"20%"}
            style={{backgroundColor: colors.goldDark, borderRadius: 20, marginTop: 20}}
        >
            <Image source={!poster ? defaultImage : {uri: poster}} style={{width: 50, height: 50, alignSelf: "center"}} />
        </Wrapper>
        <Pressable
            onPress={onPress}
            style={{position: 'absolute', top: 10, right: 10}}
        >
            <AntDesign name="close" size={20} color={colors.darkGray} />
        </Pressable>
    </Wrapper>
  )
}

export default CardGreeting