import styled, { css } from "styled-components/native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../../../../Constants/styles";



export const Container = styled.View`
  width: 100%;
  padding: 20px;
  gap: 20px;
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Circle = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: ${colors.goldLight};
  align-items: center;
  justify-content: center;
`;

export const ButtonPressable = styled.TouchableOpacity<{state?: boolean}>`
  padding: 10px 20px;
  border-radius: 15px;
  border-width: 1px;
  border-color: ${({ state }) => state ? colors.successDark : colors.goldDark};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;

