import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { colors } from "../../Constants/styles"
import StoryCard from '../../components/Stories'
import Post from '../../components/Post'
import { Modalize } from 'react-native-modalize';
// import { StoryContainer, PostArea, Divisor } from './styles'
// import { data } from '../../datas/fakeStories'

const Chat = () => {
  const modalizeRef = useRef(null);
  
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const renderStory= ({ item } ) => (
    <StoryCard item= {item} />
  )

  const renderPost= ({ item } ) => (
    <Post item= {item} />
  )

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.dark }}>
      <TouchableOpacity onPress={onOpen}>
        <Text style={{color: colors.white }}>Open the modal</Text>
      </TouchableOpacity>
      <Modalize snapPoint={180} ref={modalizeRef}><Text style={{color: colors.dark }}>Open the modal</Text></Modalize>
    </View>
  )
}

export default Chat