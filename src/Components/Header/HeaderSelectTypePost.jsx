import React, { useEffect } from 'react'
import { Alert, Dimensions, Pressable } from 'react-native'
import styled from "styled-components/native"
import { Ionicons, MaterialIcons, Fontisto } from '@expo/vector-icons';
import { colors } from "../../Constants/styles"
import { Area, AreaRow, ButtonTouch, ImageIllustration, Text, Touch } from '../styles';
import { useNavigation } from '@react-navigation/native';
import Loading from '../Loading';
import ButtonAction from '../Button';
import { useDispatch } from 'react-redux';
import { othersActions, postsActions } from '../../redux/actions';

const { width: WIDTH } = Dimensions.get('window')

const HeaderBack = ({ auth,
    title,
    center,
    btn,
    contentRight=true,
    onPressBtnContentRight,
    loadingContentRight,
    successContentRight,
    onPressOpenDropdown,
    onPressBtnRight,
    dataImage,
    type
}) => {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleBack = () => {
    Alert.alert(
      '',
      'Tem certeza que quer desistir?',
      [
        {
          text: 'Descartar o post',
          style: 'destructive',
          onPress: () => {
            dispatch(othersActions.openDropdown(false))
            navigation.goBack()
          },
        },
        { text: "Cancelar", style: 'cancel', onPress: () => {} },
      ]
    );
  }

  const handleTicket = () => {
    navigation.navigate('my ticket')
  }

  useEffect(() => {
    if (successContentRight) {
      navigation.navigate('Main')
      dispatch(postsActions.cleanCreatePost())
    }
  }, [successContentRight])

  // console.log(successCreatePost);
  


  return (
    <AreaRow style={{height: 50}} marginTop={0} paddingHorizontal={0} direction="row" justify="space-between">
      <Press 
        onPress={handleBack}
        ml
      >
        {/* <Icon name={"chevron-back"} /> */}
        <Text size={18} second> Cancelar </Text>
      </Press>
      <Container flex={3}>
        <Pressable style={{flexDirection: 'row',}}  onPress={onPressOpenDropdown}>
        <Text style={{textTransform: "capitalize"}}> {title} </Text>
        <MaterialIcons name='keyboard-arrow-down' size={24} color={colors.white_100} />
        </Pressable>
      </Container>
      <Press mr end onPress={onPressBtnRight}>
        {loadingContentRight ? <Loading size={50} /> : <Icon name={"chevron-forward"} size={30} color={colors.gold} />}
      </Press>
    </AreaRow>
  )
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: ${({flex}) => flex ?? 1};
  height: 100%;
`
export const Press = styled.Pressable`
    margin-left: 0px;
    flex: 1;
    align-items: ${({end, start}) => end ? "flex-end" : start ? "flex-start" : 'flex-start'};
    justify-content: center;
    height: 100%;
    margin-left: ${({ml}) => ml ? 5 : 0}px;
    margin-right: ${({mr}) => mr ? 5 : 0}px;
`
export const Icon = styled(Ionicons).attrs({
})`
    color: ${colors.white};
    font-size: ${({size}) => size ?? 30}px;
`

export default HeaderBack