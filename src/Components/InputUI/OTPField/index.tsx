import { NativeSyntheticEvent, TextInputKeyPressEventData, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Container, TextInputOTPCode } from './styles'
import { colors } from '../../../Constants/styles'

export type OTPInputProps = {
  OTP_LENGTH?: number,
  value?: Array<string>,
  disabled?: boolean,
  isLoading?: boolean,
  isError?: boolean,
  isSuccess?: boolean,
  isCompletedOTP?: (state: boolean) => void,
  codeOTPUser?: (code: string) => void
}

type NullableTextInput = TextInput | null;

type CodesProps = {
  index: number,
  text: string,
}

export const OTPField: React.FunctionComponent<OTPInputProps> = ({
  disabled,
  isError,
  isLoading,
  isSuccess,
  OTP_LENGTH = 6,
  isCompletedOTP,
  codeOTPUser
}) => {

  const otpArray = Array(OTP_LENGTH).fill('');
  const inputRefs = useRef<NullableTextInput[]>([]);

  const [indexsFocus, setIndexFocus] = useState<null | number>(null);
  const [codes, setCodes] = useState<CodesProps[]>([]);

  const handleFocus = (index: number) => {
    setIndexFocus(index);
  };

  const handleBlur = () => {
    setIndexFocus(null);
  };

  const onSaveValue = (text: string, index: number) => {
    const itemExistente = codes.find(item => item.index === index);

    if (itemExistente) {
      
      if (text !== '') {
        setCodes(prevState => {
          const newList = prevState.map(item => {
            if (item.index === index) {
              return {...item, text}
            }
            return item
          })
          return newList
        });
      }else {
        const newList = codes.filter(item => item.index !== index);
        setCodes(newList);
      }
    } else {
      // Adiciona um novo item à lista
      if (text !== '') {
        const newItem: CodesProps = { index, text };
        setCodes([...codes, newItem]);
        
      }
    }
    
  }

  const handleChange = (text: string, index: number ) => {
    onSaveValue(text, index);
    
    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus()
    }

    return inputRefs?.current[index - 1]?.focus()
  }

  const handleBackspace = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    const { nativeEvent } = event

    if (nativeEvent.key === 'Backspace') {
      handleChange('', index)
    }
  }
  
  const handleCompletedInput = (index: number) => {
    return codes.filter(code => code.index === index).length > 0
  }

  useEffect(() => {
    if (codes.length === 6) {
      const codeString = codes.map(code => code.text).join('')
      if (isCompletedOTP) {
        isCompletedOTP(true) 
      }
      codeOTPUser && codeOTPUser(codeString)
      handleBlur()
    }else {
      isCompletedOTP && isCompletedOTP(false)
    }
  }, [codes])
  

  return (
    <Container>
      {otpArray.map((item: any, index) => (
        <TextInputOTPCode 
          key={index}
          autoFocus={index === 0}
          maxLength={1}
          keyboardType='decimal-pad'
          selectionColor={colors.white}
          editable={!disabled}
          isError={isError}
          isSuccess={isSuccess}
          isLoading={isLoading}
          isFocused={indexsFocus === index}
          isInputOTPCompleted={handleCompletedInput(index)}
          testID={`OTPInput-${index}`}
          onFocus={() => handleFocus(index)}
          onBlur={handleBlur}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={event => handleBackspace(event, index)}
          contextMenuHidden
          selectTextOnFocus
          ref={(ref) => {
            if (ref && !inputRefs.current.includes(ref)) {
              inputRefs.current = [...inputRefs.current, ref]
            }
          }}
        />
      ))}
    </Container>
  )
}