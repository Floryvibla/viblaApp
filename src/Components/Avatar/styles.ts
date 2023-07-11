import styled from "styled-components/native"
import { colors } from "../../Constants/styles"

export const Container = styled.Pressable`
    width: 35px;
    height: 35px;
    border-radius: 25px;
    background-color: ${colors.transparenteGray};
    align-items: center;
    justify-content: center;
`
export const ImageAvatar = styled.Image`
    width: 25px;
    height: 25px;
`