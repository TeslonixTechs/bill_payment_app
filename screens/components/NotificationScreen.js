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
const NotificationScreen = () => {
    const array = ['','','','','','','','','','','','',''];
    const getTime = () => {
        const msgTimeHour = new Date().getHours();
        const msgTimeMin = new Date().getMinutes();
        let newMsgTimeHour;
        let newMsgTimeMin;
        if(msgTimeHour < 10){
            newMsgTimeHour = '0'+msgTimeHour;
        } else {
            newMsgTimeHour = msgTimeHour;
        }
        if(msgTimeMin < 10){
            newMsgTimeMin = '0'+msgTimeMin;
        } else {
            newMsgTimeMin = msgTimeMin;
        }
        const msgTime = newMsgTimeHour + ':' + newMsgTimeMin;
        return msgTime;
    };
    return (
        <View className="h-full w-full flex bg-slate-100">
            <StatusBar />
            <Header heading="Notifications" />
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
                <View className="flex pt-5">
                    { array.map((item,index)=>(
                            <TouchableOpacity key={index} className="items-center px-2 w-full justify-between h-20 active:bg-zinc-400 flex-row">
                                <View className="flex-row items-center space-x-3">
                                    <View className="h-14 w-14 bg-rose-300 rounded-full flex justify-center items-center"><Text className="text-xl text-rose-600">M</Text></View>
                                    <View>
                                        <Text className="text-lg font-bold">Test</Text>
                                        <Text>This is a test notification</Text>
                                    </View>
                                </View>
                                <Text className="text-[12px]">{getTime()}</Text>
                            </TouchableOpacity>
                        )) }
                </View>
            </ScrollView>
        </View>
    )
}

export default NotificationScreen;