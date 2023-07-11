import { Alert, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import styled from "styled-components/native"
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const BarFollow = ({ imageProfile,  username, category, relative, auth, isFollow, notSeeFollows, hashtag }) => {

    const [follow, setFollow] = useState(false)
    const [save, setSave] = useState(false)

    useEffect(() => {
      setFollow(isFollow)
    }, [isFollow])
    
    // console.log("Aqui: ", isFollow);

  return (
    <Area relative={relative}>
        <AreaPerfil>
            <CirclePerfil 
                imgSrc={imageProfile}
                hashtag={hashtag}
            />
             <AreaUsername>
                <Text size={15} style={{fontWeight: 'bold'}}> {username ?? "unamed"} </Text>
                <Text size={12} color={colors.white} > {category ?? "Creador de conteúdo"} </Text>
            </AreaUsername>
        </AreaPerfil>
        {!notSeeFollows &&
            <AreaFollow>
                <ButtonFollow onPress={() => setFollow(!follow)} color={follow}>
                    <TextFollow bold size={14}> {follow ? "seguindo" : "seguir"} </TextFollow>
                </ButtonFollow>
                {/* {!auth &&
                    <>
                        <ButtonFollow onPress={() => setFollow(!follow)} color={follow}>
                            <TextFollow> {follow ? "seguindo" : "seguir"} </TextFollow>
                        </ButtonFollow>
                        <Icon name={save ? "bookmark" : "bookmark-o"} color={save} onPress={() => setSave(!save)} />
                    </>
                } */}
                {/* <IconDot name="dots-horizontal" /> */}
            </AreaFollow>
        }
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
    position: ${({relative}) => relative ? "relative" : "absolute"};
    top: 0px;
    z-index: 50;
`
export const AreaPerfil = styled.View`
    flex-direction: row;
    /* align-items: center; */
`
export const AreaFollow = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const AreaUsername = styled.Pressable`
    margin-left: 10px;
`
export const Text = styled.Text`
    color: ${({color}) => color ?? colors.white};
    font-size: ${({size}) => size ?? 14}px;
    /* font-weight: ${({font}) => font && "500"}; */
`
export const ButtonFollow = styled.Pressable`
    width: 90px;
    height: 25px;
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

export default BarFollow