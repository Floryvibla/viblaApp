import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modalize } from 'react-native-modalize';
import { othersActions } from '../../redux/actions/others.actions';
import ModalComments from './Comments';
import { Dimensions, Platform } from 'react-native';
import ConfirmOrder from './ConfirmOrder';
import ListMySerie from './ListMySerie';
import { OptionsHeaderPost } from './OptionsHeadePost';
import { colors } from '../../Constants/styles';

export const Modal = ({ h, isOptionHeaderPost }) => {
  const { height: HEIGHT } = Dimensions.get('window')
  const modalizeRef = useRef(null);
  const { openModal, contentDisplayModal } = useSelector(state => state.others)
  const dispatch = useDispatch()

  useEffect(() => {
    if (openModal) {
      modalizeRef.current?.open();
    }else{
      modalizeRef.current?.close();
    }
  }, [openModal])

  const handleModalSize = () => {
    if (Platform.OS === "ios") {
      return isOptionHeaderPost ? HEIGHT / 2.2 : HEIGHT / 1.75
    } else {
      return isOptionHeaderPost ? HEIGHT / 1.9 : HEIGHT / 1.50
    }
  }

  const sizeModal = handleModalSize()

  console.log("contentDisplayModal: ", contentDisplayModal);
  

  return (
    contentDisplayModal === "add serie" 
      ? <ListMySerie />
      : (
        <Modalize 
          adjustToContentHeight
          ref={modalizeRef}
          onClose={() => dispatch(othersActions.closeModal())}
          modalStyle={{
            backgroundColor: colors.bgModalDark
          }}
        >
          {contentDisplayModal === "confirmeOrder" && <ConfirmOrder />}
          {contentDisplayModal === "optionHeaderPost" && <OptionsHeaderPost />}
      </Modalize>
      )
  );
};