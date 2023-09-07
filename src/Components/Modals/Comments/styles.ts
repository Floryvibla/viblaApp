import styled from "styled-components/native"
import { Dimensions } from 'react-native'
import { colors } from "../../../Constants/styles"

const WIDTH= Dimensions.get("window").width
const HEIGHT= Dimensions.get("window").height

export const Container = styled.View`
    width: ${WIDTH}px;
    padding: 10px 20px;
    /* border: 1px solid red; */
`
