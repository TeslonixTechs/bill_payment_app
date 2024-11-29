import React, { useRef, useEffect, useState } from "react";
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const LoginScreen = () => {
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate("screentab");
    };
    return (
        <View className="h-full w-full bg-[#f1f1f1] flex pt-20 items-center space-y-5">
            <StatusBar />
            <View className="w-80">
                <Text className="text-4xl font-bold text-[#333]">Welcome back</Text>
                <Text className="text-[#666]">Login to continue using your account</Text>
            </View>
            <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                <Icon name="phone" size={20} color="grey" />
                <TextInput className="flex-1 ml-2" keyboardType="phone-pad" maxLength={11} placeholder="Phone number" />
            </View>
            <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                <Icon name="email-outline" size={20} color="grey" />
                <TextInput className="flex-1 ml-2" keyboardType="text" maxLength={11} placeholder="Email address" />
            </View>
            <View className="flex items-end space-y-2">
                <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                    <Icon name="lock-outline" size={20} color="grey" />
                    <TextInput className="flex-1 ml-2" keyboardType="phone-pad" maxLength={11} placeholder="Password" />
                </View>
                <TouchableOpacity>
                    <Text className="text-[#34c759]">Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={handleLogin}
                className="bg-[#34c759] mb-1 h-12 w-80 flex items-center rounded-3xl justify-center hover:bg-[#4caf50] active:bg-[#3e8e41]"
            >
                <Text className="text-[#ffffff]">Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("registration_screen");
                }}
            >
                <Text className="text-[#34c759]">Don't have an account Sign up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
