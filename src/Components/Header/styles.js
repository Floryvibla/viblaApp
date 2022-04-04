import styled from "styled-components/native"
import { colors } from "../../Constants/styles"

export const Container = styled.View`
    flex-direction: row;
    /* flex: 1; */
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
    width: 96%;
    height: 50px;
    padding: 10px;
`
export const Touche = styled.TouchableOpacity`
    padding-left: 10px;
`
export const Left = styled.View`
    flex-direction: row;
    align-items: center;
`
export const IconNotif = styled.TouchableOpacity`
    position: relative;
    padding-left: 10px;
    transform: rotate(20deg);
`
export const NewMsg = styled.View`
    width: 5px;
    height: 5px;
    background-color: ${colors.dourado};
    border-radius: 50px;
    position: absolute;
    top: 2px;
    right: 4px;
`
export const Center = styled.View`
    justify-content: center;
    align-items: center;
    /* flex-direction: row; */
`
export const LogoImage = styled.Image`
    width: 90px;
    height: 100%;
`
export const Right = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`