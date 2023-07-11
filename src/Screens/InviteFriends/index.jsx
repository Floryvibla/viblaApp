import React, { useState } from 'react'
import { Dimensions, Pressable, Share, View } from 'react-native'
import * as Clipboard from 'expo-clipboard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../../Constants/styles"
import { Area, Card, ListArea, ScrollArea, Text, Touch, Wrapper } from '../../Components/styles'
import HeaderBack from '../../Components/Header/HeaderBack'
import { PostArea } from '../Home/styles'
import { useDispatch } from 'react-redux'
import BarOption from '../../Components/Bar'
import { useNavigation } from '@react-navigation/native'
import { othersActions } from '../../redux/actions/others.actions'
import CirclePerfil from '../../Components/Others/CirclePerfil'
import ButtonAction from '../../Components/Button';

const InviteFriends = () => {

  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [copy, setCopy] = useState({
    state: false,
    msg: "10121995"
  })

  const handleCopyToBoard = () => {
    setCopy({...copy, state: true})
    setTimeout(() => {
      setCopy({...copy, state: false})
    }, 3000);
  }

  const openShareDialogAsync = () => {    
    Share.share({
      message: copy.msg.toString()
    })
  };

  const copyToClipboard = () => {
    Clipboard.setStringAsync(copy.msg);
    Clipboard.getStringAsync()
    .then(text => handleCopyToBoard())
    .catch(err => console.log(err))
  };

  return (
    <Area justify="flex-start" align="flex-start" style={{flex: 1}} bgColor={colors.dark}>
      <HeaderBack auth={false} title="Convide os amigos" />
      <Wrapper>
        <Wrapper marginTop={40}>
          <Card round={15}>
            <Wrapper marginTop={60} marginBottom={0}>
              <Text second>Seu código de convite</Text>
            </Wrapper>
            <Wrapper row marginTop={10}>
              <Text style={{marginRight: 10}} black bold>{10121995}</Text>
              <Pressable onPress={copyToClipboard}>
                {!copy.state
                  ? <MaterialCommunityIcons name="content-copy" size={16} color="black" />
                  : <Text color={colors.success} size={14}>Copiado!</Text>
                }
              </Pressable>
            </Wrapper>
            <ButtonAction 
              title={"Convidar"}
              size={"80%"}
              onPress={openShareDialogAsync}
            />
          </Card>
        </Wrapper>
        <Wrapper 
          // initial 
          widthStyle={"80%"}
          position="absolute"
          style={{top: -30}}
        >
          <CirclePerfil 
            size={90}
            imgSrc={false}
            background={colors.dark}
          />
        </Wrapper>
      </Wrapper>
    </Area>
  )
}

export default InviteFriends