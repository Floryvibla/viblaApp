import { View, Text, Image } from 'react-native'
import React from 'react'
import { ImageIllustration } from '../../styles'

const FeedPhoto = ({ imgPost }) => {
  return (
    <Image 
      source={{uri: `${imgPost}`}} 
      style={{width: "100%", height: "100%"}}
      resizeMode={'cover'} 
    />
  )
}

export default FeedPhoto