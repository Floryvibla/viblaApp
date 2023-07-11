import React, { useState } from 'react'
import { colors } from "../../Constants/styles"
import { Area, Text, Touch, Wrapper } from '../../Components/styles'
import HeaderBack from '../../Components/Header/HeaderBack'
import { useNavigation, useRoute } from '@react-navigation/native'
import { chave_pix } from "../../mocks/others.json"
import CopyToClipboard from '../../Components/CopyToClipboard'

const Payment = () => {

  const navigation = useNavigation()


  return (
    <Area justify="flex-start" align="flex-start" style={{flex: 1}} bgColor={colors.dark}>
      <HeaderBack auth={false} title="Pagamento" />
      <Wrapper 
        widthStyle={"100%"} 
        justify="flex-start" 
        // direction="row"
        style={{paddingHorizontal: 20}} 
        // marginTop={0} 
        marginBottom={5}
      >
        <Wrapper widthStyle={"100%"}>
          <Text bold size={24} start>Seu Pix foi gerado!</Text>
        </Wrapper>
        <Wrapper start marginTop={0} widthStyle={"90%"}>
          <Text size={16} start>Agora é só efectuar o pagamento com o pix e boa festa!</Text>
        </Wrapper>
        <Wrapper start widthStyle={"100%"}>
          <Text second size={14}>
            Copie o código abaixo e utilize o Pix Copia e Cola no aplicativo que você vai fazer o pagamento.
          </Text>
        </Wrapper>
        <Wrapper 
          // start 
          marginBottom={0} 
          marginTop={10} 
          widthStyle={"100%"}
          row
          style={{borderRadius: 20, backgroundColor: colors.lightGray, height: 50}}
        >
          <Text start black bold size={12}>
            {chave_pix.slice(0, 35)}...
          </Text>
          <CopyToClipboard copy={chave_pix} primary/>
        </Wrapper>

        <Wrapper 
          // start 
          // marginBottom={0} 
          marginTop={40} 
          widthStyle={"100%"}
        >
          <Text second size={16}>
            Pix expira em 30 minutos
          </Text>
        </Wrapper>

        <Wrapper 
          // start 
          // marginBottom={0} 
          marginTop={50} 
          widthStyle={"100%"}
        >
          <CopyToClipboard btn />
        </Wrapper>
      </Wrapper>
    </Area>
  )
}

export default Payment