import React from "react";
import { TextInput, TextInputProps, ViewProps } from "react-native";
import styled, { css } from "styled-components/native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../../Constants/styles"
import { InputTextProps } from ".";





const handleBgColor = ({ isFocused, isInputOTPCompleted, isError }: InputTextProps) => {
  if (isFocused) {
    if (isError) {
      return colors.danger+25
    }
    return colors.transparenteGold
  }else {
    if (isError) {
      return colors.danger+25
    }
    return colors.transparenteGray
  }
}


export const Container = styled.View`
  /* flex-direction: row; */
  /* overflow: hidden; */
  width: 100%;
  padding: 0px 20px;
`;

export const Wrapper = styled.View<InputTextProps>`
  ${({ isFocused, isError }) => css`
    flex-direction: row;
    background-color: ${handleBgColor({isFocused, isError})};
    align-items: center;
    justify-content: space-between;
    border-width: ${(isError || isFocused) ? 1 : 0}px;
    border-color: ${isError ? colors.danger : colors.goldLight};
    border-radius: 5px;
    width: 100%;
    height: 50px;
    padding: 0px 20px;
`}`;

export const TextInputStyled = styled.TextInput<InputTextProps>`
  ${({ isFocused }) => css`
    color: ${colors.white};
    flex: 1;
    height: 100%;
  `}
`