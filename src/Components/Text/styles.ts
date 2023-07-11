import styled from "styled-components/native"
import { colors } from "../../Constants/styles"


export type VariantTextProps = 'title' | 'subtitle' | 'body' | 'secondary' | 'follow'
export type TypeTextProps = 'danger' | 'warn' | 'success'
export type WeightTextProps = number | 'bold'

interface TextProps {
    variant: VariantTextProps
    type?: TypeTextProps
    color?: keyof typeof colors
    weight?: WeightTextProps
}

const handelSize = ({ variant }: TextProps) => {
    switch (variant) {
        case 'title':
            return '20px';
        case 'subtitle':
            return '16px';
        case 'secondary':
            return '12px';
        case 'follow':
            return '12px';
        default:
            return '14px';
    }
}

const handelWeight = ({ variant }: TextProps) => {
    switch (variant) {
        case 'title':
            return 'bold';
        case 'subtitle':
            return '400';
        default:
            return 'normal';
    }
}

const handelColor = ({ variant }: TextProps) => {
    switch (variant) {
        case 'secondary':
            return colors.darkGray;
        case 'follow':
            return colors.dark;
        default:
            return colors.white;
    }
}

const handelColorType = (type: TypeTextProps) => {
    switch (type) {
        case 'danger':
            return colors.danger;
        default:
            return colors.white;
    }
}

export const TextStyled = styled.Text<TextProps>`
    font-size: ${({ variant }) => handelSize({variant})};
    font-weight: ${({ variant, weight }) => weight ?? handelWeight({variant})};
    color: ${({ variant, type, color }) => color ? colors[color] : type ? handelColorType(type) : handelColor({variant})};
    text-align: left;
`