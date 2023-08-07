import styled, { css } from "styled-components/native"


export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #cecece15;
`;

export const PressableStyled = styled.Pressable`
  height: 100%;
  justify-content: center;
`;

export const Wrapper = styled.View<{flex?: number}>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
`
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`