import { View, Text, Dimensions, Pressable } from 'react-native'
import styled from "styled-components/native"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { othersConstants } from '../../redux/constants'
import Header from './Header'
import ReadMore from '../Others/ReadMore'
import VideoPost from './VideoPost'
import PhotoPost from './PhotoPost'
import { useNavigation } from '@react-navigation/native'
import { urlFile } from '../../config/http'
import SocialPost from './SocialPost'
import { colors } from '../../Constants/styles'
import { PostDataDto } from '../../dtos/postsDtos'
import { AreaText } from './styles'
import TextUI from '../Text'

const { width, height } = Dimensions.get('window')

const Post = ({ 
  username,
  url_avatar,
  is_founder,
  is_verified,
  name,
  createdAt,
  isActiveOptionsPost,
  info,
  onPressDot,
  onPressPost
}: PostDataDto) => {


  return (
    <Area>
      <Header
        username={username}
        createdAt={createdAt} 
        onPressDot={onPressDot}
        isActiveOptionsPost={isActiveOptionsPost}
      />
        <AreaText onPress={onPressPost}>
          <TextUI>{info}</TextUI>
        </AreaText>
        <SocialPost 
          // share={isSharedPost} 
          // onPressComment={onPressComment}
          // onPressLike={onPressLike}
          // state={isLikedPost} 
          // countComment={countComment}
          // countLike={countLike}
        />
    </Area>
  )
}

export const Area = styled.View`
  width: 100%;
  position: relative;
  border-color: ${colors.transparenteGray};
  border-bottom-width: 0.2px;
  padding-bottom: 20px;
  margin-bottom: 10px;
`

export default Post