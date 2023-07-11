import { View, Text, FlatList } from 'react-native'
import React, { useRef } from 'react'
import HeaderHome from '../../Components/Header'
import { Container } from './styles'
import { useNavigation } from '@react-navigation/native'
import Post from '../../Components/Post'
import { othersActions, postsActions } from '../../redux/actions'
import { PostDto } from '../../dtos/postsDtos'
import { formatDate } from '../../utils/dates'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

  const navigation = useNavigation<any>()
  const dispatch = useDispatch<any>()

  const { contentDisplayModal } = useSelector((state: any) => state.others)

  const { dataPost, mutate } = postsActions.LoadPosts()

  const onOpen = (item: any) => {
    dispatch(othersActions.openModal({
      title: "optionHeaderPost",
      data: item
    }))
  };

  const handleToSelfPost= (item: any) => {
    // console.log(item);
    navigation.navigate('selfPost', {
      idPost: item.id,
      data: item,
      isOnPressComment: true
    })
  }

  // console.log("contentDisplayModal: ", contentDisplayModal === 'optionHeaderPost');

  const renderPost = ({item}: {item: any}) => (
    <Post 
      username={item?.attributes.owner.data?.attributes.username}
      createdAt={formatDate(item?.attributes.createdAt)}
      onPressDot={() => onOpen(item)}
      isActiveOptionsPost={contentDisplayModal === 'optionHeaderPost'}
      info={item?.attributes.info}
      onPressPost={() => handleToSelfPost(item)}
    />
  )
  
  
  
  return (
    <Container>
      <HeaderHome navigation={navigation} />
      <FlatList 
        data={dataPost}
        keyExtractor={(item: any) => item.id}
        renderItem={renderPost}
      />
    </Container>
  )
}

export default Home