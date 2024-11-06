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
import Header from "./Header";
import { Avatar } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { uploadMedia } from "../models/uploadMedia";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfileDetails from "./ProfileDetails";
import FollowersDetails from './FollowersDetails';
const ProfileScreen = () => {
    const navigation = useNavigation();
    const [profilepic, setProfilePic] = useState(
        ""
    );
    const editProfilePicture = async () => {
        const pic = await uploadMedia("picture");
        setProfilePic(pic.assets[0].uri);
        console.log(profilepic);
    };
    const getUserData = async () => {
        const userdata = await AsyncStorage.getItem("userdata");
        return userdata;
    };
    useEffect(() => {
        console.log(getUserData());
    });
    const [tab, setTab] = useState("profile");
    const handleLogout = async () => {
        await AsyncStorage.removeItem("token");
        navigation.navigate("login_screen");
    };
    return (
        <View className="h-full w-full bg-slate-200">
            <StatusBar />
            <Header heading="Profile" />
            <View className="w-full flex items-center pt-3">
                <View className="relative flex-row items-end">
                    { profilepic==="" ? <View className="h-36 w-36 bg-zinc-300 rounded-full flex items-center justify-center"><Icon name="account" color="grey" size={40} /></View> : <Avatar.Image size={140} source={{ uri: profilepic }} /> }
                    <TouchableOpacity
                        onPress={editProfilePicture}
                        className="h-12 absloute w-12 bg-white rounded-full -ml-8 flex justify-center items-center"
                    >
                        <Icon name="pencil" color="darkblue" size={25} />
                    </TouchableOpacity>
                </View>
                <Text className="mt-3 mb-7 text-2xl font-bold">Teslonix</Text>
                <View className="px-4 mb-7 border-b-2 border-zinc-300 h-16 w-full">
                    <View className="w-full flex-row justify-evenly items-center h-full">
                        <TouchableOpacity
                            className="flex items-center space-y-3"
                            onPress={() => {
                                setTab("profile");
                            }}
                        >
                            <Text className="text-base">Profile</Text>
                            {tab === "profile" ? <View className="h-1 w-16 rounded-xl bg-blue-800" /> : ""}
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="flex items-center space-y-3"
                            onPress={() => {
                                setTab("followers");
                            }}
                        >
                            <Text className="text-base">Followers</Text>
                            {tab === "followers" ? <View className="h-1 w-16 rounded-xl bg-blue-800" /> : ""}
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="flex items-center space-y-3"
                            onPress={() => {
                                setTab("photos");
                            }}
                        >
                            <Text className="text-base">Photos</Text>
                            {tab === "photos" ? <View className="h-1 w-16 rounded-xl bg-blue-800" /> : ""}
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="flex items-center space-y-3"
                            onPress={() => {
                                setTab("video");
                            }}
                        >
                            <Text className="text-base">Videos</Text>
                            {tab === "video" ? <View className="h-1 w-16 rounded-xl bg-blue-800" /> : ""}
                        </TouchableOpacity>
                    </View>
                </View>
                { tab === 'profile' && (<ProfileDetails handleLogout={handleLogout} />) }
                { tab === 'followers' && (<FollowersDetails />) }
                { tab === 'photos' && (<View />) }
                { tab === 'video' && (<View />) }
            </View>
        </View>
    );
};

export default ProfileScreen;
