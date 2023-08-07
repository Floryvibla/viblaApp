import React from 'react'
import { Circle, Container, Wrapper, ButtonPressable } from './styles'
import TextUI from '../../../Text'
import ButtonUI from '../../../ButtonUI'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useCopyToBoard } from '../../../../hooks/useCopyToBoard';
import { useSelector } from 'react-redux';
import { colors } from '../../../../Constants/styles';

export const InvitationFriends = () => {

    const { contentDisplayModalData } = useSelector((state: any) => state.others)

    const msg = `Hey, este código: ${contentDisplayModalData} é o inicio do seu novo estilo de vida.
    Baixe a Vibla e insera este código de convite para poder entrar.
    Uma vez usado este código, não mais seria usado!`

    const { copyData, copyToClipboard, openShareDialogAsync } = useCopyToBoard({msg})

  return (
    <Container>
        <Wrapper style={{justifyContent: 'center'}}>
            <TextUI variant='title' align='center' color='dark' >
                Como convidar amigos
            </TextUI>
        </Wrapper>
        <Wrapper>
            <Circle>
                <TextUI variant='title'>1</TextUI>
            </Circle>
            <TextUI color='dark_second' variant='subtitle'>Peça a seus amigos para baixarem a Vibla</TextUI>
        </Wrapper>
        <Wrapper>
            <Circle>
                <TextUI variant='title'>2</TextUI>
            </Circle>
            <TextUI color='dark_second' variant='subtitle'>Seus amigos inserem seu código de convite</TextUI>
        </Wrapper>
        <Wrapper>
            <Circle>
                <TextUI variant='title'>3</TextUI>
            </Circle>
            <TextUI color='dark_second' variant='subtitle'>Uma vez usado este código, não mais seria usado!</TextUI>
        </Wrapper>
        <Wrapper style={{justifyContent: 'center'}}>
            <TextUI variant='title' size={22} align='center' color='goldDark500' >
                {contentDisplayModalData}
            </TextUI>
        </Wrapper>
        <Wrapper style={{justifyContent: 'center'}}>
            <ButtonPressable state={copyData.state} onPress={copyToClipboard}>
                <MaterialCommunityIcons name="content-copy" size={16} color={copyData.state ? colors.successDark : colors.dark} />
                <TextUI align='center' color={copyData.state ? 'successDark' : 'dark'} >
                    {copyData.text}
                </TextUI>
            </ButtonPressable>
            <ButtonPressable onPress={openShareDialogAsync}>
                <MaterialCommunityIcons name="content-copy" size={16} color={colors.dark} />
                <TextUI align='center' color='dark' >
                    Compartilhar
                </TextUI>
            </ButtonPressable>
        </Wrapper>
        <Wrapper style={{justifyContent: 'center'}}>
            <TextUI align='center' color='dark' >
                Vale lembrar que a Vibla é uma rede social voltado ao público negro.
            </TextUI>
        </Wrapper>
    </Container>
  )
}