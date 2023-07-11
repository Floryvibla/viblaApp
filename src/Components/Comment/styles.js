import styled from "styled-components/native"
import { colors } from "../../Constants/styles"

export const  Container = styled.View`
    margin-top: 10px;
    flex-direction: row;
    padding: ${({py, px}) => `${py ?? 10}px ${px ?? 10}px`};
`
export const  Left = styled.View`
    margin-right: 10px;
`
export const  Rigth = styled.View`
    flex: 1;
    /* flex-direction: row; */
`
export const  MiddleArea = styled.View`
      
`
export const  Header = styled.View`
    flex-direction: row;
    margin-bottom: 5px;
    align-items: center;
    /* justify-content: space-between; */
`
export const AreaImg = styled.View`
    width: 40px;
    height: 40px;
    background-color: ${colors.white_100};
    border-radius: 25px;
`
export const  Text = styled.Text`
    font-size: ${({size}) => size ?? '14'}px;
    color: ${({color}) => color === 'username' ? colors.white_100 : color === 'repost' ? colors.dourado : colors.white};
    margin: ${({leftMargin}) => leftMargin ? '0px 2px 0px 0px' : '0px 5px'};
    font-weight: ${({weight}) => weight ?? 'normal'};
`
export const Divisor = styled.View`
    width: 100%;
    height: 0.2px;
    background-color: #cccccc69;
    margin: 10px 0px;
`