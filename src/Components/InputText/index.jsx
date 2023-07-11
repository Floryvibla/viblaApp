import { Platform, View } from 'react-native'
import React from 'react'
import { Text, TextInput, Wrapper } from '../styles'
import { useRef } from 'react'
import { colors } from '../../Constants/styles'

const InputText = ({ placeholder, onChangeText, value, returnKeyType, label,  onSubmitEditing, multiline, numberOfLines, ref, secureTextEntry, mb, mt, countText }) => {

    const inputRef = useRef()

  return (
    <Wrapper marginTop={mt ? 10 : 0} marginBottom={mb ? 10 : 0}>
      {label && 
        <Wrapper marginTop={0} marginBottom={0} align={"flex-start"} widthStyle={"90%"}>
          <Text size={14}>{label}</Text>
        </Wrapper>
      }
      <Wrapper marginTop={0} marginBottom={0}>
        <TextInput 
          placeholder={placeholder}
          returnKeyType={returnKeyType}
          onSubmitEditing={() => inputRef.current.focus()}
          ref={ref ?? inputRef}
          secureTextEntry={secureTextEntry}
          // marginBottom={marginBottom ?? 0}
          marginTop={label ? 10 : 0 }
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          numberOfLines={numberOfLines}
          height={multiline ? 80 : 50}
          maxLength={countText}
          // scrollEnabled={false}
          // blurOnSubmit={false}
        />
      </Wrapper>
      {countText && 
        <Wrapper style={{paddingHorizontal: 10}} marginTop={0} marginBottom={0} align={"flex-end"} widthStyle={"90%"}>
          <Text color={countText === value?.length ? colors.danger : colors.darkGray} size={14}>{countText - value?.length}</Text>
        </Wrapper>
      }
    </Wrapper>
  )
}

export default InputText