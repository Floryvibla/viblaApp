import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modalize } from 'react-native-modalize';
import { othersActions } from '../../redux/actions/others.actions';
import { Dimensions, Platform } from 'react-native';
import { Container, Wrapper } from './styles';
import { colors } from '../../Constants/styles';
import TextUI from '../../components/Text';
import { BlurViewContainer } from '../../components/Post/styles';
import { PostDto } from '../../dtos/postsDtos';
import Post from '../../components/Post';
import { formatDate } from '../../utils/dates';
import Header from '../../components/Post/Header';

interface Props {
  item: PostDto,
  currentPost: PostDto
}


const SelfPost = ({ item, currentPost }: Props) => {

  
  return (
    <Container>
      <Wrapper>
        <Post 
          username={item?.attributes.owner.data?.attributes.username}
          createdAt={formatDate(item?.attributes.createdAt)}
          // onPressDot={() => onOpen(item)}
          // isActiveOptionsPost={contentDisplayModal === 'optionHeaderPost'}
          info={item?.attributes.info}
          // onPressPost={() => handleToSelfPost(index)}
          medias={item?.attributes.medias}
          isCurrentPost={item?.id === currentPost?.id}
          isSelfPost
          // id={item?.id}
        />
      </Wrapper>
      
    </Container>
  )
};

export default SelfPost