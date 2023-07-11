import styled from "styled-components/native"
import { colors } from "../../Constants/styles"

export const Container = styled.Pressable`
    width: 150px;
    height: 220px;
    border-radius: 10px;
    background-color: ${colors.transparenteGray};
    align-items: center;
    justify-content: center;
    position: relative;
`
export const ImageAvatar = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`