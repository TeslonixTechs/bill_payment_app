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
    Animated,
    PanResponder,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { uploadMedia } from "../models/uploadMedia";
const PostScreen = () => {
    const [postmedia, setPostMedia] = useState('');
    const handleUploadMedia = async () => {
        const upload = await uploadMedia("all");
        setPostMedia(upload.assets[0].uri);
        console.log(upload);
        console.log(postmedia);
    };
    return (
        <ScrollView className="h-full w-full flex">
            <View className="py-10">
                <View className="flex-row space-x-5 px-3 items-center">
                    <View className="w-14 h-14 bg-zinc-200 flex justify-center items-center rounded-full">
                       <Icon name="account" size={30} color="grey" />
                    </View>
                    <Text className="text-base">Create new post</Text>
                </View>
                <TouchableOpacity onPress={handleUploadMedia} className="mt-7 h-64 w-[90%] px-3 border-2 border-zinc-200 self-center rounded-3xl flex items-center justify-center">
                    { postmedia==="" ? <View className="flex items-center"><Icon name="camera" color="gainsboro" size={30} />
                    <Text className="text-zinc-400">Upload photo</Text></View> : <Image source={{uri:postmedia}} resizeMode="contain" className="h-full rounded-3xl w-full" /> }
                </TouchableOpacity>
                <View className="mt-7">
                    <TextInput multiline placeholder="Type your post here" className="border-2 border-zinc-300 h-24 w-80 self-center rounded-3xl pb-2 pl-3 pr-2" />
                </View>
                <TouchableOpacity className="w-80 h-12 bg-blue-800 self-center rounded-2xl mt-5 flex justify-center items-center"><Text className="text-white">Post</Text></TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default PostScreen;