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

const FollowersAndFollowings = () => {

  const navigation = useNavigation()
  const { optionActive } = useRoute().params

  const [activeOption, setActiveOption] = useState(optionActive)
  const [dataFollowers, setdataFollowers] = useState({
    following: 22,
    followers: 894
  })

  const isFollow= activeOption.split(" ")[0] === "Seguindo"

  // console.log(isFollow);

  const optionsData= [`Seguindo ${dataFollowers.following}`, `Seguidores ${dataFollowers.followers}`]

  const handleOptionPost = (option) => {
    setActiveOption(option)
  }

  const handleEditProfile = () => {
    navigation.navigate("editProfile")
  }

  const renderPost= ({ item, index } ) => (
    <Wrapper style={{paddingHorizontal: 10}}  initial>
      <BarFollow 
        // imageProfile={item.imageProfile}
        username={"flory.mignon"}
        relative
        isFollow={isFollow}
      />
    </Wrapper>
  )

  return (
    <Area justify="flex-start" align="flex-start" style={{flex: 1}} bgColor={colors.dark}>
      <HeaderBack auth={false} title="florymignon" />
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
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={renderPost}
        keyExtractor={item => item}
      />
    </Area>
  )
}

export default FollowersAndFollowings