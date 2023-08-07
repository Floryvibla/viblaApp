import React from 'react'
import { Dimensions, View } from 'react-native'
import styled from "styled-components/native"
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { colors } from "../../../Constants/styles"
import { Area, AreaRow, ButtonTouch, ImageIllustration, Text, Touch } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Loading';
import ButtonAction from '../../Button';
import { PressableStyled, Container, Wrapper } from './styles';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../redux/actions';
import TextUI from '../../Text';
import { useNavigate } from '../../../hooks/useNavigate';

const { width: WIDTH } = Dimensions.get('window')

export interface HeaderBackProps {
  title?: string, 
  auth?: boolean, 
  screen?: boolean, 
  btn?: boolean, 
  showIcon?: boolean
  loadingContentRight?: boolean, 
  contentRight?: boolean, 
  onPressBtnContentRight?: () => void, 
  onPressBack?: () => void,  
  variant?: 'perfil'
}

export const HeaderBack = ({ 
  auth, 
  variant,
  title, 
  showIcon=true,
  screen, 
  btn, 
  contentRight,
  loadingContentRight,
  onPressBtnContentRight,  
  onPressBack 
}: HeaderBackProps) => {

  const { navigatePublic, navigation } = useNavigate()

  const dispatch = useDispatch<any>()

  const handleBack = () => {
    navigatePublic.goBack()
    dispatch(authActions.cleanAuth())
  }

  const handleShowIcon = () => {
    if (variant && variant === 'perfil') {
      return <Fontisto style={{paddingLeft: 10}} name="train-ticket" size={30} color={colors.gold} /> 
    }else if (showIcon) {
      return <Ionicons name={"chevron-back"} size={30} color={colors.white_100}/>
    }
  }

  const handleTitle = () => {
    if (variant && variant === 'perfil' || title) {
      return (
        <Wrapper>
          <TextUI weight={600} variant='subtitle' align='center'>{title}</TextUI>
        </Wrapper>
      )
    }
  }

  const navigateConfig = () => {
    navigation.navigate('configuration')
  }

  const ShowComponentIcon = handleShowIcon()
  const ShowTitle = handleTitle()

  return (
    <Container>
      <PressableStyled onPress={onPressBack ?? handleBack}>
        {ShowComponentIcon}
      </PressableStyled>
      {ShowTitle}
      {variant && variant === 'perfil' && (
        <PressableStyled onPress={navigateConfig}>
          <Ionicons name="settings-outline" size={30} color={colors.white_100} /> 
        </PressableStyled>
      )}
    </Container>
  )
}