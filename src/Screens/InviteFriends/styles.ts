import styled from "styled-components/native"
import { colors } from "../../Constants/styles"
import {
    Canvas,
    Fill,
} from "@shopify/react-native-skia";
import { Dimensions, TouchableOpacityProps } from "react-native";

const { height: H, width: W } = Dimensions.get('window')

export const Container = styled.View`
    flex: 1;
    position: relative;
`
export const Wrapper = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
`
export const Content = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`
export const ImageProfile = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    position: absolute;
    top: -60px;
`
export const AreaProfile = styled.View`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    position: absolute;
    top: -60px;
    background-color: ${colors.transparenteGold};
`
export const ImageQrcode = styled.Image`
    width: 180px;
    height: 180px;
`

export const BackdropBlurStyled = styled.View`
    width: ${W / 1.5}px;
    height: 50%;
    border-radius: 20px;
    background-color: #ffffff19;
    position: relative;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`
export const CanvasStyled = styled(Canvas)`
    flex: 1;
    background-color: ${colors.dark};
`

export const ButtonArea = styled.View`
    position: absolute;
    bottom: 5%;
    width: 100%;
    align-items: center;
    justify-content: center;
`
export const ButtonTouchable = styled.TouchableOpacity<TouchableOpacityProps>`
    width: 80%;
    padding: 20px 0px;
    justify-content: center;
    align-items: center;
    background-color: ${({ disabled }) => !disabled ? colors.transparenteGold : colors.transparenteGray};
    border-radius: 50px;
`