import { View, Text } from 'react-native'
import React from 'react'
import { Container, Content, Wrapper } from './styles'
import TextUI from '../../Text'
import { useDispatch, useSelector } from 'react-redux'
import { othersActions } from '../../../redux/actions'

interface OptionsHeaderPostProps {
    data?: any
}

export const OptionsHeaderPost = ({
    data
}: OptionsHeaderPostProps) => {

    const dispatch = useDispatch<any>()

    const { contentDisplayModalData } = useSelector((state: any) => state.others)
    const { isAuth } = useSelector((state: any) => state.auth)


    const username = contentDisplayModalData.attributes.owner.data.attributes.username
    const userPostId = contentDisplayModalData.attributes.owner.data.id
    const isOwnerPost = isAuth.id === userPostId

    // console.log("isAuth: ", isAuth.id === userPostId);
    

    const onPressItem = () => {
        dispatch(othersActions.closeModal())
    }
    
  return (
    <Container>
        {isOwnerPost ? (
                <Wrapper>
                    <Content onPress={onPressItem} bt>
                        <TextUI type='danger' variant='subtitle'>Excluir</TextUI>
                    </Content>
                </Wrapper>
            ) : (
                <>
                    <Wrapper>
                        <Content onPress={onPressItem} bt>
                            <TextUI variant='subtitle'>Não tenho interesse neste conteudo</TextUI>
                        </Content>
                    </Wrapper>
                    <Wrapper>
                        <Content onPress={onPressItem} bt>
                            <TextUI variant='subtitle'>Seguir @{username}</TextUI>
                        </Content>
                        <Content onPress={onPressItem}>
                            <TextUI variant='subtitle'>Bloquear @{username}</TextUI>
                        </Content>
                        <Content onPress={onPressItem}>
                            <TextUI variant='subtitle'>Reportar</TextUI>
                        </Content>
                    </Wrapper>
                </>
            )
        
        }
    </Container>
  )
}
