import React from 'react'
import { Dimensions, Pressable, View } from 'react-native'
import styled from "styled-components/native"
import { Ionicons, Entypo } from '@expo/vector-icons';
import { colors } from "../../Constants/styles"
import CirclePerfil from '../Others/CirclePerfil';
import { Text } from '../styles';

const { width: WIDTH } = Dimensions.get('window')

const HeaderSelfPost = ({ navigation, title, imageProfile, date, time }) => {
  return (
    <Container 
      // style={{borderBottomWidth: 1, borderColor: colors.lightGray+24}}
    >
      <BackArea onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" />
      </BackArea>
      {/* <ImgArea>
      
      </ImgArea> */}
      <CenterArea>
        <CirclePerfil 
          imgSrc={imageProfile}
        />
        <View style={{marginLeft: 10}}>
          <Pressable>
            <Text start>{title}</Text>
          </Pressable>
          <View style={{flexDirection: "row", alignItems: 'center'}}>
            <Text size={10} second>{time}</Text>
            {/* <Entypo name="dot-single" size={10} color={colors.darkGray} />
            <Text size={10} second>{date}</Text> */}
          </View>
        </View>
      </CenterArea>
      <View>
        <Icon second name="ellipsis-horizontal" />
      </View>
    </Container>
  )
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  width: ${WIDTH}px;
  /* flex: 1; */
  /* height: 60px; */
  padding: 10px 5px;
  margin-bottom: 5px;
`

export const CenterArea = styled.View`
  flex: 5;
  /* justify-content: center; */
  align-items: center;
  flex-direction: row;
  /* background-color: aliceblue; */
`
export const BackArea = styled.TouchableOpacity`
    margin-right: 10px;
    flex: 1
`
export const Icon = styled(Ionicons)`
    color: ${({second}) => second ? colors.darkGray : colors.white};
    font-size: ${({second, size}) => second ? size ?? 20 : size ?? 30}px;
    /* justify-content: end; */
`
export const ImgArea = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 25px;
    background-color: ${colors.white_100};
`
export const ImgPostArea = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: ${colors.white_100};
`

export default HeaderSelfPost