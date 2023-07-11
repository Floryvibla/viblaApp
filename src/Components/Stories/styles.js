import styled from "styled-components/native"
import { colors } from "../../Constants/styles"

export const Container = styled.TouchableOpacity`
    width: 100px;
    height: 100%;
    /* border: 2px solid ${colors.dourado}; */
    border-radius: 15px;
    position: relative;
    margin: 0px 5px;
`
export const StoryImageBackground = styled.ImageBackground`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    /* background-color: red; */
`
export const PerfilContainer = styled.View`
    position: absolute;
    bottom: -0px;
    left: 30%;
`
export const TextArea = styled.View`
    position: absolute;
    bottom: 35px;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const TextName = styled.Text`
    color: ${colors.white};
    font-weight: bold;
    font-size: 10px;
`
   