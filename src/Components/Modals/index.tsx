import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Modalize } from 'react-native-modalize';
import { Dimensions, Platform, View, ViewToken } from 'react-native';
import { colors } from '../../Constants/styles';
import SelfPost from '../../Screens/SelfPost';
import { useModal } from '../../hooks/useModal';
import { PostDto } from '../../dtos/postsDtos';
import { ModalDisplayname } from '../../dtos/AppContextDto';
import { SeflPostModal } from './SelfPost';
import ModalComments from './Comments';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

export const Modal = () => {

  const modalizeRef = useRef<Modalize>(null);

  const { modal: {isOpenModal, displayName, data: dataModal}, onCloseModal } = useModal()

  const { dataPost, indexCurrentPost } = dataModal

  const handleStateModal = (name: ModalDisplayname) => {
    return displayName.filter(i => i === name).length > 0
  }
  
  return (
    <>
      {handleStateModal('selfpost') && <SeflPostModal />}
      {handleStateModal('comment') && <ModalComments />}
    </>
  );
};