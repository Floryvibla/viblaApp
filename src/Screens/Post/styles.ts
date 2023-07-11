import styled from "styled-components/native"
import { colors } from "../../Constants/styles"

export const Container = styled.View`
    background-color: ${colors.dark};
    flex: 1;
    position: relative;
`
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-color: ${colors.transparenteGray};
    padding: 10px 20px;
`
export const Wrapper = styled.View`
    padding: 10px 20px;
    flex: 1;
    position: relative;
`
export const Footer = styled.View`
    /* z-index: 50; */
    padding: 10px 20px;
    border-top-width: 1px;
    border-color: ${colors.transparenteGray};
`
export const AreaPreviewMedia = styled.View`
    padding: 20px 0px ;
    gap: 5px;
    flex-direction: row;
`