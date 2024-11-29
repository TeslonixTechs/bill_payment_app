import React, { useRef, useEffect, useState } from "react";
import {
    Animated,
    TextInput,
    View,
    StatusBar,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Icon2 from "@expo/vector-icons/FontAwesome6";
import Header from "../components/Header";
import AccountInfo from "../components/AccountInfo";
import ServiceList from "../components/ServiceList2";
const Account = () => {
    const navigation = useNavigation();
    return (
        <View className="h-full w-full bg-[#f3f3f3]">
            <StatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView className="px-3 py-10 space-y-5 flex">
                    <Text className="text-[#333] text-2xl font-bold">Account Details</Text>
                    <View className="h-16 px-5 bg-[#34c759] rounded-3xl flex-row justify-between items-center">
                        <Text className="text-white text-xl">N 1800.45</Text>
                        <TouchableOpacity className="h-9 w-9 bg-[#3e8e41] rounded-full flex justify-center items-center">
                            <Icon name="plus" color="#fff" size={20} />
                        </TouchableOpacity>
                    </View>
                    <View className="px-3 py-5 w-full bg-[#e1e1e1] rounded-2xl flex space-y-3 mb-5">
                        <View className="flex-row justify-between">
                            <View className="flex-row space-x-2 items-center">
                                <Icon name="account" size={20} color="#34c759" />
                                <Text>Account name</Text>
                            </View>
                            <Text>Samuel Oni</Text>
                        </View>
                        <View className="flex-row justify-between">
                            <View className="flex-row space-x-2 items-center">
                                <Icon name="account-details-outline" size={20} color="#34c759" />
                                <Text>Account type</Text>
                            </View>
                            <Text>Savings</Text>
                        </View>
                        <View className="flex-row justify-between">
                            <View className="flex-row space-x-2 items-center">
                                <Icon name="account-details-outline" size={20} color="#34c759" />
                                <Text>Account number</Text>
                            </View>
                            <View className="flex-row space-x-2 items-center">
                                <Text>9045365786</Text>
                                <TouchableOpacity className="h-8 w-8 rounded-full bg-[#34c759] flex justify-center items-center">
                                    <Icon2 name="copy" color="#fff" size={15} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View className="flex-row justify-between">
                            <View className="flex-row space-x-2 items-center">
                                <Icon name="account-details-outline" size={20} color="#34c759" />
                                <Text>Kyc Level</Text>
                            </View>
                            <Text>Level 2</Text>
                        </View>
                    </View>
                    <ServiceList />
                </SafeAreaView>
            </ScrollView>
        </View>
    );
};

export default Account;
