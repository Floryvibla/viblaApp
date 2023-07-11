import styled from "styled-components/native"
import { colors } from "../../../Constants/styles"
import { Platform } from "react-native"

interface ContentProps {
    bt?: boolean
}

Platform

export const Container = styled.View`
    height: 100%;
    width: 100%;
    padding: ${Platform.OS === 'android' ? '20px' : '20px 20px 50px 20px'};
    gap: 10px;
`
export const Wrapper = styled.View`
    width: 100%;
    background-color: ${colors.dark_second};
    border-radius: 10px;
`
export const Content = styled.Pressable<ContentProps>`
    border-top-width: ${({ bt }) => !bt ? 1 : 0}px;
    border-top-color: ${colors.transparenteGray};
    padding: 15px 10px;
`