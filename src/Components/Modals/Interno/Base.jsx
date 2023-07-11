import { View } from 'react-native'
import React, { useEffect } from 'react'
import { Background, Card, Modal, Text, Wrapper } from '../../styles'
import { useState } from 'react'

const BaseModalInterno = ({ children, open }) => {
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])
  

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
    >
      <Background onPress={() => setIsOpen(false)}>
        <Card>
          {children}
        </Card>
      </Background>
    </Modal>
  )
}

export default BaseModalInterno