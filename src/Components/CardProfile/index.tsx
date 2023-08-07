import React from 'react'
import { Pressable, View } from 'react-native'
import CardBiographie from '../CardBiographie'
import CirclePerfil from '../Others/CirclePerfil'
import { useNavigate } from '../../hooks/useNavigate'
import { Container, Wrapper } from './styles'
import TextUI from '../Text'
import ButtonUI from '../ButtonUI'


interface CardProfileProps {
    following?: any, 
    followers?: any,
    name?: any,
    verified?: any,
    isFounder?: boolean
    profession?: any,
    bio?: any,
    auth?: any,
    onPressBtnAction?: () => void,
    isFollower?: boolean,
}

const CardProfile = ({ 
    following, 
    followers,
    name,
    verified,
    isFounder,
    profession,
    bio,
    auth,
    onPressBtnAction,
    isFollower
}: CardProfileProps) => {

    const { navigation } = useNavigate()

    const handlePressFollowerAndFollowings = (dataType: any) => {
        navigation.navigate("followersAndFollowings", {
            optionActive: dataType
        })
    }

  return (
    <Container>
        <Wrapper>
            <Pressable 
                onPress={() => handlePressFollowerAndFollowings(`Seguindo ${following}`)} 
                style={{paddingLeft: "10%", flex: 0.5}}
            >
                <TextUI align='center' variant='title'>{following}</TextUI>
                <TextUI align='center' size={14} variant='secondary'>{"Seguindo"}</TextUI>
            </Pressable>
            <Wrapper style={{flex: 1}}>
                <CirclePerfil 
                    size={'100px'}
                />
            </Wrapper>
            <Pressable 
                onPress={() => handlePressFollowerAndFollowings(`${followers > 0 ? "Seguidores" : "Seguidor"} ${followers}`)}
                style={{paddingRight: "10%", flex: 0.5}}
            >
                <TextUI align='center' variant='title'>{followers}</TextUI>
                <TextUI align='center' size={14} variant='secondary'>{followers > 0 ? "Seguidores" : "Seguidor"}</TextUI>
            </Pressable>
        </Wrapper>
        <CardBiographie 
          name={name} 
          isVerified={verified}
          profession={profession}
          biography={bio}
          isFounder={isFounder}
        />
        <View style={{width: '100%', alignItems: 'center', paddingHorizontal: 50}}>
            <ButtonUI 
                title={auth ? "Editar Perfil" : isFollower ? "Seguindo" : "Seguir"}
                style={{borderRadius: 30}}
                variant='secondary'
                onPress={onPressBtnAction}
            />
        </View>
    </Container>
  )
}

export default CardProfile