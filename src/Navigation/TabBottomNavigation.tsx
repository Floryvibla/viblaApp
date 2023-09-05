import React, { useContext } from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator, BottomTabNavigationProp, BottomTabBar } from '@react-navigation/bottom-tabs'
import { colors } from '../Constants/styles'
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../Screens/Home';
import DiscoverScreen from '../Screens/Discover';
import ChatScreen from '../Screens/Chat';
import PostScreen from '../Screens/Post';
import ProfileScreen from '../Screens/Profile';
import VideoScreen from '../Screens/Video';
import { SafeArea } from '../components/styles';
import Notification from '../Screens/Notification';
import AddPost from '../Screens/Post';
import { ProfileScreenParams } from './types';
import { BlurView } from 'expo-blur';
import { AppContext } from '../context/AppContext';



export type BottomTabStack = {
    Main?: any
    Discover?: any
    Add?: any
    notification?: any
    Profile?: ProfileScreenParams
}

export type BottomTabStackRoutesProps = BottomTabNavigationProp<BottomTabStack>

const { Navigator, Screen }= createBottomTabNavigator<BottomTabStack>()


function TabBottomNavigation() {
    // <Ionicons name="md-person-outline" size={24} color="black" />
    // <AntDesign name="plus" size={24} color="black" />
  const size = 22
//   Platform.OS === "ios" ? 25 : 25

    const { state:{showHeader}, UpdateState } = useContext(AppContext)

  return (
    <Navigator 
        screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: colors.dourado,
            tabBarInactiveTintColor: colors.white,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'transparent',
                borderTopColor: "#cecece4f",
                elevation: 0
            },
            
        }}
        tabBar={(props) => (
            <BlurView
                style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                }} 
                tint="dark" 
                intensity={100}
            >
                <BottomTabBar {...props} />
            </BlurView>
        )}
    >
        <Screen 
            name="Main" 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) => (
                    <AntDesign name="home" size={size} color={color} />
                ),
            }} 
            listeners={{
                tabPress: () => UpdateState({showHeader: true})
            }}
        />
        <Screen 
            name="Discover" 
            component={DiscoverScreen} 
            options={{
                tabBarIcon: ({color}) => (
                    <Fontisto name="world-o" size={size} color={color} />
                ),
            }}
            listeners={{
                tabPress: () => UpdateState({showHeader: false})
            }}
        />
        <Screen 
            name="Add" 
            component={AddPost} 
            options={{
                tabBarIcon: ({color}) => (
                    <Ionicons 
                        name="ios-add-circle-outline" 
                        size={size * 1.8} 
                        color={color}
                    />
                ),
                tabBarStyle: {
                    display: "none"
                }
            }}
            listeners={{
                tabPress: () => UpdateState({showHeader: false})
            }}
        />
        <Screen 
            name="notification" 
            component={Notification} 
            options={{
                tabBarIcon: ({color}) => (
                    <Ionicons 
                        name="notifications" 
                        size={size} 
                        color={color} 
                    />
                )
            }}
            listeners={{
                tabPress: () => UpdateState({showHeader: false})
            }}
        />
        <Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
                tabBarIcon: ({color}) => (
                    <Ionicons  
                        name="md-person-outline" 
                        size={size} 
                        color={color} 
                    />
                )
            }}
            listeners={{
                tabPress: () => UpdateState({showHeader: false})
            }}
        />
    </Navigator>
  )
}

export default TabBottomNavigation