import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
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
import { SafeArea } from '../Components/styles';
import Notification from '../Screens/Notification';
import AddPost from '../Screens/Post';


function TabBottomNavigation() {
    // <Ionicons name="md-person-outline" size={24} color="black" />
    // <AntDesign name="plus" size={24} color="black" />
  const { Navigator, Screen }= createBottomTabNavigator()
  const size = 20
//   Platform.OS === "ios" ? 25 : 25

  return (
    <SafeArea>
        <Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: colors.dourado,
                tabBarInactiveTintColor: colors.white,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 45,
                    backgroundColor: colors.dark,
                    borderTopColor: "#cecece4f",
                },
            }}
        >
            <Screen name="Main" component={HomeScreen} options={{
                tabBarIcon: ({color}) => (
                    <AntDesign name="home" size={size} color={color} />
                ),
            }} />
            <Screen name="Discover" component={DiscoverScreen} options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name="world-o" size={size} color={color} />
                    ),
                }}
            />
            <Screen name="Add" component={AddPost} options={{
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
            />
            <Screen name="notification" component={Notification} options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons 
                            name="notifications" 
                            size={size} 
                            color={color} 
                        />
                    )
                }}
            />
            <Screen name="Profile" component={ProfileScreen} options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons  
                            name="md-person-outline" 
                            size={size} 
                            color={color} 
                        />
                    )
                }}
                
            />
        </Navigator>
    </SafeArea>
  )
}

export default TabBottomNavigation