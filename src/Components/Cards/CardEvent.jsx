import { View, Image, Platform } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Button, Text, Wrapper } from '../styles'
import { colors } from '../../Constants/styles'
import ButtonAction from '../Button';

const CardEvent = ({ banner, onPress }) => {

    const img = "https://images.sympla.com.br/61856a01f386d-lg.png"

  return (
    <Wrapper
        marginTop={0}
        width={1.2}
        justify={"flex-start"}
        style={{
            height: 300, backgroundColor: colors.lightGray, borderRadius: 10
        }}
    >
        <Wrapper 
            initial 
            marginTop={0} 
            marginBottom={0}
            style={{width: "100%", height: "50%"}}
        >
            <Image
                source={{uri: `${banner}`}} 
                resizeMode= "cover"
                style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, height: "100%", width: "100%"}}
            />
        </Wrapper>

        <Wrapper 
            initial 
            marginTop={0} 
            marginBottom={0}
            justify={"flex-start"}
            style={{width: "100%", height: "50%", padding: 10}}
        >
            {/* <Text size={16} bold black>Cinema na rua</Text> */}
            <Wrapper
                initial 
                marginTop={0} 
                marginBottom={0}
                // direction={""}
                // justify={"center"}
                style={{width: "100%", flexDirection: "row", alignItems: "center", marginTop: 5, justifyContent: "space-between"}}
            >
                <Text size={16} bold black>Cinema na rua</Text>
                <Text size={16} bold black>R$ 25,00</Text>
            </Wrapper>
            <Wrapper
                initial 
                marginTop={0} 
                marginBottom={0}
                // direction={""}
                // justify={"center"}
                style={{width: "100%", flexDirection: "row", alignItems: "center", marginTop: 5}}
            >
                <Ionicons name="calendar-outline" size={20} color={colors.goldDark500} style={{marginRight: 5}} />
                <Text bold size={13} color={"#838383"}>22 Sep 2022 - 19h</Text>
            </Wrapper>
            <Wrapper
                initial 
                marginTop={10} 
                marginBottom={0}
                // direction={""}
                // justify={"center"}
                style={{width: "100%", flexDirection: "row", alignItems: "center", marginTop: 5}}
            >
                <Feather name="map-pin" size={20} color={colors.goldDark500} style={{marginRight: 5}} />
                <Text bold size={13} color={"#838383"}>SP - São Paulo</Text>
            </Wrapper>
            <ButtonAction 
                title={"Ver mais"}
                onPress={onPress}
            />
        </Wrapper>

    </Wrapper>
  )
}

export default CardEvent