import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable } from 'react-native'
import { colors } from '../../Constants/styles'
import Avatar from '../Avatar'
import ButtonAction from '../Button'
import CardBiographie from '../CardBiographie'
import CirclePerfil from '../Others/CirclePerfil'
import { Text, Wrapper } from '../styles'

const CardProfile = ({ 
    following, 
    followers,
    username,
    verified,
    profession,
    bio,
    auth,
    onPressBtnAction,
    isFollower,
    series
}) => {

    const navigation = useNavigation()

    const handlePressFollowerAndFollowings = (dataType) => {
        navigation.navigate("followers and followings", {
            optionActive: dataType
        })
    }

  return (
    <Wrapper marginTop={20} marginBottom={0}>
        <Wrapper justify="space-between" direction="row" marginTop={0} marginBottom={0}>
            <Pressable 
                onPress={() => handlePressFollowerAndFollowings(`Seguindo ${following}`)} 
                style={{paddingLeft: "10%", flex: 0.5}}
            >
                <Text size={20} weight={"bold"} color={colors.white_100}>{following}</Text>
                <Text size={14} color={colors.darkGray}>{"Seguindo"}</Text>
            </Pressable>
            <Wrapper style={{flex: 1}} marginTop={0} marginBottom={0}>
                <CirclePerfil 
                    noPicture
                    size={100}
                />
            </Wrapper>
            <Pressable 
                onPress={() => handlePressFollowerAndFollowings(`${followers > 0 ? "Seguidores" : "Seguidor"} ${followers}`)}
                style={{paddingRight: "10%", flex: 0.5}}
            >
                <Text size={20} weight={"bold"} color={colors.white_100}>{followers}</Text>
                <Text size={14} color={colors.darkGray}>{followers > 0 ? "Seguidores" : "Seguidor"}</Text>
            </Pressable>
        </Wrapper>
        <CardBiographie 
          username={username} 
          verified={verified}
          profession={profession}
          bio={bio}
        />
        <ButtonAction 
            size={"70%"} 
            title={auth ? "Editar Perfil" : isFollower ? "Seguindo" : "Seguir"} 
            onPress={onPressBtnAction}
            active={auth ? true : isFollower}
        />
    </Wrapper>
  )
}

export default CardProfile