import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { ModalDisplayname, ModalDto } from '../../dtos/AppContextDto'



export function useModal() {

    const { state:{modal}, UpdateState } = useContext(AppContext)

    const updateModale = (stateModal: ModalDto) => {
        UpdateState({modal: {...modal, ...stateModal}})
    }

    const onOpenModal = ({displayName, data}: {displayName: ModalDisplayname, data?: any}) => {
        updateModale({isOpenModal: true, displayName, data})
    }

    const onCloseModal = (displayName?:ModalDisplayname) => {
        if (!displayName) {
            updateModale({isOpenModal: false, displayName: false, data: false})
        }
    }

  return {
    modal,
    onCloseModal,
    onOpenModal
  }
}