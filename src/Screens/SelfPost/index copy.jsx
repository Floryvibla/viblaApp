import { TouchableOpacity, StyleSheet, View, Pressable, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Comment from '../../components/Comment'
import HeaderHome from '../../components/Header'
import { Container, Dropdown, Area, Divisor, InputComment, AreaInput, Wrapper, Icon } from './styles'
import { colors } from '../../Constants/styles'
import HeaderSelfPost from '../../components/Header/HeaderSelfPost'
import { useRoute } from '@react-navigation/native'
import { ListArea, Text } from '../../components/styles'
import { formatDate, formatDate2 } from '../../utils/functions'
import SocialPost from '../../components/Post/SocialPost'
import { useDispatch, useSelector } from 'react-redux'
import { commentActions } from '../../redux/actions'
import Loading from '../../components/Loading'
import { urlFile } from '../../config/http'
// import { LinearGradient } from 'expo-linear-gradient'

const Chat = ({ navigation }) => {

  const inputRef = useRef(null)
  const [textComment, setTextComment] = useState("")
  const [focusInput, setFocusInput] = useState(true)
  const [like, setLike] = useState(false)
  const [pageReplieComment, setPageReplieComment] = useState(0)
  const [idComments, setIdComments] = useState([])
  const [repliesByComment, setRepliesByComment] = useState([])
  const dispatch = useDispatch()
  const { isAuth } = useSelector(state => state.auth)
  const { loadingCreateComment, successCreateComment, loadingRepliesComment, repliesComment } = useSelector(state => state.comment)

  const { data, idPost, isOnPressComment } = useRoute().params

  const { dataCommentsByPost, mutateComments } = commentActions.LoadCommentsByPost(idPost)

  const handleLike= () => {
    setLike(!like)
  }
  // const handleComment= () => {
  //   navigation.navigate('selfPost')
  // }

  // console.log(dataCommentsByPost);

  useEffect(() => {
    if (successCreateComment) {
      setTextComment("")
      inputRef.current.blur()
      dispatch(commentActions.cleanCreateComment())
    }
  }, [successCreateComment])

  const handleMoreReplies = (id, count) => {
    const isExistIdComment = idComments.length > 0 && idComments?.filter(i => i == id).length > 0
    if (!isExistIdComment) {
      setIdComments([...idComments, id])
    } 
    // if (idComment) {
    //   setPageReplieComment(1)
    // }
    dispatch(commentActions.loadReplieCommentsByComment(id, pageReplieComment))
  }

  // console.log(isAuth);
  

  const handleSubmit = () => {
    dispatch(commentActions.createComment({
      post: data.id,
      user: isAuth.id,
      comment: textComment
    }))
  }
  
  const handleReplieMsg = (msg, count, id) => {
    const isExistIdComment = idComments.length > 0 && idComments?.filter(i => i == id).length > 0
    if (isExistIdComment && msg && repliesComment) {
      const rest = repliesComment?.pagination.size - pageReplieComment
      // console.log(countReplieRest);
      const resposta = rest == 1 ? 'resposta' : 'respostas'
      if (rest == 0) {
        return false
      } else {
        // setRepliesByComment([...repliesByComment, repliesComment.data])
        return `Visualizar ${rest} ${resposta}`
      }
    } else {
      return msg
    }
  }

  // console.log(idComments);

  const renderComment= ({ item } ) => (
    <Comment
      onPressLike={handleLike} 
      state={item.viewer_is_liked}
      comment={item.comment}
      dataUser={item.owner} 
      replieMsg={false
        // handleReplieMsg(item.replie_msg, item.replie_count, item.id)
      }
      onPressMoreReplie={() => handleMoreReplies(item.id)}
      replies={repliesComment}
      time={item.publishedDate}
      countLike={item.liked_comments}
      
    >
      {/* {idComments.length > 0 && idComments?.filter(i => i == item.id).length > 0 && item.replie_msg && repliesComment !== "undefined" && 
        repliesComment?.data?.map(replie => (
          <Comment
            key={replie.id}
            onPressLike={handleLike} 
            state={like}
            comment={replie.replie}
            dataUser={replie.owner}
            isReplie
            py={0} 
            // id_replie={}
            // replieMsg={replie.replie_msg}
            // onPressMoreReplie={() => handleMoreReplies(replie.id)}
            // replies={repliesComment}
          />
        ))
      } */}
    </Comment>
  )

  // console.log(data);

  return (
    <Container>
      <HeaderSelfPost 
        title={data?.owner?.name ?? `${data?.owner?.username}`} 
        imageProfile={data?.owner?.avatar}
        navigation={navigation} 
        time={data.publishedDate}
        // date={date}
      />

      {typeof dataCommentsByPost === "undefined" ? <Loading />
        : (
          <ListArea 
            ListHeaderComponent={
              <Wrapper style={{borderBottomWidth: 1, borderColor: colors.transparenteGray}}>
                <Area style={{borderBottomWidth: 1, borderColor: colors.transparenteGray}}>
                  {data.type === 'photo'
                    && (
                      <Image 
                        source={{uri: urlFile+data.imagePost}}
                        resizeMode= "cover"
                        // onPress={onPress}
                        style={{aspectRatio: 4/5, width: '100%', borderRadius: 20, marginBottom: 10}}
                      />
                    )
                  }
                  <Text start> {data.info} </Text>
                </Area>
                <SocialPost 
                  share={data.viewer_is_shared} 
                  // onPressComment={onPressComment} 
                  // onPressLike={onPressLike} 
                  state={data.viewer_is_liked} 
                  countComment={data.comments}
                  countLike={data.likes}
                />
              </Wrapper>
            }
            ItemSeparatorComponent={() => <View style={{height: 0.5, backgroundColor: colors.transparenteGray}} />}
            data={dataCommentsByPost.data}
            renderItem={renderComment}
            keyExtractor={item => item.id}
          />
        )
      }

      <AreaInput>
        <InputComment 
          placeholderTextColor={colors.lightGray} 
          autoFocus 
          placeholder='Adicionar comentário...' 
          value={textComment}
          onChangeText={text => setTextComment(text)}
          maxLength={300}
          multiline
          ref={inputRef}
        />
        {loadingCreateComment 
          ? <Loading size={40} />
          : (
            <Pressable onPress={handleSubmit} style={{height: 50}}>
              <Icon size={25} color={colors.white} name="send" />
            </Pressable>
          )
        }
      </AreaInput>
    </Container>
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '75%',
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
  },
  shadow: {
    shadowColor: colors.dourado,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 50,
  }
});

export default Chat