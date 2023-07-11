import { Dimensions, Platform } from 'react-native'
import styled from "styled-components/native"
import { colors } from "../../Constants/styles"
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons';


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export const  Container = styled.View`
    position: relative;
    background-color: ${colors.dark};
    flex: 1;
    /* padding: 0px 20px; */
`
export const  Wrapper = styled.View`
    position: relative;
    /* background-color: ${colors.dark}; */
    flex: 1;
    
`
export const  AreaInput = styled.View`
    border-top-width: 1px;
    border-color: ${colors.transparenteGray};
    width: ${WIDTH}px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const  InputComment = styled.TextInput`
    border-radius: 20px;
    /* width: 100%; */
    flex: 1;
    height: 40px;
    padding: ${Platform.OS === 'ios' ? "10px" : "0px 10px"};
    background-color: #cecece51;
    color: ${colors.white};
    justify-content: center;
`
export const Dropdown = styled.ScrollView`
    position: absolute;
    top: 0px;
    z-index: 10;
    width: ${WIDTH / 1}px;
    height: ${({drop}) => drop ? HEIGHT / 3 : HEIGHT / 8}px;
    background-color: ${colors.dark};
    /* justify-content: center; */

`
export const Area = styled.View`
    /* justify-content: center; */
    align-items: flex-start;
    width: 100%;
    padding: 0px 20px 10px 20px;
    /* background-color: aliceblue; */
`
export const Text = styled.Text`
    color: ${colors.white_100};
    padding: 0px 5px;
    /* text-align: center; */
    /* width: 90%; */
`
export const Icon = styled(MaterialIcons).attrs({
    // color: colors.white_100,
    // size: 25,
})
`
    
    text-align: center;
    /* background-color: red; */
    align-items: center;
    height: 100%;
    justify-content: center;
    margin-top: 10px;
    margin-left: 10px;
    /* width: 90%; */
`
export const Divisor = styled.TouchableHighlight`
    width: 100%;
    height: ${({drop}) => drop ? 25 : 20}px;;
    background-color: ${colors.dark};
    position: absolute;
    top: ${({drop}) => drop ? HEIGHT / 3.3 : HEIGHT /10}px;
    z-index: 10;
    justify-content: center;
    align-items: center;
`
export const LinearGradientArea= styled(LinearGradient).attrs({
    colors: ['transparent', 'transparent', colors.dourado]
})`
    /* position: absolute; */
    height: ${({drop}) => drop ? HEIGHT / 3 : HEIGHT / 8}px;
    z-index: 10;
`