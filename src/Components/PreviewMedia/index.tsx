import React from 'react'
import { Text, Wrapper } from '../styles'
import { Container, ImageAvatar } from './styles'
import { urlFile } from '../../config/http'

interface PropsPreviewMedia {
  source?: string
  type?: 'image' | 'video'
}

export const PreviewMedia = ({
  source,
  type
}: PropsPreviewMedia) => {

  // console.log("Source: ", source);
  

  return (
    <Container>
      {type === 'image' && (
        <ImageAvatar 
          source={{ uri: source }}
          resizeMode='cover'
        />
      )}
      
    </Container>
  )
}