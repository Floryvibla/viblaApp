import React from 'react'
import { Text, Wrapper } from '../styles'
import { Container, ImageAvatar } from './styles'
import { urlFile } from '../../config/http'

interface PropsAvatar {
  source: string
}

const Avatar = ({
  source
}: PropsAvatar) => {
  return (
    <Container>
      <ImageAvatar 
        source={source ? {uri: urlFile+source} : require('../../Assets/images/profile_default.png')}
      />
    </Container>
  )
}

export default Avatar