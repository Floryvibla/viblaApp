import { Alert, View } from 'react-native'
import React, { useState } from 'react'
import styled from "styled-components/native"
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Header = ({ imageProfile,  username, localisation }) => {

    const [follow, setfollow] = useState(false)
    const [save, setSave] = useState(false)

  return (
    <Area>
        <AreaPerfil>
            <CirclePerfil 
                imgSrc={imageProfile}
                size= {40}
            />
             <AreaUsername>
                <Text> {username ?? "unamed"} </Text>
                <Text size={10} color={"#a8a7a7"} > {localisation ?? "Wakanda forever"} </Text>
            </AreaUsername>
        </AreaPerfil>
        <AreaFollow>
            <ButtonFollow onPress={() => setfollow(!follow)} color={follow}>
                <TextFollow> {follow ? "seguindo" : "seguir"} </TextFollow>
            </ButtonFollow>
            <Icon name={save ? "bookmark" : "bookmark-o"} color={save} onPress={() => setSave(!save)} />
            <IconDot name="dots-horizontal" />
        </AreaFollow>
    </Area>
  )
}

export const Area = styled.View`
    width: 100%;
    height: 50px;
    margin: 10px 0px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0px 10px;
`
export const AreaPerfil = styled.View`
    flex-direction: row;
    align-items: center;
`
export const AreaFollow = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const AreaUsername = styled.TouchableOpacity`
    margin-left: 10px;
`
export const Text = styled.Text`
    color: ${({color}) => color ?? colors.white};
    font-size: ${({size}) => size ?? 14}px;
`
export const ButtonFollow = styled.TouchableOpacity`
    width: 50px;
    height: 15px;
    border-radius: 5px;
    background-color: ${({color}) => color ? colors.white_100 : colors.dourado};
    justify-content: center;
    align-items: center;
`
export const TextFollow = styled.Text`
    color: ${colors.dark};
    font-size: ${({size}) => size ?? 10}px;
`
export const Icon = styled(FontAwesome)`
    color: ${({color}) => color ? colors.dourado : colors.white_100};
    font-size: ${({size}) => size ?? 20}px; 
    margin: 0px 10px;
`
export const IconDot = styled(MaterialCommunityIcons)`
    color: ${colors.white_100};
    font-size: 24px; 
`

export default Header