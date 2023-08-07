import React, { useState } from 'react'
import { colors } from "../../Constants/styles"
import StoryCard from '../../components/Stories'
import { Container } from './styles'
import { HeaderBack } from '../../components/Header/HeaderBack'
import CardProfile from '../../components/CardProfile'
import { data } from '../../datas/fakeStories'
import FeedPost from '../../components/Post/FeedPost'
import { Pressable, ScrollView, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useAsyncStorage } from '../../hooks/useAsyncStorage'
import { ProfileScreenParams } from '../../Navigation/types'
import { AppRoutes, useNavigate, useScreenParams } from '../../hooks/useNavigate'

const Profile = () => {

  const { dataUserStorage } = useAsyncStorage()
  const { params } = useScreenParams()
  const dataParams = params as AppRoutes['Profile']
  const { navigation } = useNavigate()

  const isOwner = params ? dataParams?.id === dataUserStorage?.id : true
  const username = params ? dataParams?.attributes?.username : dataUserStorage.username
  const name = params ? dataParams?.attributes?.name : dataUserStorage.name
  const biography = params ? dataParams?.attributes?.biography : dataUserStorage.biography
  const profession = params ? dataParams?.attributes?.profession : dataUserStorage.profession
  const is_verified = params ? dataParams?.attributes?.is_verified : dataUserStorage.is_verified
  const is_founder = params ? dataParams?.attributes?.is_founder : dataUserStorage.is_founder
  
  const handleEvent = () => {
    navigation.navigate('myTicket')
  }

  const handleEditProfile = () => {
    navigation.navigate("editProfile")
  }

  return (
    <Container>
      <HeaderBack 
        variant={isOwner ? 'perfil' : null }
        screen 
        auth={isOwner} 
        title={"@"+username} 
        onPressBack={isOwner && handleEvent}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardProfile 
          name={name}
          bio={biography}
          profession={profession}
          verified={is_verified}
          isFounder={is_founder}
          followers={894}
          following={22}
          auth={isOwner}
          isFollower={false}
          onPressBtnAction={isOwner && handleEditProfile}
        />
      </ScrollView>
    </Container>
  )
}

export default Profile