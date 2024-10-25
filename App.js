import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, ActivityIndicator } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import Registration from "./screens/Registration";
import MainScreenTab from "./screens/MainScreenTab";
import StoryScreen from "./screens/components/StoryScreen";
import NotificationScreen from "./screens/components/NotificationScreen";
import ProfileScreen from "./screens/components/ProfileScreen";
import ChatScreen from "./screens/components/ChatScreen";
import MessageScreen from "./screens/components/MessageScreen";
import ShowNotificationScreen from './screens/components/ShowNotificationScreen';
export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="splash_screen"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="splash_screen" component={SplashScreen} />
                <Stack.Screen name="login_screen" component={LoginScreen} />
                <Stack.Screen name="registration_screen" component={Registration} />
                <Stack.Screen name="main_app_screen" component={MainScreenTab} />
                <Stack.Screen name="story_screen" component={StoryScreen} />
                <Stack.Screen name="notification_screen" component={NotificationScreen} />
                <Stack.Screen name="profile" component={ProfileScreen} />
                <Stack.Screen name="chats" component={ChatScreen} />
                <Stack.Screen name="message" component={MessageScreen} />
                <Stack.Screen name="view_notification" component={ShowNotificationScreen} />
            </Stack.Navigator>
        </NavigationContainer>        
    );
};