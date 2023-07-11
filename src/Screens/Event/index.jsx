import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { colors } from "../../Constants/styles"
import * as Linking from 'expo-linking'
import StoryCard from '../../Components/Stories'
import { Area, ListArea, ScrollArea, Text, Touch, Wrapper } from '../../Components/styles'
import HeaderBack from '../../Components/Header/HeaderBack'
import CardProfile from '../../Components/CardProfile'
import FeedPost from '../../Components/Post/FeedPost'
import { ImageBackground, Pressable, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import BarFollow from '../../Components/Bar/BarFollow'
import CardEvent from '../../Components/Cards/CardEvent'
import ButtonAction from '../../Components/Button';
import { useDispatch } from 'react-redux';
import { othersActions } from '../../redux/actions/others.actions';

const Event = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const images= ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDKlrEl8nuM4ScTybjh-NLgcT2O6uLthkVw&usqp=CAU',
  'https://pps.whatsapp.net/v/t61.24694-24/204812481_606052734227264_1729602996482981335_n.jpg?ccb=11-4&oh=01_AVwwt1-w3parhyQTyvZfTi4bBWpPTljBrh8zhTHkstx7qA&oe=633943D2',
  'https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.6435-9/84487336_2974456285953289_3959418685327671296_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=340051&_nc_ohc=8KxFKyEP82sAX-DP7RP&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT8l6_9XU2Rtl75iSHxAis-KsMSiD_-feKgBlddlL5XN8Q&oe=634F2104',
  'https://images.sympla.com.br/61856a01f386d-lg.png',
  'https://espacopop.com.br/wp-content/uploads/2022/09/A-Mulher-Rei-820x380.png',
]

  const [activeOption, setActiveOption] = useState("Eventos")

  const isFollow= activeOption.split(" ")[0] === "Seguindo"

  // console.log(isFollow);

  const optionsData= [`Eventos`, `Meus ingressos`, `Encerrados`]

  const description = `O filme “A Mulher Rei”, que tem a atriz americana Viola Davis como protagonista, estreou no Brasil na última quinta-feira (22). Para marcar o lançamento, o movimento Intelectualidade Afro-Brasileira organizou o evento “Black Women” em uma sala de cinema com mais de 170 mulheres negras.

  O movimento foi criado com o objetivo de incentivar a cultura, a autoestima e a economia afro-brasileira. “Se nós temos mulheres pretas protagonistas na tela do cinema, por que não na plateia? Reunimos mulheres sensacionais”, diz a organizadora da sessão “Black Women”, Ana Paula.`

  const handleOpenMap = () => {
    const daddr = "-23.5440638,-46.6398707"
    const company = Platform.OS === "ios" ? "apple" : "google";
    Linking.openURL(`http://maps.${company}.com/maps?daddr=${daddr}`);
  }

  return (
    <Area justify="flex-start" align="flex-start" style={{flex: 1, position: "relative"}} bgColor={colors.dark}>
      <HeaderBack auth={false} title={"Cinema na rua"} />
      <ScrollArea style={{marginBottom: "20%"}}>
        <Wrapper
          align={"flex-start"}
          style={{backgroundColor: colors.lightGray, height: 200}}
          marginBottom={0}
          marginTop={0}
        >
          <ImageBackground 
            source={{uri: images[4]}}
            style={{width: "100%", height: "100%"}}
            resizeMode="cover"
          >
          </ImageBackground>
        </Wrapper>
        <Wrapper
          align={"flex-start"}
          style={{paddingHorizontal: 20,}}
        >
          <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
            <Text size={22} bold>Cinema na rua</Text>
            <Text gold size={22} bold>R$ 25,00</Text>
          </View>
          <Pressable
            onPress={handleOpenMap}
            // direction={""}
            // justify={"center"}
            style={{width: "100%", flexDirection: "row", marginTop: 5}}
          >
            <Feather name="map-pin" size={20} color={colors.goldDark500} style={{marginRight: 5}} />
            <View>
              <Text bold size={15} color={"#ffffffcb"}>SP - São Paulo</Text>
              <Text size={14} color={"#838383"}>Sesc 24 de maio</Text>
            </View>
          </Pressable>
          <Wrapper
            initial 
            marginTop={0} 
            marginBottom={0}
            // direction={""}
            // justify={"center"}
            style={{width: "100%", flexDirection: "row", alignItems: "center", marginTop: 15}}
        >
            <Ionicons name="calendar-outline" size={20} color={colors.goldDark500} style={{marginRight: 5}} />
            <Text style={{marginRight: 20}} bold size={13} color={"#838383"}>22 Sep 2022</Text>
            <Ionicons name="stopwatch-outline" size={20} color={colors.goldDark500} style={{marginRight: 5}} />
            <Text bold size={13} color={"#838383"}>19:00 - 22:00</Text>
          </Wrapper>
          <Wrapper
            align={"flex-start"}
            style={{width: "100%"}}
            marginTop={30}
          >
            <Text bold>Descrição</Text>
            <Wrapper
              align={"flex-start"}
              style={{width: "100%"}}
              marginTop={20}
            >
              <Text start size={14} second>{description}</Text>
            </Wrapper>
          </Wrapper>

          <Wrapper
            align={"flex-start"}
            style={{width: "100%"}}
            marginTop={0}
          >
            <Text bold>Local</Text>
            <Wrapper
              align={"flex-start"}
              style={{width: "100%"}}
              marginTop={20}
            >
              <Wrapper
                initial 
                marginTop={10} 
                marginBottom={0}
                // direction={""}
                // justify={"center"}
                style={{width: "100%", flexDirection: "row", marginTop: 5, marginBottom: 10}}
              >
                <Feather name="map-pin" size={20} color={colors.goldDark500} style={{marginRight: 5}} />
                <View>
                  <Text bold start color={"#ffffffcb"}>Sesc 24 de maio</Text>
                  <Text size={15} color={"#838383"}>Rua 24 de Maio, 109, Centro, São Paulo.</Text>
                </View>
              </Wrapper>
              <Pressable
                style={{marginHorizontal: 20, padding: 20, borderWidth: 1, borderColor:"#838383", flexDirection: "row", borderRadius: 20}}
                onPress={handleOpenMap}
              >
                <Text bold size={16} start color={"#ffffffcb"}>Ver trajeto</Text>
              </Pressable>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </ScrollArea>
      <View 
        style={{width: "100%", position: "absolute", bottom: 0, alignItems: "center"}}
      >
        <ButtonAction 
          title={"Comprar agora!"}
          size={"80%"}
          onPress={() => dispatch(othersActions.openModal({title: "confirmeOrder"}))}
        />
      </View>
    </Area>
  )
}

export default Event