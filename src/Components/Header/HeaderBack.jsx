import React from 'react'
import { Dimensions } from 'react-native'
import styled from "styled-components/native"
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { colors } from "../../Constants/styles"
import { Area, AreaRow, ButtonTouch, ImageIllustration, Text, Touch } from '../styles';
import { useNavigation } from '@react-navigation/native';
import Loading from '../Loading';
import ButtonAction from '../Button';

const { width: WIDTH } = Dimensions.get('window')

const HeaderBack = ({ auth, title, screen, btn, contentRight, onPressBtnContentRight, loadingContentRight, onBack }) => {

  const navigation = useNavigation()

  const handleBack = () => {
    navigation.goBack()
    onBack && onBack()
  }

  const handleTicket = () => {
    navigation.navigate('my ticket')
  }

  const handleBtnRight = () => {
    if (auth) {
      navigation.navigate('configuration')
    } else {
      
    }
  }


  return (
    <AreaRow style={{height: 50}} marginTop={10} paddingHorizontal={10} direction="row" justify="space-between">
      <BackArea 
        onPress={auth ? handleTicket : handleBack}
        style={{justifyContent: "center", height: "100%"}}
      >
        {/* <Icon name={auth ? "person-add-outline" : "chevron-back"} /> */}
        {auth
          ? <Fontisto name="train-ticket" size={30} color={colors.gold} />
          : <Icon name={"chevron-back"} />
        }
      </BackArea>
      <Container flex={2}>
        <Text weight={600} size={16}> {title} </Text>
      </Container>
      <Container>
        {screen &&
          <>
            {auth &&
              <ButtonTouch style={{width: "22%", marginRight: 20}}>
                {/* <ImageIllustration 
                  resizeMode='contain' 
                  style={{width: "100%", height: "100%"}} 
                  source={require("../../Assets/icons/coin.png")}
                /> */}
                {/* <Fontisto name="train-ticket" size={24} color={colors.gold} /> */}
              </ButtonTouch>
            }
            <ButtonTouch 
              style={{width: auth ? "100%" : "100%", marginLeft: 10}} 
              align={auth ? "center": "flex-end"}
              onPress={handleBtnRight}
            >
              <Icon name={auth ? "settings-outline" : "ellipsis-vertical"} />
            </ButtonTouch>
          </>
        }
        {contentRight &&
          <BackArea 
            onPress={onPressBtnContentRight}
            style={{justifyContent: "center", height: "100%"}}
            onPre
          >
            {loadingContentRight
              ? <Loading size={50} />
              : btn 
                ? <ButtonAction title={contentRight} mt={20} sizeTitle={14} />
                : <Text color={colors.gold} weight={600} size={16}> {contentRight} </Text>
            }
          </BackArea>
        }
      </Container>
    </AreaRow>
  )
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: ${({flex}) => flex ?? 1};
  height: 100%;
`
export const BackArea = styled.Pressable`
    margin-left: 0px;
    flex: 1
`
export const Icon = styled(Ionicons).attrs({
})`
    color: ${colors.white};
    font-size: ${({size}) => size ?? 30}px;
    /* justify-content: end; */
`

export default HeaderBack