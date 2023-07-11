import { View } from 'react-native'
import React, { useState } from 'react'
import { Area, Button, ButtonLinearGradient, ImageIllustration, Text, Wrapper } from '../../../styles'
import imgIllustration from '../../../../Assets/illustrations/Black_Couple_Picnic.png'
import { colors } from '../../../../Constants/styles'
import Loading from '../../../Loading'
import { useDispatch } from 'react-redux'
import { othersActions } from '../../../../redux/actions/others.actions'

const NotificationWelcome = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const handleSubmit = () => {
      setLoading(true)
      setTimeout(() => {
        dispatch(othersActions.handleAuth(true))
        setLoading(false)
        dispatch(othersActions.closeModal())
      }, 2000);
    }

    // console.log("Aqui");

  return (
    <Area>
      <Wrapper marginBottom={0}>
        <ImageIllustration source={imgIllustration} />
      </Wrapper>
      <Wrapper marginBottom={0} width={1.4}>
        <Text size={16} color={colors.dark}> Sua conta está pronta para uso. </Text>
        {/* <Text size={14} color={colors.dark}> Você irá ser redirecionado para a página inicial em um poucos segundos. </Text> */}
      </Wrapper>
      <Wrapper marginBottom={0} width={1.4}>
        <Text weight={600} size={16} color={colors.dark}> Vale resaltar que a Vibla é uma rede social voltado ao público negro.</Text>
        {/* <Text weight={600} size={16} color={colors.dark}> Não será tolerado o enaltecimento de outros públicos!</Text> */}
      </Wrapper>
      <Wrapper marginTop={5} marginBottom={0} width={1.4}>
        {/* <Text weight={600} size={16} color={colors.dark}> Vale resaltar que a Vibla é uma rede social voltado ao público negro.</Text> */}
        <Text weight={600} size={16} color={colors.dark}> Não será tolerado o enaltecimento de outros públicos!</Text>
      </Wrapper>
      <Wrapper width={1.4} marginBottom={0}>
        <Button onPress={handleSubmit}>
          <ButtonLinearGradient>
            {loading 
              ? <Loading size={50} />
              : <Text size={16} weight={"bold"}>{"Concordo!"}</Text>
            }
          </ButtonLinearGradient>
        </Button>
      </Wrapper>
    </Area>
  )
}

export default NotificationWelcome