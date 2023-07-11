import React, { useState } from 'react'
import { colors } from "../../Constants/styles"
import StoryCard from '../../Components/Stories'
import { Area, ScrollArea, Text, Touch, Wrapper } from '../../Components/styles'
import HeaderBack from '../../Components/Header/HeaderBack'
import CardProfile from '../../Components/CardProfile'
import { data } from '../../datas/fakeStories'
import FeedPost from '../../Components/Post/FeedPost'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {

  const navigation = useNavigation()

  const [activeOption, setActiveOption] = useState("Todos")
  const [dataPost, setDataPost] = useState(data)

  const optionsData= ["Todos", "Texts", "Fotos", "Videos"]

  const handleOptionPost = (option) => {
    setActiveOption(option)
    // switch (option) {
    //   case "Todos":
    //     return setDataPost(data)
    //   case "Texts":
    //     return setDataPost(data.filter(i => i.type.toLowerCase() === "text"))
    //   case "Videos":
    //     return setDataPost(data.filter(i => i.type.toLowerCase() === "video"))
    //   default:
    //     return setDataPost(data.filter(i => i.type.toLowerCase() === "fotos"));
    // }
  }

  const handleEditProfile = () => {
    navigation.navigate("editProfile")
  }

  return (
    <Area initial justify="flex-start" align="flex-start" style={{flex: 1}} bgColor={colors.dark}>
      <HeaderBack screen auth={true} title="Flory Mignon" />
      <ScrollArea>
        <CardProfile 
          username={"florymignon"}
          bio={"Criandor da vibla e tudo isso. aqu Encontre nossa lista de Serviços cadastrados em Limeira, Americana, SBO, Nova Odessa, Sumaré, Hortolândia, Campinas e região:"}
          profession={"Software engineer"}
          verified={true}
          followers={894}
          following={22}
          auth={true}
          isFollower={false}
          onPressBtnAction={handleEditProfile}
        />
        <Wrapper marginTop={0} marginBottom={0}>
          <Wrapper 
            widthStyle={"80%"} 
            justify="space-between" 
            direction="row" 
            marginTop={0} 
            marginBottom={5}
          >
            {optionsData.map(option => (
                <Pressable 
                  key={option}
                  style={[
                    option === activeOption && 
                    {borderBottomWidth: 1, borderColor: colors.gold}, 
                    {paddingBottom: 10, }
                  ]}
                  onPress={() => handleOptionPost(option)}

                >
                  <Text 
                    color={option === activeOption ? colors.gold : colors.darkGray}
                    // weight={600}
                  > 
                    {option} 
                  </Text>
                </Pressable>
              ))
            }
          </Wrapper>
        </Wrapper>

        <FeedPost 
          data={dataPost}
          type={activeOption}
        />
      </ScrollArea>
    </Area>
  )
}

export default Profile