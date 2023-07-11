import { View } from 'react-native'
import React, { useState } from 'react'
import { Area, Button, ButtonLinearGradient, ImageIllustration, Text, Wrapper } from '../../../styles'
import imgIllustration from '../../../../Assets/illustrations/Black_Couple_Picnic.png'
import iconCamera from '../../../../Assets/icons/3d/camera.png'
import iconGalery from '../../../../Assets/icons/3d/picture.png'
import iconMapPin from '../../../../Assets/icons/3d/map-pin.png'
import iconMic from '../../../../Assets/icons/3d/mic.png'
import { colors } from '../../../../Constants/styles'
import Loading from '../../../Loading'
import { useDispatch } from 'react-redux'
import { othersActions } from '../../../../redux/actions/others.actions'
import BaseModalInterno from '../Base'

const PermissionsModal = ({ type, sizeIcon, title, description, onPress, openModal }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const handleSubmit = () => {
        setLoading(true)
        setTimeout(() => {
            dispatch(othersActions.handleAuth(true))
            setLoading(false)
        }, 2000);
    }

    const handleSourceImgIcon = () => {
      switch (type) {
        case "permission-camera":
          return iconCamera
        case "permission-galery":
          return iconGalery
        case "permission-location":
          return iconMapPin
        case "permission-microphone":
          return iconMic
      
        default:
          break;
      }
    }

    const sourceImgIcon = handleSourceImgIcon()


  return (
    <BaseModalInterno open={openModal}>
      <Area>
        <Wrapper marginBottom={0}>
          <ImageIllustration width={sizeIcon} source={sourceImgIcon} />
        </Wrapper>
        <Wrapper marginBottom={0} width={1.4}>
          <Text weight={"bold"} color={colors.dark}> {title} </Text>
        </Wrapper>
        <Wrapper marginTop={10} marginBottom={0} width={1.4}>
          <Text size={16} color={colors.darkGray}> 
            {description}
          </Text>
        </Wrapper>
        <Wrapper width={1.4} marginBottom={0}>
          <Button onPress={onPress}>
            <ButtonLinearGradient>
              {loading 
                  ? <Loading size={50} />
                  : <Text size={16} weight={"bold"}>{"Permitir acesso!!"}</Text>
              }
            </ButtonLinearGradient>
          </Button>
        </Wrapper>
      </Area>
    </BaseModalInterno>
  )
}

export default PermissionsModal