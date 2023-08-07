import React, { useEffect, useState } from 'react'
import { Alert, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Container, CanvasStyled, BackdropBlurStyled, ImageProfile, ButtonArea, ButtonTouchable, Wrapper, Content, ImageQrcode, AreaProfile } from './styles';
import { colors } from '../../Constants/styles';
import { Backdrop, qrcodeImgSkia } from '../../components/Backdrop';
import { View } from 'react-native';
import { HeaderBack } from '../../components/Header/HeaderBack';
import TextUI from '../../components/Text';
import { codeInvitationActions, othersActions } from '../../redux/actions';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';
import { useFetch } from '../../hooks/fetchs';
import Loading from '../../components/Loading';
import CirclePerfil from '../../components/Others/CirclePerfil';

const { height, width } = Dimensions.get('window')

const InviteFriends = () => {

  const dispatch = useDispatch<any>()
  const { openModal, contentDisplayModal } = useSelector((state: any) => state.others)

  const { dataUserStorage } = useAsyncStorage()
  const { postFetch, dataFetch } = useFetch()

  const qrcodeInvitation = dataUserStorage?.q_rcodes?.filter(item => item.type === 'invitation')[0]
  const qrcodeProfile = dataUserStorage?.q_rcodes?.filter(item => item.type === 'profile')[0]
  

  const positionText = {
    y: qrcodeImgSkia.y - 60
  }

  const handleInvite = () => {
    // dispatch(codeInvitationActions.getCodeInvitation())
    postFetch({url: 'code-invites'})
  }

  useEffect(() => {
    if (dataFetch.error) {
      Alert.alert('', dataFetch.error)
    }

    if (dataFetch.success) {
      dispatch(othersActions.openModal({title: "InvitationFriends", data: dataFetch.data.id_invite}))
    }
    
  }, [dataFetch])
  



  // console.log("InviteFriends - contentDisplayModal: ", contentDisplayModal);
  

  return (
    <Container>
      <Backdrop />
      <Wrapper>
        <HeaderBack title=""/>
        <Content>
          <BackdropBlurStyled>
            <AreaProfile>
              <CirclePerfil imgSrc={dataUserStorage?.avatar?.url} size={'100%'} />
            </AreaProfile>
            <View style={{height: 60}} />
            <ImageQrcode 
              source={{uri: qrcodeProfile?.qrcode_url}}
              resizeMode='contain'
            />
            <TextUI size={22} color='white' align='center' variant='title'>
              {dataUserStorage?.name?.split(' ')[0]} {dataUserStorage?.name?.split(' ')[1]}
            </TextUI>
          </BackdropBlurStyled>
        </Content>
        <ButtonArea>
          <ButtonTouchable 
            onPress={handleInvite}
            disabled={dataFetch.loading}
          >
            {dataFetch.loading 
              ? (
                <Loading />
              ) : <TextUI weight={600} align='center' variant='subtitle'>Convidar</TextUI>
            }
          </ButtonTouchable>
        </ButtonArea>
      </Wrapper>
    </Container>
  )
}

export default InviteFriends