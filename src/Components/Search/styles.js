import styled from "styled-components/native"
import { Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../Constants/styles"

const w= Dimensions.get("window").width

export const Container = styled.View`
    padding: 5px 10px;
    width: ${w}px;
    height: 50px;
    flex-direction: row;
    /* background-color: aliceblue; */
    justify-content: space-between;
`
export const BtnBack = styled.TouchableHighlight`
    height: 100%;
    /* flex: 1; */
    align-items: center;
    justify-content: center;
`
export const IconBack = styled(Ionicons).attrs({
    name: 'arrow-back'
})`
    color: ${colors.white};
    font-size: 28px;
`
export const Content = styled.View`
    position: relative;
    height: 100%;
    /* width: 60%; */
    flex: 3;
    background-color: #262525;
    border-radius: 5px;
    padding: 0px 10px;
    flex-direction: row;
    align-items: center;
    margin: 0px 10px;
`
export const IconSearch = styled(Feather).attrs({
    name: 'search'
})`
    color: ${colors.white};
    font-size: 24px;
    /* margin-right: 2px; */
`
export const Input = styled.TextInput.attrs({
    placeholderTextColor: colors.white_100
})`
    width: 85%;
    padding: 0px 10px;
    color: ${colors.white};
    font-size: 16px;
`
export const BtnClose = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    background-color: ${colors.dark};
    position: absolute;
    border-radius: 50px;
    right: 10px;
    align-items: center;
    justify-content: center;
`
export const IconCLose = styled(EvilIcons).attrs({
    name: 'close'
})`
    color: ${colors.white};
    font-size: 14px;
`
export const BtnSearch = styled.TouchableOpacity`
    /* flex: 1; */
    justify-content: center;
    align-items: center;
    height: 100%;
    
    /* background-color: aliceblue; */
`
export const TextSearch = styled.Text`
    color: ${colors.dourado};
    font-size: 12px;
`