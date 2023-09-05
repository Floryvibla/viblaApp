import styled from "styled-components/native"
import { colors } from "../../Constants/styles"
import { Dimensions, Platform } from "react-native"
import { BlurView } from 'expo-blur';
import { css } from "styled-components";

const { height, width } = Dimensions.get('window')

interface WrapperImageprops {
    width?: number
    height?: number
}

interface Props {isSelfPost?: boolean}

export const Container = styled.View<Props>`${({ isSelfPost }) => css`
    width: 100%;
    position: relative;
    ${isSelfPost && css `
        border-radius: 20px;
    `}
`}   
`
export const Wrapper = styled.View`
  width: 100%;
  border-color: ${colors.transparenteGray};
  border-bottom-width: 0.2px;
  padding-bottom: 20px;
  margin-bottom: 10px;
`
export const AreaText = styled.Pressable<Props>`${({ isSelfPost }) => css`
    padding: 0px 10px 0px 20px;
    width: 100%;
    ${isSelfPost && css `
        flex: 1;
        margin-top: 10px;
    `}
`}
`
export const ContainerMedia = styled.ScrollView`
    
`
export const ScrollViewAreaBlur = styled.View`
    
`

export const WrapperMedia = styled.Pressable`
    border-radius: 10px;
    width: ${width / 1.22}px;
    /* background-color: ${colors.darkGray}; */
`

export const WrapperImage = styled.View<WrapperImageprops>`${({ width: widthImg, height: heightImg}) => css`
    width: 100%;
    height: ${heightImg ? heightImg / 2 : 270}px;
    border-radius: 10px;
    background-color: ${colors.darkGray};
`}
`

export const ImageStyled = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`
export const ImageForBlurStyled = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`
export const BlurViewContainer = styled(BlurView)`
    position: 'absolute';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
export const Content = styled.View<{isSelfPost: boolean}>`${({ isSelfPost }) => css`
    width: 100%;
    padding: 20px 0px;
    /* background-color: red; */
    ${isSelfPost && css `
        height: 100%;
        justify-content: space-between;
        border-radius: 20px;
        
        padding-bottom: ${Platform.OS === 'ios' ? 50 : 60}px
    `}
`}  
`
export const ContainerBlurView = styled.View<{isSelfPost: boolean}>`${({ isSelfPost }) => css`
    ${isSelfPost && css `
        border-radius: 20px;
        overflow: hidden
    `}
`}  
`