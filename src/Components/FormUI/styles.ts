import styled, { css } from "styled-components/native"
import { colors } from "../../Constants/styles";


export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const FormKeyBoard = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: "center";
  background-color: ${colors.dark} ;
  padding: 20px 0px;

`
export const Wrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const LogoImage = styled.Image`
  width: 150px;
  height: 80px;
`