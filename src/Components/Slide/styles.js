import styled from "styled-components/native"
import { Dimensions } from 'react-native'
import { colors } from "../../Constants/styles"

const WIDTH= Dimensions.get("window").width
const HEIGHT= Dimensions.get("window").height

export const Container = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT * 0.25}px;
`
export const ScrollArea = styled.ScrollView`
`
export const Image = styled.Image`
    width: ${WIDTH}px;
    height: ${HEIGHT * 0.25}px;
`
export const DotArea = styled.View`
    position: absolute;
    bottom: 0;
    flex-direction: row;
    align-self: center;
`
export const Text = styled.Text`
    color: ${({active}) => active ? colors.dourado : colors.white_100};
    margin: 3px;
    font-size: 8px;
`