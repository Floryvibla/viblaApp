import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, NativeSyntheticEvent, Pressable, TextInput, TextInputKeyPressEventData, TextInputProps, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, TextInputStyled, Wrapper } from './styles'
import { colors } from '../../Constants/styles';
import TextUI from '../Text';


export interface InputTextProps extends TextInputProps {
  isFocused?: boolean
  onSubmit?: () => void;
  nextInputRef?: React.RefObject<TextInput>;
  index?: number;
  isInputOTPCompleted?: boolean
  isLoading?: boolean,
  isError?: any,
  isSuccess?: boolean,
}

const TextInputUI = ({
  secureTextEntry,
  isError,
  onSubmit,
  nextInputRef,
  ...rest
}: InputTextProps) => {

  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [notShowSecureTextEntry, setNotShowSecureTextEntry] = useState(secureTextEntry);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSecureTextEntry = () => {
    setNotShowSecureTextEntry(!notShowSecureTextEntry)
  };

  const handleKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (event.nativeEvent.key === 'Enter') {
      if (onSubmit) {
        onSubmit();
      }
      if (nextInputRef && nextInputRef.current) {
        nextInputRef.current.focus();
      } else {
        Keyboard.dismiss();
      }
    }
  };

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [isFocused]);

  return (
    <Container>
      <Wrapper isError={isError} isFocused={isFocused}>
        <TextInputStyled 
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={colors.white_100+79}
          secureTextEntry={notShowSecureTextEntry}
          onSubmitEditing={onSubmit}
          onKeyPress={handleKeyPress}
          {...rest}
        />
        {secureTextEntry && (
          <Pressable onPress={handleSecureTextEntry}>
            <MaterialCommunityIcons 
              name={notShowSecureTextEntry ? "eye-outline" : "eye-off-outline"} 
              color={colors.white_100} 
            />
          </Pressable>
        )}
      </Wrapper>
      {isError && (
        <View style={{marginTop: 5, paddingLeft: 10}}>
          <TextUI color='danger'>{isError}</TextUI>
        </View>
      )}
    </Container>
  )
}

export default TextInputUI