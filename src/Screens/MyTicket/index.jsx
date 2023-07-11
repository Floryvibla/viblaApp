import React, { useState } from 'react'
import { colors } from "../../Constants/styles"
import StoryCard from '../../Components/Stories'
import { Area, ListArea, ScrollArea, Text, Touch, Wrapper } from '../../Components/styles'
import HeaderBack from '../../Components/Header/HeaderBack'
import CardProfile from '../../Components/CardProfile'
import FeedPost from '../../Components/Post/FeedPost'
import { Pressable } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import BarFollow from '../../Components/Bar/BarFollow'
import CardEvent from '../../Components/Cards/CardEvent'

const MyTicket = () => {

  const navigation = useNavigation()

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

  const handleOptionPost = (option) => {
    setActiveOption(option)
  }

  const renderPost= ({ item, index } ) => (
    <Pressable onPress={() => navigation.navigate("event", {
      data: item
    })}>
      <Wrapper marginTop={10} marginBottom={0}>
        <CardEvent 
          banner={item}
          onPress={() => navigation.navigate("event", {
            data: item
          })}
        />
      </Wrapper>
    </Pressable>
    
  )

  return (
    <Area justify="flex-start" align="flex-start" style={{flex: 1}} bgColor={colors.dark}>
      <HeaderBack auth={false} title="Eventos" />
      <Wrapper 
        widthStyle={"100%"} 
        justify="flex-start" 
        direction="row"
        style={{paddingHorizontal: 20}} 
        // marginTop={0} 
        marginBottom={5}
      >
        {optionsData.map(option => (
            <Pressable 
              key={option}
              style={[
                option === activeOption && 
                {borderBottomWidth: 1, borderColor: colors.gold}, 
                {paddingBottom: 10, marginRight: 20}
              ]}
              onPress={() => handleOptionPost(option)}

            >
              <Text 
                color={option === activeOption ? colors.gold : colors.darkGray}
                size={15}
                // weight={600}
              > 
                {option} 
              </Text>
            </Pressable>
          ))
        }
      </Wrapper>
      <ListArea
        // ItemSeparatorComponent={() => <View style={{height: 0.5, width: "100%", backgroundColor: colors.lightGray}} />}
        data={images}
        renderItem={renderPost}
        keyExtractor={item => item}
      />
    </Area>
  )
}

export default MyTicket