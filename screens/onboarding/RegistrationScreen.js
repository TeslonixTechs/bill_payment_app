import React, { useRef, useEffect, useState } from "react";
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const RegistrationScreen = () => {
    const navigation = useNavigation();
	const slideDownAnimation = useRef(new Animated.Value(-1000)).current;
	useEffect(()=>{
		Animated.timing(slideDownAnimation, {
			toValue: 0,
			duration: 1300,
			useNativeDriver: true
		}).start();
	},[])
    const handleRegistration = () => {
        navigation.navigate("personal_details");
    };
    return (
        <SafeAreaView className="h-full w-full bg-[#f1f1f1] flex items-center space-y-5 pt-20">
            <StatusBar />
            <View className="w-80">
                <Text className="text-4xl font-bold text-[#333]">Welcome</Text>
                <Text className="text-[#666]">Register to continue using Name!</Text>
            </View>
            <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                <Icon name="lock-outline" size={20} color="grey" />
                <TextInput className="flex-1 ml-2" keyboardType="text" maxLength={11} placeholder="Fullname" />
            </View>
            <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                <Icon name="phone" size={20} color="grey" />
                <TextInput className="flex-1 ml-2" keyboardType="phone-pad" maxLength={11} placeholder="Phone number" />
            </View>
            <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                <Icon name="email-outline" size={20} color="grey" />
                <TextInput className="flex-1 ml-2" keyboardType="text" maxLength={11} placeholder="Email address" />
            </View>
            <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                <Icon name="lock-outline" size={20} color="grey" />
                <TextInput className="flex-1 ml-2" keyboardType="text" maxLength={11} placeholder="Password" />
            </View>
            <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                <Icon name="lock-outline" size={20} color="grey" />
                <TextInput className="flex-1 ml-2" keyboardType="text" maxLength={11} placeholder="Confirm Password" />
            </View>
            <TouchableOpacity
                onPress={handleRegistration}
                className="bg-[#34c759] mb-1 h-12 w-80 flex items-center rounded-3xl justify-center hover:bg-[#4caf50] active:bg-[#3e8e41]"
            >
                <Text className="text-[#ffffff]">Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("login_screen");
                }}
            >
                <Text className="text-[#34c759]">Alreaady have an account Sign In</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default RegistrationScreen;
