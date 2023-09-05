import { Dimensions, Platform } from 'react-native'
import styled from "styled-components/native"
import { colors } from "../../Constants/styles"


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export const  Container = styled.View`
    position: relative;
    width: ${WIDTH * 0.93 - 5}px;
    margin: 0px 2.5px;
    padding: ${Platform.OS === 'ios' ? '60px 0px 20px 0px' : '0px'};
`
export const  Wrapper = styled.View`
    position: relative;
    background-color: ${colors.transparenteGray};
    flex: 1;
    width: 100%;
    border-radius: 20px;
    justify-content: flex-start;
    align-items: center;
`