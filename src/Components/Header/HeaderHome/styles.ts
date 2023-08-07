import styled, { css } from "styled-components/native"
import { colors } from "../../../Constants/styles";


export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 10px 20px;
  /* border-bottom-width: 1px; */
  border-color: ${colors.lightGray+39};
`

export const PressableStyled = styled.Pressable`
  height: 100%;
  justify-content: center;
`;

export const Wrapper = styled.View<{flex?: number}>`
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 100%;
  gap: 10px;
`
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`
export const IsNewMsg = styled.View`
  width: 5px;
  height: 5px;
  background-color: ${colors.dourado};
  border-radius: 50px;
  position: absolute;
  top: 2px;
  right: 4px;
`