import React, { useRef, useEffect, useState } from "react";
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const SecureAccount = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="h-full w-full bg-[#f1f1f1] flex items-center space-y-5 pt-20">
            <StatusBar />
            <View className="w-80">
                <Text className="text-4xl font-bold text-[#333]">Security Settings</Text>
                <Text className="text-[#666]">Secure your account</Text>
            </View>
            <View className="bg-white w-60 h-44 rounded-xl flex items-center justify-center">
                <Icon name="fingerprint" size={80} color="grey" />
            </View>
            <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                <Icon name="two-factor-authentication" size={20} color="grey" />
                <TextInput className="flex-1 ml-2" keyboardType="text" maxLength={11} placeholder="Otp" />
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("policies");
                }}
                className="bg-[#34c759] mb-1 h-12 w-80 flex items-center rounded-3xl justify-center hover:bg-[#4caf50] active:bg-[#3e8e41]"
            >
                <Text className="text-[#ffffff]">Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SecureAccount;
