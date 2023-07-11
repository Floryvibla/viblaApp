import { Alert, Pressable, View } from 'react-native'
import React, { useRef, useState } from 'react'
import styled from "styled-components/native"
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
    onPressDot
}: PostDataDto) => {

    const { isAuth } = useSelector((state: any) => state.auth)
    const [follow, setfollow] = useState(false)
    const [save, setSave] = useState(false)
    

    // const auth = isAuth.id === idUser

    // console.log("createdAt: ", createdAt);

  return (
    <Area>
        <AreaPerfil>
            <Avatar source={url_avatar} />
            <AreaText>
                <TextUI variant='subtitle'>{username}</TextUI>
                <TextUI variant='secondary'>{createdAt}</TextUI>
            </AreaText>
        </AreaPerfil>
        <AreaFollow>
            {/* <ButtonFollow isFollow={false}>
                <TextUI variant='follow'>Seguir</TextUI>
            </ButtonFollow> */}
            <Pressable onPress={onPressDot}>
                <IconDot color={isActiveOptionsPost} name="dots-horizontal" />
            </Pressable>
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
    gap: 10px;
`
export const AreaText = styled.View`
`
export const AreaFollow = styled.View`
    flex-direction: row;
    align-items: flex-start;
    gap: 5px;
`
export const ButtonFollow = styled.Pressable<ButtonFollowProps>`
    background-color: ${({isFollow}) => isFollow ? colors.white_100 : colors.dourado};
    border-radius: 5px;
    padding: 2px 5px;
`
export const IconDot = styled(MaterialCommunityIcons)<IconDotProps>`
    color: ${({ isActive }) => isActive ? colors.dourado : colors.darkGray};
    font-size: ${({size}) => size ?? 24}px; 
`

export default Header