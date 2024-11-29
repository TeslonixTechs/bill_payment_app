import React, { useRef, useEffect, useState } from "react";
import { Animated, View, StatusBar, Text, Image, TouchableOpacity, Button, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
    const navigation = useNavigation();
    return (
        <View className="h-full w-full bg-[#f8f5ee] flex items-center justify-end pb-20">
            <Image source={require('../../assets/pic.jpg')} resizeMode="contain" className="max-w-md" /> 
			<Text className="text-2xl font-bold text-[#333333] mb-1">Welcome to [Bank Name]!</Text>
			<Text className="text-base text-[#666666] mb-3">Your trusted partner for financial growth</Text>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("registration_screen");
				}}
				className="bg-[#4567b7] mb-1 h-12 w-72 flex items-center rounded-3xl justify-center hover:bg-[#4567b7] active:bg-[#4567b7]"
			>
				<Text className="text-[#ffffff]">Sign up</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("login_screen");
				}}
				className="border-[#34c759] border-2 h-12 w-72 flex items-center rounded-3xl justify-center hover:bg-[#4caf50] active:bg-[#3e8e41]"
			>
				<Text className="text-[#666666]">Sign In</Text>
			</TouchableOpacity>
        </View>
    );
};

export default Onboarding;
