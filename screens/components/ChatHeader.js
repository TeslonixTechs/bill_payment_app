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

const ChatHeader = ({data}) => {
    const navigation = useNavigation();
    return (
        <View className="flex-row w-full bg-slate-100 h-24 justify-between px-2 items-center">
            <View className="flex-row space-x-5 items-center">
                <TouchableOpacity onPress={()=>{navigation.navigate('chats')}} className="h-12 w-12 flex items-center justify-center rounded-full bg-slate-300"><Icon name="arrow-left" size={23} /></TouchableOpacity>
                <TouchableOpacity className="flex-row items-center space-x-2">
                    <Image source={data.photo} resizeMode="cover" className="h-14 w-14 rounded-full" />
                    <View className="flex justify-center"><Text className="text-base">{data.name}</Text><Text className="text-zinc-600">{data.last_seen}</Text></View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity className="h-10 w-10 flex items-center justify-center rounded-full"><Icon name="dots-vertical" size={30} /></TouchableOpacity>
        </View>
    )
}

export default ChatHeader;