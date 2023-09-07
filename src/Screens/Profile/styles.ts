import styled from "styled-components/native"
import { colors } from "../../Constants/styles"

export const StoryContainer = styled.FlatList`
    padding: 5px;
    /* background-color: antiquewhite; */
    flex: 1;
    /* border-bottom: 2px solid #ccc; */
`
export const PostArea = styled.FlatList`
    flex: 4;
`
export const Divisor = styled.FlatList`
    width: 100%;
    height: 1px;
    background-color: #ccc;
`
export const Container = styled.SafeAreaView`
    background-color: ${colors.dark};
    flex: 1;
`