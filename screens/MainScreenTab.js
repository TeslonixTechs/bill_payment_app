import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    ImageBackground,
    View,
    SafeAreaView,
    Text,
    StatusBar,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import HomeScreen from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import ReelsScreen from "./components/ReelsScreen";
import SettingsScreen from "./components/SettingsScreen";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import PostScreen from "./components/PostScreen";

const MainScreenTab = () => {
    const [routeName, setRouteName] = useState('home');
    const handleTabNavigation = (label) => {
        setRouteName(label);
    };
  return (
    <View className="h-full w-full flex">
        <StatusBar />
      <SafeAreaView className="flex-1">
            { routeName === 'home' && (
                <HomeScreen />
            ) }
            { routeName === 'search' && (
                <SearchScreen />
            ) }
            { routeName === 'reels' && (
                <ReelsScreen />
            ) }
            { routeName === 'settings' && (
                <SettingsScreen />
            ) }
            { routeName === 'post' && (
                <PostScreen />
            ) }
            <View className="shadow shadow-zinc-600 bg-white h-16 flex flex-row items-center justify-around">
                <TouchableOpacity onPress={()=>{handleTabNavigation('home')}} className={`flex items-center space-y-1`}><View className={`h-8 w-12 rounded-2xl flex justify-center items-center ${routeName === 'home' ? 'bg-blue-300' : 'bg-none'}`}><Icon name="home-outline" size={20} color={`${routeName === 'home' ? 'blue' : 'black'}`} /></View><Text>Home</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{handleTabNavigation('search')}} className={`flex items-center space-y-1`}><View className={`h-8 w-12 rounded-2xl flex justify-center items-center ${routeName === 'search' ? 'bg-blue-300' : 'bg-none'}`}><Icon name="magnify" size={20} color={`${routeName === 'search' ? 'blue' : 'black'}`} /></View><Text>Search</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{handleTabNavigation('post')}} className={`flex items-center space-y-1`}><View className={`h-9 w-14 rounded-lg bg-blue-800 flex justify-center items-center`}><Icon name="plus" size={20} color={`#fff`} /></View><Text>Post</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{handleTabNavigation('reels')}} className={`flex items-center space-y-1`}><View className={`h-8 w-12 rounded-2xl flex justify-center items-center ${routeName === 'reels' ? 'bg-blue-300' : 'bg-none'}`}><Icon name="movie-outline" size={20} color={`${routeName === 'reels' ? 'blue' : 'black'}`} /></View><Text>Reels</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{handleTabNavigation('settings')}} className={`flex items-center space-y-1`}><View className={`h-8 w-12 rounded-2xl flex justify-center items-center ${routeName === 'settings' ? 'bg-blue-300' : 'bg-none'}`}><Icon name="cog-outline" size={20} color={`${routeName === 'settings' ? 'blue' : 'black'}`} /></View><Text>Settings</Text></TouchableOpacity>
            </View>
      </SafeAreaView>
    </View>
  );
};

export default MainScreenTab;