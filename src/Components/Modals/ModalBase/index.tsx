import React, { useEffect, useRef } from 'react'
import { colors } from '../../../Constants/styles';
import { Modalize } from 'react-native-modalize';
import { useModal } from '../../../hooks/useModal';
import { ModalDisplayname } from '../../../dtos/AppContextDto';

export interface ModalBaseProps {
    openModal:boolean, 
    onCloseModal?: () => void
}

type Props = {
    children: any
    name: ModalDisplayname
}

export const ModalBase = ({ 
    children,
    name
} : Props) => {

    const { modal: {isOpenModal}, onCloseModal } = useModal()

    const modalizeRef = useRef(null);

    function handleClose() {
        onCloseModal(name)
    }
    

    useEffect(() => {
        if (isOpenModal) {
          modalizeRef.current?.open();
        }else{
          modalizeRef.current?.close();
        }
    }, [isOpenModal])

  return (
    <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        onClose={handleClose}
        modalStyle={{
            backgroundColor: colors.bgModalDark
        }}
    >
        {children}
    </Modalize>
    
  )
}