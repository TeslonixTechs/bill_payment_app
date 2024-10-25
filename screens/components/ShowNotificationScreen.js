import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState, useRef } from "react";
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
    Platform
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { FontAwesome } from "@expo/vector-icons";
import NotificationHeader from "./NotificationHeader";

const ShowNotificationScreen = () => {
    const { params } = useRoute();;
	const data = params?.data;
    return (
        <View className="h-full w-full flex">
            <NotificationHeader data={data} />
            <ScrollView className="flex-1">
                <View className="w-full space-y-3 h-full flex px-2">
                    <View className="w-full flex items-end"><Text>{data.time}</Text></View>
                    <View className="w-full flex items-center"><Text className="font-bold text-2xl">{data.name}</Text></View>
                    <View>
                        <Text>{data.body}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default ShowNotificationScreen;