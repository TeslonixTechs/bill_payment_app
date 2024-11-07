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
import VerificationScreen from './screens/VerificationScreen';
import CollectionScreen from './screens/components/CollectionScreen';
import TermsPoliciesScreen from './screens/components/TermsPoliciesScreen';
import HelpScreen from './screens/components/HelpScreen';
import ActivityScreen from './screens/components/ActivityScreen';
import BlockActivityScreen from './screens/components/BlockActivityScreen';
import CameraScreen from "./screens/components/CameraScreen";
import { PaperProvider } from 'react-native-paper';
export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="main_app_screen"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="splash_screen" component={SplashScreen} />
                    <Stack.Screen name="verification_screen" component={VerificationScreen} />
                    <Stack.Screen name="login_screen" component={LoginScreen} />
                    <Stack.Screen name="registration_screen" component={Registration} />
                    <Stack.Screen name="main_app_screen" component={MainScreenTab} />
                    <Stack.Screen name="story_screen" component={StoryScreen} />
                    <Stack.Screen name="notification_screen" component={NotificationScreen} />
                    <Stack.Screen name="profile" component={ProfileScreen} />
                    <Stack.Screen name="chats" component={ChatScreen} />
                    <Stack.Screen name="message" component={MessageScreen} />
                    <Stack.Screen name="view_notification" component={ShowNotificationScreen} />
                    <Stack.Screen name="collection" component={CollectionScreen} />
                    <Stack.Screen name="termsandpolicies" component={TermsPoliciesScreen} />
                    <Stack.Screen name="help" component={HelpScreen} />
                    <Stack.Screen name="activity" component={ActivityScreen} />
                    <Stack.Screen name="camera" component={CameraScreen} />
                    <Stack.Screen name="block" component={BlockActivityScreen} />
                </Stack.Navigator>
            </NavigationContainer>  
        </PaperProvider>      
    );
};