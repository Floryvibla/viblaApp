import { View,TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../Constants/styles';
import { Text } from '../styles';

const CardListSerie = ({ add, onPress, cover, title, mt, mb, active, pv, ph }) => {
  return (
    <Pressable 
        onPress={onPress}
        style={{
            flexDirection: 'row', 
            // justifyContent: 'center',
            alignItems: 'center',
            marginBottom: mb ?? 0,
            marginTop: mt ?? 0,
            backgroundColor: active ? colors.goldLight+39 : 'transparent',
            paddingHorizontal: ph ?? 0, 
            paddingVertical: pv ?? 0
        }}
    >
        <View 
            style={{
                width: add ? 30: 55, 
                height: add ? 30: 55, 
                borderRadius: 10, 
                backgroundColor: add ? colors.goldLight+95 : 'transparent', 
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10
            }}
        >
            {add
                ? <Ionicons name="add" size={15} color={colors.lightGray} />
                : <Image resizeMode='cover' source={{uri: cover}} style={{width: '100%', height: '100%', borderRadius: 10}} />
            }
        </View>
        <Text second={add}>{title ?? 'Adicionar em uma serie'}</Text>
    </Pressable>
  )
}

export default CardListSerie