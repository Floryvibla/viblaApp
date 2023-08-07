import React, { useEffect, useState } from 'react'
import dataLanguage from "../../../mocks/language/ptBR.json"
import { Container, Wrapper } from './styles'
import TextUI from '../../../components/Text'
import { FormUI } from '../../../components/FormUI'
import { OTPField } from '../../../components/InputUI/OTPField'
import { useNavigate } from '../../../hooks/useNavigate'
import Loading from '../../../components/Loading'
import { Alert } from 'react-native'
import ButtonUI from '../../../components/ButtonUI'
import { useFetch } from '../../../hooks/fetchs'

export const CodeInvitation = () => {

  const realCode = '243243'
  const { navigatePublic } = useNavigate()

  const [code, setCode] = useState<string | null>(null)
  const [isCompletedCode, setIsCompletedCode] = useState<boolean>(false)

  const { dataFetch, getFetch } = useFetch()

  const { loading, error, success } = dataFetch

  const verifyCode = (code: string | number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (code === realCode) {
          resolve({ success: true})
        } else {
          reject('Codigo invalido ou utilisado!')
        }
      }, 2000);
    })
  }

  console.log("dataFetch: ", dataFetch?.data?.data);
  


  useEffect(() => {
    if (isCompletedCode) {
      getFetch({url: `code-invites?filters[id_invite][$eq]=${code}`})
    }
    console.log("isCompletedCode: ", isCompletedCode);
    
  }, [isCompletedCode])

  useEffect(() => {
    if (dataFetch?.data?.data?.length > 0) {
      navigatePublic.navigate('signup')
    }
  
    if (dataFetch?.data?.data?.length === 0) {
      Alert.alert('', 'Código invalido ou expirado')
    }
    
  }, [dataFetch])
  

  return (
    <Container>
      {loading && <Loading screen />}
      <FormUI variant='auth' showHeaderBack>
        <Wrapper style={{paddingHorizontal: 30}}>
          <TextUI color='darkGray' variant='subtitle' align='center'>{dataLanguage.text_invitation_resume}</TextUI>
        </Wrapper>
        <OTPField  
          isCompletedOTP={setIsCompletedCode} 
          codeOTPUser={setCode} 
          isLoading={loading}
        />
      </FormUI>
    </Container>
  )
}
