import React from "react";
import { TextInput, TextInputProps, ViewProps } from "react-native";
import styled, { css } from "styled-components/native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { InputTextProps } from "..";
import { colors } from "../../../Constants/styles";


type HandleBgColor = {
  isFocused: boolean,
  isInputOTPCompleted: boolean
}

const handleBgColor = ({ isFocused, isInputOTPCompleted, isError }: InputTextProps) => {
  if (isFocused) {
    return colors.transparenteGold
  }else if (isInputOTPCompleted) {
    if (isError) {
      return colors.danger
    }
    return colors.goldDark500
  }

  return colors.transparenteGray
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  /* overflow: hidden; */
  width: 100%;
  padding: 0px 20px;
`;


export const TextInputOTPCode = styled.TextInput.attrs<InputTextProps, InputTextProps>({

})`
  ${({ isFocused, isInputOTPCompleted, isError, isLoading, isSuccess }) => css`
    color: ${colors.white};
    font-size: 30px;
    font-weight: bold;
    background-color: ${handleBgColor({ isFocused, isInputOTPCompleted, isError, isLoading })};
    align-items: center;
    justify-content: space-between;
    border-width: ${isFocused ? 1 : 0}px;
    border-color: ${colors.goldLight};
    border-radius: 5px;
    width: 50px;
    height: 60px;
    text-align: center;
    padding: 5px;
    opacity: ${isLoading ? 0.4 : 1};
  `}
`