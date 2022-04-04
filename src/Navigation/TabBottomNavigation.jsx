import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackNavigation from './StackNavigation';
import { colors } from '../Constants/styles'
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../Screens/Home';
import DiscoverScreen from '../Screens/Discover';
import ChatScreen from '../Screens/Chat';
import PostScreen from '../Screens/Post';
import ProfileScreen from '../Screens/Profile';


function TabBottomNavigation() {
    // <Ionicons name="md-person-outline" size={24} color="black" />
    // <AntDesign name="plus" size={24} color="black" />
  const Tab= createBottomTabNavigator()

    const getTabBarVisibility = (route) => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : '';

        if (routeName === 'Chat' ) {
            return false;
        }

        return true;
    }

  return (
    <Tab.Navigator 
        screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: colors.dourado,
            tabBarInactiveTintColor: colors.white,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 45,
                backgroundColor: "#000",
                borderTopColor: "transparent"
            }
        }}
    >
        <Tab.Screen name="Main" component={HomeScreen} options={{
            tabBarIcon: ({color, size}) => (
                <AntDesign name="home" size={size} color={color} />
            ),
        }} />
        <Tab.Screen name="Discover" component={DiscoverScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Fontisto name="world-o" size={size} color={color} />
                ),
            }}
        />
        <Tab.Screen name="Add" component={PostScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="plus" size={size} color={color} />
                )
            }}
        />
        <Tab.Screen name="Chat" component={ChatScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="chatbox-ellipses-outline" size={size} color={color} />
                )
            }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="md-person-outline" size={size} color={color} />
                )
            }}
        />
    </Tab.Navigator>
  )
}

export default TabBottomNavigation