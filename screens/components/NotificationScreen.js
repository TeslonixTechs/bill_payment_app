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
import Header from "./Header"
import { notifications, setNotifications } from "../data/notificationData";
const NotificationScreen = () => {
    const navigation = useNavigation();
    const handleShowNotification = (index) => {
        const data = notifications[index];
        navigation.navigate('view_notification', { data: data });
    };
    return (
        <View className="h-full w-full flex bg-slate-100">
            <StatusBar />
            <Header heading="Notifications" />
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
                <View className="flex pt-5">
                    { notifications.map((item,index)=>(
                            <TouchableOpacity onPress={()=>{handleShowNotification(index)}} key={index} className="items-center px-2 w-full justify-between h-20 active:bg-zinc-400 flex-row">
                                <View className="flex-row items-center space-x-3">
                                    <View className="h-14 w-14 bg-rose-300 rounded-full flex justify-center items-center"><Text className="text-xl text-rose-600">M</Text></View>
                                    <View>
                                        <Text className="text-lg font-bold">{item.name}</Text>
                                        <Text>{item.description}</Text>
                                    </View>
                                </View>
                                <Text className="text-[12px]">{item.time}</Text>
                            </TouchableOpacity>
                        )) }
                </View>
            </ScrollView>
        </View>
    )
}

export default NotificationScreen;