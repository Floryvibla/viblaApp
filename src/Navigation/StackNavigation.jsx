import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../Screens/Search';
import SelfPost from '../Screens/SelfPost'
import TabBottomNavigation from './TabBottomNavigation';
import PageText from '../Screens/PageText';
import { SafeArea } from '../components/styles';
import EditProfile from '../Screens/EditProfile';
import Configuration from '../Screens/Configuration';
import InviteFriends from '../Screens/InviteFriends';
import FollowersAndFollowings from '../Screens/FollowersAndFollowings';
import MyTicket from '../Screens/MyTicket';
import Event from '../Screens/Event';
import { Modal } from '../components/Modals';
import Payment from '../Screens/Payment';
import Notification from '../Screens/Notification';
import CreateStory from '../Screens/Story/CreateStory';
import EditorStory from '../Screens/Editor/EditorStory';
import ImagePickerGallery from '../components/Camera/ImagePickerGallery';
import PostingPhoto from '../Screens/PostingPhoto';
import { useSelector } from 'react-redux';
import { Dimensions, Platform } from 'react-native';


function StackNavigation() {
  const Stack= createNativeStackNavigator()
  const { contentDisplayModal } = useSelector(state => state.others)

  const isOptionHeaderPost = contentDisplayModal === "optionHeaderPost"

  // console.log("isOptionHeaderPost: ", isOptionHeaderPost);

  return (
    <SafeArea>
      <Modal 
        isOptionHeaderPost={isOptionHeaderPost} 
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#000"
          }
        }}
      >
        <Stack.Screen
          name='Home'
          component={TabBottomNavigation}
        />
        <Stack.Screen
          name='Search'
          component={SearchScreen}
        />
        <Stack.Screen
          name='pageText'
          component={PageText}
        />
        <Stack.Screen
          name='selfPost'
          component={SelfPost}
        />
        <Stack.Screen
          name='editProfile'
          component={EditProfile}
        />
        <Stack.Screen
          name='configuration'
          component={Configuration}
        />
        <Stack.Screen
          name='Convide os amigos'
          component={InviteFriends}
        />
        <Stack.Screen
          name='followers and followings'
          component={FollowersAndFollowings}
        />
        <Stack.Screen
          name='my ticket'
          component={MyTicket}
        />
        <Stack.Screen
          name='event'
          component={Event}
        />
        <Stack.Screen
          name='payment'
          component={Payment}
        />
        <Stack.Screen
          name='notification'
          component={Notification}
        />
        <Stack.Screen
          name='create story'
          component={CreateStory}
        />
        <Stack.Screen
          name='editor story'
          component={EditorStory}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name='images picker'
          component={ImagePickerGallery}
        />
        <Stack.Screen
          name='posting photo'
          component={PostingPhoto}
        />
      </Stack.Navigator>
    </SafeArea>
  )
}

export default StackNavigation