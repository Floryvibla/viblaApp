import { Dimensions } from "react-native"
import styled from "styled-components/native"
import { colors } from "../../Constants/styles"

const { width, height } = Dimensions.get('window')

export const Container = styled.Pressable`
    flex-direction: row;
    /* flex: 1; */
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
    width: ${width}px;
    height: 50px;
    padding: 10px;
    border-bottom-width: 1px;
    border-color: #cecece15;
`
export const Touche = styled.TouchableOpacity`
    /* padding-left: 20px; */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Left = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
    position: relative;
    /* background-color: red; */
`
export const IconNotif = styled.TouchableOpacity`
    position: relative;
    /* padding-left: 10px; */
    transform: ${({transform}) => transform ? "rotate(20deg)" : "rotate(0deg)"};
    margin-left: ${({margin}) => margin ? "20px" : "0px"};
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
    /* background-color: yellow; */
    flex: 2;
    /* flex-direction: row; */
`
export const LogoImage = styled.Image`
    width: 90px;
    height: 30px;
`
export const Right = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex: 1;
`
export const Title = styled.Text`
    color: ${colors.white_100};
    font-size: 18px;
    /* margin-right: 10px; */
    /* font-weight: 900; */
`