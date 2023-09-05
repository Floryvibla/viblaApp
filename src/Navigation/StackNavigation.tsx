import React, { useContext } from 'react'
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'
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
import { colors } from '../Constants/styles';
import ModalInterno from '../components/Modals/Interno';
import Header from '../components/Header';
import { useModal } from '../hooks/useModal';
import { AppContext } from '../context/AppContext';


export type StackAppRoutes = {
  Home?: any
  Search?: any
  pageText?: any
  selfPost?: any
  editProfile?: any
  configuration?: any
  inviteFriends?: any
  followersAndFollowings?: any
  myTicket?: any
  event?: any
  payment?: any
}

export type  StackAppRoutesProps = NativeStackNavigationProp<StackAppRoutes>

const { Navigator, Screen }= createNativeStackNavigator<StackAppRoutes>()


function StackNavigation() {
  const Stack= createNativeStackNavigator()
  const { modal: {displayName, isOpenModal} } = useModal()
  const { state:{showHeader}, UpdateState } = useContext(AppContext)

  // console.log("isOptionHeaderPost: ", isOptionHeaderPost);

  return (
    <>
      <ModalInterno />
      {isOpenModal && <Modal/>}
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.dark
          }
        }}
      >
        <Screen
          name='Home'
          options={{
            headerShown: showHeader,
            headerTransparent: true,
            headerBlurEffect: 'dark',
            header: (props) => (
              <Header />
            )
          }}
          component={TabBottomNavigation}
        />
        <Screen
          name='Search'
          component={SearchScreen}
        />
        <Screen
          name='pageText'
          component={PageText}
        />
        <Screen
          name='selfPost'
          component={SelfPost}
        />
        <Screen
          name='editProfile'
          component={EditProfile}
        />
        <Screen
          name='configuration'
          component={Configuration}
        />
        <Screen
          name='inviteFriends'
          // 'Convide os amigos'
          component={InviteFriends}
        />
        <Screen
          name= 'followersAndFollowings'
          // 'followers and followings'
          component={FollowersAndFollowings}
        />
        <Screen
          name='myTicket'
          // 'my ticket'
          component={MyTicket}
        />
        <Screen
          name='event'
          component={Event}
        />
        <Screen
          name='payment'
          component={Payment}
        />
        {/* <Screen
          name='createStory'
          component={CreateStory}
        />
        <Screen
          name='editorStory'
          component={EditorStory}
          options={{gestureEnabled: false}}
        />
        <Screen
          name='imagesPicker'
          component={ImagePickerGallery}
        />
        <Screen
          name='postingPhoto'
          component={PostingPhoto}
        /> */}
      </Navigator>
    </>
  )
}

export default StackNavigation