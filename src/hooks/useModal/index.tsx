import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { ModalDisplayname, ModalDto } from '../../dtos/AppContextDto'
import { addOrRemoveValue } from '../../utils'




export function useModal() {

    const { state:{modal}, UpdateState } = useContext(AppContext)

    const updateModale = (stateModal: ModalDto) => {
        UpdateState({modal: {...modal, ...stateModal}})
    }

    const onOpenModal = ({modalName, data}: {modalName: ModalDisplayname, data?: any}) => {

        const displayName = addOrRemoveValue(modal.displayName, modalName) as ModalDisplayname[]
        const isOpenModal = modal.displayName.filter(i => i === modalName).length > 0
        

        updateModale({isOpenModal, displayName: displayName, data})
    }

    const onCloseModal = (displayName?:ModalDisplayname) => {
        const isOpenModal = modal.displayName.filter(i => i !== displayName).length > 0
        console.log("Foraaa: ", isOpenModal);
        if (!isOpenModal) {
            const dataDisplayName = addOrRemoveValue(modal.displayName, displayName) as ModalDisplayname[]
            console.log("Dentro: ", isOpenModal);
            
            updateModale({isOpenModal, displayName: dataDisplayName})
        }
    }

  return {
    modal,
    onCloseModal,
    onOpenModal
  }
}