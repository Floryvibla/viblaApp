import styled, { css } from "styled-components/native"
import { colors } from "../../Constants/styles"
import { Dimensions } from "react-native"
import { BlurView } from 'expo-blur';

const { height, width } = Dimensions.get('window')

export type VideoPlayerPropsStyled = {
    isPreview?: boolean
    height?: number
}

export const Container = styled.View<VideoPlayerPropsStyled>`${({ isPreview, height }) => css`
    width: 100%;
    height: ${height}px;
    position: relative;
    align-items: center;
    justify-content: center;
`}`

export const WrapperVideo = styled.View<VideoPlayerPropsStyled>`${({ isPreview, height }) => css`
    width: 100%;
`}`

export const BoxIcon = styled.Pressable<VideoPlayerPropsStyled>`${({ isPreview }) => css`
    border-radius: 25px;
    width: 30px;
    height: 30px;
    background-color: ${colors.transparenteGray};
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 50;
    align-items: center;
    justify-content: center;
`}`