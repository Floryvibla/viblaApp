import styled from "styled-components/native"
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from "../Constants/styles"
import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get('window')
const WIDTH = width

export const Text = styled.Text`
    color: ${({color, second, black, sub, gold}) => gold ? colors.gold : sub ? colors.darkGray : black ? colors.dark : second ? color ? color : colors.darkGray : color ?? colors.white_100};
    font-size: ${({size, second}) => second ? size ?? 15 : size ?? 18}px;
    font-weight: ${({weight, bold}) => bold ? "bold" : weight ?? 'normal'};
    text-align: ${({align, start, end}) => end ? "right" : start ? "left" : align ?? 'center'};
    margin-top: ${({mt}) => mt ?? "0"}px;
    margin-bottom: ${({mb}) => mb ?? "0"}px;
    margin-left: ${({ml}) => ml ?? "0"}px;
    margin-right: ${({mr}) => mr ?? "0"}px;
`
export const AreaFormKeyBoard = styled.KeyboardAvoidingView`
    flex: 1;
    /* justify-content: ${({justify}) => justify ?? "center"}; */
    align-items: ${({align}) => align ?? "center"};
    flex-direction: ${({direction}) => direction ?? "column"};
    margin-top: ${({marginTop}) => marginTop ?? "0"}px;
    margin-bottom: ${({marginBottom}) => marginBottom ?? "0"}px;
    margin-left: ${({marginLeft}) => marginLeft ?? "0"}px;
    margin-right: ${({marginRight}) => marginRight ?? "0"}px;
    background-color: #000 ;
`
export const Wrapper = styled.View`
    width: ${({ width, widthStyle }) => widthStyle ? widthStyle : width ? width > 10 ? WIDTH+"px" : (WIDTH / width)+"px" : WIDTH+"px"};
    justify-content: ${({justify, between, initial, end, start, center}) => initial ?  center ? "center" : "flex-start" : justify ? justify : between ? "space-between" : "center"};
    align-items: ${({align, initial, start, end, center}) => end ? 'flex-end' : start ? "flex-start" : initial ? center ? "center" : "flex-start" : align ?? "center"};
    flex-direction: ${({direction, row, initial, center}) => initial ? row ? "row" : "column" : direction ? direction : row ? "row" : "column"};
    margin-top: ${({marginTop, mt, initial}) => initial ? 0 : marginTop ?? "20"}px;
    margin-bottom: ${({marginBottom, initial}) => initial ? 0 : marginBottom ?? "20"}px;
    margin-left: ${({marginLeft}) => marginLeft ?? "0"}px;
    margin-right: ${({marginRight}) => marginRight ?? "0"}px;
    position: ${({position, initial}) => position ?? "relative"}
    /* background-color: red; */
`
export const Area = styled.View`
    /* width: ${({width}) => width ?? 100}%; */
    margin-top: ${({marginTop}) => marginTop ?? "0"}px;
    margin-bottom: ${({marginBottom}) => marginBottom ?? "0"}px;
    margin-left: ${({marginLeft}) => marginLeft ?? "0"}px;
    margin-right: ${({marginRight}) => marginRight ?? "0"}px;
    justify-content: ${({justify, initial}) => initial ? "flex-start" : "center"};
    align-items: ${({align, initial}) => initial ? "flex-start" : "center"};
    flex-direction: ${({direction}) => direction ?? "column"};
    background-color: ${({bgColor}) => bgColor ?? "transparent"};
    padding: ${({paddingHorizontal}) => paddingHorizontal ? `0px ${paddingHorizontal}px` : "0px"};
`
export const ScrollArea = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`

`
export const Touch = styled.Pressable`
    width: ${({width}) => width ?? 100}%;
    justify-content: ${({justify}) => justify ?? "center"};
    align-items: ${({align}) => align ?? "center"};
    flex-direction: ${({direction}) => direction ?? "column"};
    margin-top: ${({marginTop}) => marginTop ?? "20"}px;
    margin-bottom: ${({marginBottom}) => marginBottom ?? "20"}px;
    margin-left: ${({marginLeft}) => marginLeft ?? "0"}px;
    margin-right: ${({marginRight}) => marginRight ?? "0"}px;
    /* background-color: red; */
`
export const ButtonTouch = styled.Pressable`
    /* background-color: red; */
    /* width: 100%; */
    height: 100%;
    justify-content: ${({justify}) => justify ?? "center"};
    align-items: ${({align}) => align ?? "center"};
`
export const ButtonPressable = styled.Pressable`
`
export const ClickPressable = styled.Pressable`
    /* background-color: red; */
    /* width: 100%; */
    /* height: 100%; */
    flex-direction: ${({direction}) => direction ?? "column"};
    margin-top: ${({marginTop}) => marginTop ?? "20"}px;
    margin-bottom: ${({marginBottom}) => marginBottom ?? "20"}px;
    margin-left: ${({marginLeft}) => marginLeft ?? "0"}px;
    margin-right: ${({marginRight}) => marginRight ?? "0"}px;
    justify-content: ${({justify}) => justify ?? "center"};
    align-items: ${({align}) => align ?? "center"};
`
export const AreaRow = styled.View`
    width: ${({width}) => width ?? 100}%;
    height: ${({height}) => height ? height+"%" : 100+"%"};
    justify-content: ${({justify}) => justify ?? "flex-start"};
    align-items: ${({align}) => align ?? "flex-start"};
    flex-direction: ${({direction}) => direction ?? "row"};
    margin-top: ${({marginTop}) => marginTop ?? "0"}px;
    margin-bottom: ${({marginBottom}) => marginBottom ?? "0"}px;
    margin-left: ${({marginLeft}) => marginLeft ?? "0"}px;
    margin-right: ${({marginRight}) => marginRight ?? "0"}px;
    padding-top: ${({paddingTop}) => paddingTop ?? "0"}px;
    padding-bottom: ${({paddingBottom}) => paddingBottom ?? "0"}px;
    padding-left: ${({paddingLeft}) => paddingLeft ?? "0"}px;
    padding-right: ${({paddingRight}) => paddingRight ?? "0"}px;
    padding: ${({paddingHorizontal}) => paddingHorizontal ? `0px ${paddingHorizontal}px` : "0px"};
    background-color: ${colors.dark};
    z-index: 10
`
export const Button = styled.Pressable`
    width: ${({width}) => width ?? 90}%;
    height: ${({width}) => width ?? 45}px;
    justify-content: ${({justify}) => justify ?? "center"};
    align-items: ${({align}) => align ?? "center"};
    flex-direction: ${({direction}) => direction ?? "column"};
    background-color: ${({bgColor}) => bgColor ?? colors.goldDark500};
    border-radius: ${({radius}) => radius ?? 20}px;
    margin-top: ${({marginTop}) => marginTop ?? "10"}px;
    margin-bottom: ${({marginBottom}) => marginBottom ?? "10"}px;
    margin-left: ${({marginLeft}) => marginLeft ?? "0"}px;
    margin-right: ${({marginRight}) => marginRight ?? "0"}px;
    opacity: ${({opacity}) => opacity ?? 1};
`
export const ButtonLinearGradient = styled(LinearGradient).attrs(({color1, color2, notUse}) => ({
    colors: [
        notUse ? colors.darkGray : colors.gold, 
        notUse ? colors.darkGray : "transparent", 
        notUse ? colors.darkGray : colors.goldDark
    ],
    start: [0, 1],
    end: [1, 0]
}))`
    width: ${({width}) => width ?? 100}%;
    height: ${({width}) => width ?? 100}%;
    justify-content: ${({justify}) => justify ?? "center"};
    align-items: ${({align}) => align ?? "center"};
    /* flex-direction: ${({direction}) => direction ?? "column"}; */
    /* background-color: ${({bgColor}) => bgColor ?? colors.goldDark500}; */
    border-radius: ${({radius}) => radius ?? 20}px;
    margin-top: ${({marginTop}) => marginTop ?? "0"}px;
    margin-bottom: ${({marginBottom}) => marginBottom ?? "0"}px;
    margin-left: ${({marginLeft}) => marginLeft ?? "0"}px;
    margin-right: ${({marginRight}) => marginRight ?? "0"}px;
`
export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: colors.white_100+79
})`
    width: ${({width}) => width ?? 90}%;
    height: ${({height}) => height ?? 50}px;
    padding: ${({padding}) => padding ?? "0px 20px"};
    justify-content: ${({justify}) => justify ?? "center"};
    align-items: ${({align}) => align ?? "center"};
    flex-direction: ${({direction}) => direction ?? "column"};
    background-color: ${({bgColor}) => bgColor ?? "transparent"};
    border-radius: ${({radius}) => radius ?? 10}px;
    margin-top: ${({marginTop}) => marginTop ?? "10"}px;
    margin-bottom: ${({marginBottom}) => marginBottom ?? "10"}px;
    margin-left: ${({marginLeft}) => marginLeft ?? "0"}px;
    margin-right: ${({marginRight}) => marginRight ?? "0"}px;
    border-width: ${({borderWidth}) => borderWidth ?? "0.2"}px;
    border-color: ${({borderColor, error, isFocused}) => borderColor ?? error ? "red" : isFocused ? colors.gold : colors.goldLight};
    color: ${({color}) => color ?? colors.white_100};
    font-weight: ${({weight}) => weight ?? 600};
    opacity: ${({isFocused}) => isFocused ? 1 : 0.7};
`
export const SafeArea = styled.SafeAreaView`
    flex: 1;
    background-color: ${({bgColor}) => bgColor ?? colors.dark};
    position: relative;
`
export const Flash = styled.View`
    height: 100%;
    width: 100%;
    background-color: ${colors.white};
    opacity: 10;
    position: absolute;
    top: 0px;

`
export const Modal = styled.Modal`
`
export const Background = styled.Pressable`
    flex: 1;
    background-color: #00000099;
    justify-content: center;
    align-items: center;
`
export const Card = styled.View`
    width: ${({width}) => width ?? 80}%;
    justify-content: ${({justify}) => justify ?? "center"};
    align-items: ${({align}) => align ?? "center"};
    flex-direction: ${({direction, row}) => row ? "row" : direction ?? "column"};
    background-color: ${({bgColor}) => bgColor ?? colors.white};
    border-radius: ${({round}) => round ?? 20}px;
    /* margin-top: ${({marginTop}) => marginTop ?? "20"}px;
    margin-bottom: ${({marginBottom}) => marginBottom ?? "20"}px;
    margin-left: ${({marginLeft}) => marginLeft ?? "0"}px;
    margin-right: ${({marginRight}) => marginRight ?? "0"}px; */
`
export const ImageIllustration = styled.Image`
    width: ${({width}) => width ?? 200}px;
    height: ${({width}) => width ?? 160}px;
    /* object-fit: cover; */
    /* justify-content: ${({justify}) => justify ?? "center"};
    align-items: ${({align}) => align ?? "center"};
    flex-direction: ${({direction}) => direction ?? "column"};
    background-color: ${({bgColor}) => bgColor ?? colors.goldDark500};
    border-radius: ${({radius}) => radius ?? 20}px;
    margin-top: ${({marginTop}) => marginTop ?? "10"}px;
    margin-bottom: ${({marginBottom}) => marginBottom ?? "10"}px;
    margin-left: ${({marginLeft}) => marginLeft ?? "0"}px;
    margin-right: ${({marginRight}) => marginRight ?? "0"}px; */
`
export const Avatar = styled.Image`
    width: ${({width}) => width ?? 100}%;
    height: ${({width}) => width ?? 100}%;
    border-radius: 50px;
    background-color: ${({background}) => background ?? "transparent"};
    /* object-fit: cover; */
    /* justify-content: ${({justify}) => justify ?? "center"};
    align-items: ${({align}) => align ?? "center"};
    flex-direction: ${({direction}) => direction ?? "column"};
    background-color: ${({bgColor}) => bgColor ?? colors.goldDark500};
    border-radius: ${({radius}) => radius ?? 20}px;
    margin-top: ${({marginTop}) => marginTop ?? "10"}px;
    margin-bottom: ${({marginBottom}) => marginBottom ?? "10"}px;
    margin-left: ${({marginLeft}) => marginLeft ?? "0"}px;
    margin-right: ${({marginRight}) => marginRight ?? "0"}px; */
`
export const BoxContainer = styled.View`
    /* width: ${({width}) => width ?? 100}%; */
    /* height: ${({width}) => width ?? 50}%; */
    /* justify-content: ${({justify}) => justify ?? "space-between"};
    align-items: ${({align}) => align ?? "center"}; */
    flex-direction: ${({column}) => column ? "column" : "row"};
    flex-wrap: ${({noWrap}) => noWrap ? "nowrap" : "wrap"};
    /* background-color: ${({bgColor}) => bgColor ?? colors.goldDark500}; */
`
export const Box = styled.Pressable`
    width: ${({w}) => w ?? width / 3.02}px;
    height: ${({height, video}) => video ? width / 2 : height ? height : width / 3.02}px;
    justify-content: ${({justify}) => justify ?? "center"};
    /* align-items: ${({align}) => align ?? "center"}; */
    /* flex-direction: ${({column}) => column ? "column" : "row"};
    flex-wrap: ${({noWrap}) => noWrap ? "nowrap" : "wrap"}; */
    padding-right: 1px;
`
export const ListArea = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false
})`
    flex: 1;
    /* background-color: green; */
`