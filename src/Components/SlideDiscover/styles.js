import styled from "styled-components/native"
import { Dimensions } from 'react-native'
import { colors } from "../../Constants/styles"

const WIDTH= Dimensions.get("window").width
const HEIGHT= Dimensions.get("window").height

export const Container = styled.View`
    width: ${WIDTH}px;
    padding: 10px 20px;
    /* border: 1px solid red; */
`
export const HeaderArea = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`
export const IconArea = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 25px;
    border: 1px solid rgba(230, 230, 230, 0.5);
    justify-content: center;
    align-items: center;
`
export const CenterArea = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 10px;
`
export const AreaRight = styled.TouchableOpacity`
`
export const Text = styled.Text`
    color: ${({color}) => color ?? colors.white};
    font-size: ${({size}) => size ?? '14'}px;
    font-weight: ${({weight}) => weight ?? 'normal'};
    text-align: center;
`
export const ScrollArea = styled.ScrollView`
`
// export const Image = styled.Image`
//     width: ${WIDTH}px;
//     height: ${HEIGHT * 0.25}px;
// `
export const AreaImg = styled.TouchableOpacity`
    width: 90px;
    height: 100px;
    background-color: ${colors.white_100};
    margin: 0px 1px;
    /* border: 1px solid ${colors.white}; */
`
export const Img = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
export const AreaMore = styled.TouchableOpacity`
    width: 90px;
    height: 100px;
    justify-content: center;
    align-items: center;
`