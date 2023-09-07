import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BaseModalInterno from './Base'
import NotificationWelcome from './NotificationWelcome/index.jsx'
import { Background } from '../../styles'
import Permissions from './Permissions'

const ModalInterno = () => {
    const dispatch = useDispatch()
    const { openModal, contentDisplayModal } = useSelector(state => state.others)

    const permissions = ["permission-camera"]

    // console.log("contentDisplayModal: ", contentDisplayModal);

  return (
    <BaseModalInterno open={openModal}>
      {contentDisplayModal?.toLowerCase() === "notification welcome" && <NotificationWelcome />}
      {permissions.filter(i => i=== contentDisplayModal?.toLowerCase()).length > 0 && <Permissions type={contentDisplayModal} />}
    </BaseModalInterno>
  )
}

export default ModalInterno