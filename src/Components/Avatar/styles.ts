import styled from "styled-components/native"
import { colors } from "../../Constants/styles"

export const Container = styled.Pressable`
    width: 45px;
    height: 45px;
    border-radius: 25px;
    background-color: ${colors.transparenteGray};
    align-items: center;
    justify-content: center;
`
export const ImageAvatar = styled.Image`
    width: 100%;
    height: 100%;
`