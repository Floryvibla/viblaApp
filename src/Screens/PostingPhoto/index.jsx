import React, { useRef, useState } from 'react'
import { colors } from "../../Constants/styles"
import StoryCard from '../../Components/Stories'
import { Area, ListArea, ScrollArea, Text, Touch, Wrapper } from '../../Components/styles'
import HeaderBack from '../../Components/Header/HeaderBack'
import CardProfile from '../../Components/CardProfile'
import { data } from '../../datas/fakeStories'
import FeedPost from '../../Components/Post/FeedPost'
import { Image, Pressable, TextInput, View, Keyboard, Platform } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { LIMIT_LEGENDA } from '../../Constants/app'
import BarFollow from '../../Components/Bar/BarFollow'
import { users, hashtags } from '../../mocks/db.json'

const PostingPhoto = () => {

  const inputRef = useRef(null)
  const [value, setValue] = useState("")
  const [keyPress, setKeyPress] = useState("")
  const [open, setOpen] = useState({
    mentions: false,
    hashtang: false
  })
  const navigation = useNavigation()
  const { dataImage } = useRoute().params

  const handlePosting = () => {
    navigation.navigate("Main")
  }

  const handleOnchage = (text) => {
    setValue(text)

    // if (keyPress === ' ') {
    //   setOpen({
    //     mentions: false,
    //     hashtang: false
    //   })
    // }
  }

  // console.log("Aqui");

  const renderhashtang= ({ item, index } ) => (
    <Wrapper style={{paddingHorizontal: 10}}  initial>
      <BarFollow 
        // imageProfile={item.imageProfile}
        username={item.title}
        category={item.info}
        relative
        notSeeFollows
        hashtag
      />
    </Wrapper>
  )
  const renderMentions= ({ item, index } ) => (
    <Pressable style={{paddingHorizontal: 10}}>
      <BarFollow 
        imageProfile={item.avatar}
        username={item.username}
        relative
        notSeeFollows
      />
    </Pressable>
  )

  return (
    <Area initial justify="flex-start" align="flex-start" style={{flex: 1}} bgColor={colors.dark}>
      <HeaderBack onPressBtnContentRight={handlePosting} contentRight="Postar" title="" />
      <Wrapper
        initial
        row
        style={{marginBottom: 20, borderTopColor: colors.darkGray+29, borderBottomColor: colors.darkGray+29, borderWidth: 1, paddingVertical: 10}}
      >
        <View>
          <Image  
            source={{uri: dataImage.uri}}
            style={{width: 100, height: 100}}
            resizeMode="cover"
          />
        </View>
        <Wrapper
          initial
          style={{paddingHorizontal: 10, justifyContent: 'space-between', height: 100, flex: 1}}
        >
          <TextInput 
            placeholder='Escreve uma legenda...'
            style={{fontSize: 16, width: '100%', color: colors.white_100}}
            placeholderTextColor={colors.darkGray}
            multiline
            ref={inputRef}
            value={value}
            onChangeText={handleOnchage}
            onKeyPress={event => setKeyPress(event.nativeEvent.key)}
            maxLength={LIMIT_LEGENDA}
          />
        </Wrapper>
      </Wrapper>
      {open.mentions &&
        <View style={{height: Platform.OS === 'ios' ? '35%' : '100%'}}>
          <ListArea
            // ItemSeparatorComponent={() => <View style={{height: 0.5, width: "100%", backgroundColor: colors.lightGray}} />}
            data={users}
            renderItem={renderMentions}
            keyExtractor={item => item.id}
          />
        </View>
      }
      {open.hashtang &&
        <View style={{height: Platform.OS === 'ios' ? '35%' : '100%'}}>
          <ListArea
            // ItemSeparatorComponent={() => <View style={{height: 0.5, width: "100%", backgroundColor: colors.lightGray}} />}
            data={hashtags}
            renderItem={renderhashtang}
            keyExtractor={item => item.id}
          />
        </View>
      }
    </Area>
  )
}

export default PostingPhoto