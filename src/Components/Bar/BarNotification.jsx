import { Alert, Image, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import styled from "styled-components/native"
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Wrapper } from '../styles'



const BarNotification = ({ imageProfile,  username, info, relative, auth, isFollow, item }) => {

    const [follow, setFollow] = useState(true)
    const [save, setSave] = useState(false)

    const text= `A Vibla é a melhor rede social que pode existir no mundo.
    Eu amo muito isso demaiiis`

    const handleMsg = () => {
        switch (item.type) {
            case "photo":
                return `Curtiu sua foto`
            case "follow":
                return `Começou a te seguir`
            case "text":
                return `Comentou teu post`
            case "video":
                return `Curtiu seu vídeo`
        
            default:
                return `Curtiu sua foto`;
        }
    }

    useEffect(() => {
      setFollow(isFollow)
    }, [isFollow])
    
    // console.log("Aqui: ");

  return (
    <Area bg={item.open} relative={relative}>
        <AreaPerfil>
            <CirclePerfil 
                imgSrc={item.avatar}
            />
             <AreaUsername>
                <Text start size={16} bold> {item.username} </Text>
                <Text second start size={14} > {info ?? handleMsg()} </Text>
            </AreaUsername>
        </AreaPerfil>
        <AreaFollow>
            {item.type === "follow" &&
                <ButtonFollow onPress={() => setFollow(!follow)} color={follow}>
                    <Text black bold size={14}> {follow ? "seguindo" : "siga de volta"} </Text>
                </ButtonFollow>
            }
            {item.type === "text" &&
                <Wrapper 
                    widthStyle={"100%"} 
                    style={{backgroundColor: colors.darkGray+74, alignItems: "center", padding: 3, borderRadius: 5}} initial>
                    <Text start size={10}> {item.info.slice(0, 50)}... </Text>
                </Wrapper>
            }
            {item.type === "video" &&
                <Wrapper style={{alignItems: "flex-end"}} widthStyle={"100%"} initial>
                    <Image 
                        style={{width: 50, height: 70, borderRadius: 5}}
                        resizeMode="cover"
                        source={{uri: item.info}} />
                </Wrapper>
            }
            {item.type === "photo" &&
                <Wrapper style={{alignItems: "flex-end"}} initial>
                    <Image 
                        style={{width: 50, height: 50}}
                        resizeMode="cover"
                        source={{uri: item.info}} 
                    />
                </Wrapper>
            }
        </AreaFollow>
    </Area>
  )
}

export const Area = styled.View`
    width: 100%;
    height: 70px;
    margin: 10px 0px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0px 10px;
    position: ${({relative}) => relative ? "relative" : "absolute"};
    top: 0px;
    /* z-index: 50; */
`
export const AreaPerfil = styled.View`
    flex-direction: row;
    /* align-items: center; */
`
export const AreaFollow = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 30%;
    /* background-color: red; */
`
export const AreaUsername = styled.Pressable`
    margin-left: 10px;
`

export const ButtonFollow = styled.Pressable`
    height: 30px;
    width: 95%;
    border-radius: 5px;
    background-color: ${({color}) => color ? colors.white_100 : colors.dourado};
    justify-content: center;
    align-items: center;
`
export const TextFollow = styled.Text`
    color: ${colors.dark};
    font-size: ${({size}) => size ?? 10}px;
    font-weight: ${({bold}) => bold ? "bold" : "normal"};
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

export default BarNotification