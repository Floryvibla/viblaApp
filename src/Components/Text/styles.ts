import styled from "styled-components/native"
import { colors } from "../../Constants/styles"
import { TextProps as TextPropsRN } from 'react-native'


export type VariantTextProps = 'title' | 'subtitle' | 'body' | 'secondary' | 'follow'
export type TypeTextProps = 'danger' | 'warn' | 'success'
export type WeightTextProps = number | 'bold'

export type TextStyledProps = TextPropsRN & {
    variant?: VariantTextProps
    type?: TypeTextProps
    color?: keyof typeof colors
    weight?: WeightTextProps
    align?: 'left' | 'center' | 'right'
}

const handelSize = ({ variant }: TextStyledProps) => {
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

const handelWeight = ({ variant }: TextStyledProps) => {
    switch (variant) {
        case 'title':
            return 'bold';
        case 'subtitle':
            return '400';
        default:
            return 'normal';
    }
}

const handelColor = ({ variant }: TextStyledProps) => {
    switch (variant) {
        case 'secondary':
            return colors.darkGray;
        case 'follow':
            return colors.white_100;
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

export const TextStyled = styled.Text<TextStyledProps>`
    font-size: ${({ variant }) => handelSize({variant})};
    font-weight: ${({ variant, weight }) => weight ?? handelWeight({variant})};
    color: ${({ variant, type, color }) => color ? colors[color] : type ? handelColorType(type) : handelColor({variant})};
    text-align: ${({ align }) => align ?? 'left'};
`