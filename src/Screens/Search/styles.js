import styled from "styled-components/native"
import { Dimensions } from 'react-native'
import { colors } from "../../Constants/styles"

const w= Dimensions.get("window").width

export const Container = styled.View`
    background-color: ${colors.dark};
    flex: 1;
    width: ${w}px;
`
export const TextField = styled.Text`
    color: ${colors.dourado};
`
// export const PostArea = styled.FlatList`
//     flex: 4;
// `
// export const Divisor = styled.FlatList`
//     width: 100%;
//     height: 1px;
//     background-color: #ccc;
// `