import { Dimensions } from "react-native"
import styled from "styled-components/native"
import { colors } from "../../Constants/styles"

const { width, height } = Dimensions.get('window')

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    border-bottom-width: ${({last}) => last ? 0 : 1}px;
    border-color: #cecece59;
    padding: 10px 20px;
`
export const TextSelect = styled.Text`
    color: ${colors.white};
    font-size: 16px;
`
export const Drop = styled.View`
    width: 180px;
    /* padding: 10px 0px; */
    background-color: ${colors.dark_second};
    position: absolute;
    top: 40px;
    /* z-index: 50; */
    border-radius: 8px;
    left: ${({center}) => center ? width / 3.5 : 10}px;
`