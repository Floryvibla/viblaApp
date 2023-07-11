import styled from "styled-components/native"
import { colors } from "../../Constants/styles"
import { Camera } from 'expo-camera'
import { Dimensions } from "react-native"

const { width, height } = Dimensions.get('window')

// console.log(height);

export const Text = styled.Text`
    color: ${({color}) => color ?? colors.white_100};
    font-size: ${({size}) => size ?? 18}px;
`
export const Area = styled.View`
    flex: ${({flex}) => flex ?? 1};
    background-color: ${({bgColor}) => bgColor ?? "transparent"};
    position: ${({position}) => position ?? "relative"};
`
export const BottomArea = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 1%;
`
export const PreviewGaleria = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
    border-radius: 10px;
    border-width: 2px;
    border-color: ${colors.white_100};
    /* margin-bottom: 10px; */
`
export const BoxSelect = styled.TouchableOpacity`
    /* width: ${({width}) => width ?? 100}px; */
    /* height: 40px; */
    padding: ${({padding}) => padding ?? "10px 15px"};
    background-color: ${({active}) => active ? colors.white : "transparent"};
    margin-right: 5px;
    border-radius: 20px;
    
`
export const AreaBox = styled.FlatList`
    /* flex: ${({flex}) => flex ?? 1}; */
    width: 250px;
    position: ${({position}) => position ?? "absolute"};
    bottom: ${({bottom}) => bottom ?? height >= 800 ? 5 : 3}%;
    left: ${({left}) => left ?? "20%"};
    /* flex-direction: row; */
`

export const CameraArea = styled(Camera)`
    flex: ${({flex}) => flex ?? 1};
`
export const CameraBox = styled.View`
    width: 100%;
    align-items: flex-end;
    padding: 5%;
`
export const Button = styled.TouchableOpacity`
    
`