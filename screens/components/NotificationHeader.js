import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const NotificationHeader = ({data}) => {
    const navigation = useNavigation();
    return (
        <View className="flex-row w-full bg-slate-100 h-24 justify-between px-2 items-center">
            <View className="flex-row space-x-5 items-center">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("notification_screen");
                    }}
                    className="h-12 w-12 flex items-center justify-center rounded-full bg-slate-300"
                >
                    <Icon name="arrow-left" size={23} />
                </TouchableOpacity>
                <View className="flex-row items-center space-x-2">
                    <View className="h-14 w-14 bg-rose-300 rounded-full flex justify-center items-center">
                        <Text className="text-xl text-rose-600">M</Text>
                    </View>
                    <View><Text>{data.sender}</Text></View>
                </View>
            </View>
            <TouchableOpacity className="h-10 w-10 flex items-center justify-center rounded-full">
                <Icon name="delete-outline" size={30} />
            </TouchableOpacity>
        </View>
    );
};

export default NotificationHeader;
