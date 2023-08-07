import { Alert, Pressable, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import styled from "styled-components/native"
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { PostDataDto } from '../../dtos/postsDtos'
import Avatar from '../Avatar'
import TextUI from '../Text'



interface ButtonFollowProps {
    isFollow: any
}

interface IconDotProps {
    isActive?: boolean
}

const Header = ({ 
    name,
    is_founder,
    is_verified,
    username,
    url_avatar,
    createdAt,
    isActiveOptionsPost,
    onLiked,
    // liked_posts,
    onComment,
    onShared
}: PostDataDto) => {

    const { isAuth } = useSelector((state: any) => state.auth)
    const [follow, setfollow] = useState(false)
    const [save, setSave] = useState(false)
    const [isLiked, setIsLiked] = useState(true)
    

    // const auth = isAuth.id === idUser

    // console.log("createdAt: ", createdAt);

  return (
    <Area>
        <AreaPerfil>
            <Avatar source={url_avatar} />
            <WraperHeader>
                <ContentWrapperHeader style={{gap: 10}}>
                    <TextUI variant='subtitle' style={{fontWeight: '400', fontSize: 18}}>{username}</TextUI>
                    {/* <ButtonFollow isFollow={false}>
                        <TextUI variant='follow'>Seguir</TextUI>
                    </ButtonFollow> */}
                </ContentWrapperHeader>
                
                <ContentWrapperHeader>
                    <FontAwesome name="photo" size={13} color={colors.white} />
                    <TextUI style={{fontSize: 13}}>Fotos</TextUI>
                    <TextUI style={{fontSize: 7}}>-</TextUI>
                    <MaterialIcons name="public" size={13} color={colors.white} />
                    <TextUI style={{fontSize: 7}}>-</TextUI>
                    <TextUI style={{fontSize: 13}}>{createdAt}</TextUI>
                </ContentWrapperHeader>
            </WraperHeader>
        </AreaPerfil>
        <AreaFollow>
            <TouchableOpacity onPress={() => setIsLiked(prev => !prev)}>
                <FontAwesome 
                    name={isLiked ? "heart" : "heart-o"} 
                    size={25} 
                    color={isLiked ? colors.goldDark500 : colors.white} 
                />
            </TouchableOpacity>
        </AreaFollow>
    </Area>
  )
}

export const Area = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`
export const AreaPerfil = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 12px;
`
export const WraperHeader = styled.View`
    justify-content: center;
    gap: 1px;
`
export const ContentWrapperHeader = styled.View`
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    gap: 5px
`
export const AreaFollow = styled.View`
    flex-direction: row;
    align-items: flex-start;
    gap: 5px;
`
export const ButtonFollow = styled.Pressable<ButtonFollowProps>`
    background-color: ${({isFollow}) => isFollow ? colors.gold : 'transparent'};
    border-radius: 50px;
    border-width: ${({isFollow}) => isFollow ? 0 : 1}px;
    border-color: ${colors.white_100};
    padding: 2px 15px;
`
export const IconDot = styled(MaterialCommunityIcons)<IconDotProps>`
    color: ${({ isActive }) => isActive ? colors.dourado : colors.darkGray};
    font-size: ${({size}) => size ?? 24}px; 
`

export default Header