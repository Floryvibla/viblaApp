import styled from "styled-components/native"
import { colors } from "../../Constants/styles"

// interface PropsCont

// export const StoryContainer = styled.FlatList`
//     padding: 5px;
//     /* background-color: antiquewhite; */
//     flex: 1;
//     /* border-bottom: 2px solid #ccc; */
//     margin-bottom: 20px;
// `
// export const PostArea = styled.FlatList`
//     flex: 4;
//     padding: 20px 0px;
// `
export const Divisor = styled.View`
    width: 100%;
    height: 2px;
    background-color: ${colors.dark+59};
`
export const Container = styled.View`
    flex: 1;
    background-color: ${colors.dark};
    position: relative;
`