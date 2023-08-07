import styled, { css } from "styled-components/native"
import { colors } from "../../Constants/styles"
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient"
import { PropsButtonUI } from "."


const handleBgColorGradient = ({ disabled, variant }: PropsButtonUI) => {
    if (variant === 'secondary') {
        return [colors.transparenteGray, colors.transparenteGray, colors.transparenteGray]
    }

    if (variant !== 'outline') {
        if (disabled) {
            return [colors.transparenteGray, colors.transparenteGray, colors.transparenteGray]
        }
        return [colors.goldDark, colors.goldLight, colors.goldDark]
    }

    return [colors.transparenteGold, colors.transparenteGold, colors.transparenteGold]
    
}

const handleBgColor = ({ disabled, variant }: PropsButtonUI) => {

    if (variant === 'secondary') {
        return colors.darkGray
    }

    if (variant !== 'outline') {
        if (disabled) {
            return colors.darkGray
        }
        return colors.gold
    }

    return 'transparent'
}

const handleBorder = ({ disabled, variant }: PropsButtonUI) => {
    if (variant === 'outline') {
        if (disabled) {
            return colors.darkGray
        }
        return colors.goldDark
    }
}

export const Container = styled.Pressable<PropsButtonUI>`${({ disabled, variant }) => css`
    position: relative;
    width: 90%;
    height: 50px;
    background-color: ${handleBgColor({ variant, disabled })};
    opacity: ${ disabled ? 0.3 : 1 };
    border-radius: 5px;
    border-width: ${variant === 'outline' ? 1 : 0}px;
    border-color: ${handleBorder({ variant, disabled })};
    align-items: center;
    justify-content: center;
    overflow: hidden;
`}`
export const ButtonLinearGradient = styled(LinearGradient).attrs<PropsButtonUI, LinearGradientProps>(({ disabled, variant }) => ({
    colors: handleBgColorGradient({ disabled, variant }),
    start:[0, 1],
    end:[1, 0]
}))<PropsButtonUI>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`