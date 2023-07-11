import React from 'react'
import { Dimensions, Pressable } from 'react-native'
import { View } from 'react-native'
import { colors } from '../../Constants/styles'
import { Icon } from '../Header/HeaderSelfPost'
import CirclePerfil from '../Others/CirclePerfil'
import ReadMore from '../Others/ReadMore'
import { IconDot } from '../Post/Header'
import SocialPost, { CommentIcon, LikeArea } from '../Post/SocialPost'
import { Text } from '../styles'
import RepliesComment from './Replies'
import { 
    Container,
    Left,
    AreaImg,
    Rigth,
    Header,
    Divisor,
    onPressComment,
} from './styles'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const Comment = ({ onPressLike, state, data, comment, dataUser, replieMsg, onPressMoreReplie, replies, children, time, isReplie, py, px, countLike }) => {
    
    const renderComment= ({ item } ) => (
        <RepliesComment 
          onPressLike={onPressLike} 
          state={state}
          comment={comment}
          dataUser={dataUser} 
          onPressMoreReplie={onPressMoreReplie}
          replies={replies}
        />
    )
    
    
  return (
    <>
        <Container py={py} px={px}>
            <Left>
                <CirclePerfil 
                    imgSrc={dataUser.avatar}
                    size={isReplie && 25}
                />
            </Left>
            <Rigth>
                <Header>
                    <Text bold start size={isReplie ? 14 : 16}>{dataUser.name}</Text>
                    <Text size={isReplie && 14} ml={isReplie ? 2 : 5} second>@{dataUser.username}</Text>
                    <View style={{flex: 1, alignItems: "flex-end"}}>
                        <IconDot size={isReplie && 20}  name="dots-horizontal" />
                    </View>
                </Header>
                <Header style={{marginBottom: 0}}>
                    {/* <ReadMore text={comment} /> */}
                    <Text start size={16}> {comment} </Text>
                </Header>
                <Header>
                    <LikeArea style={{marginBottom: 0}}>
                        <Text second size={10} mr={15}>{time}</Text>
                        {/* <Pressable>
                            <Text second size={12} bold>Responder</Text>
                        </Pressable> */}
                    </LikeArea>
                    <LikeArea style={{marginBottom: 0}}>
                        <CommentIcon size={16} onPress={onPressLike} color={state ? colors.dourado : colors.white_100+59} name="heart" />
                        <Text ml={5} mr={5} size={12}>{countLike}</Text>
                    </LikeArea>
                </Header>
                <View>
                    {children && children}
                </View>
                {replieMsg &&
                    <LikeArea onPress={onPressMoreReplie} style={{marginTop: 0}}>
                        <Text second size={12}> {replieMsg} </Text>
                        <Icon size={15} name="chevron-down" second />
                    </LikeArea>
                }
            </Rigth>
        </Container>
        {/* <SocialPost onPressComment={onPressComment} onPressLike={onPressLike} state={state} /> */}
        {/* <Divisor /> */}
    </>
  )
}

export default Comment