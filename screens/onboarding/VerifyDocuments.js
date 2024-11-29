import React, { useRef, useEffect, useState } from "react";
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const VerifyDocuments = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="h-full w-full bg-[#f1f1f1] flex items-center space-y-5 pt-20">
            <StatusBar />
            <View className="w-80">
                <Text className="text-4xl font-bold text-[#333]">Documents Verification</Text>
                <Text className="text-[#666]">Verify your documents</Text>
            </View>
            <View className="bg-white w-80 h-52 rounded-xl flex items-center justify-center">
                <Icon name="camera-outline" size={25} color="grey" />
            </View>
            <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                <Icon name="office-building-outline" size={20} color="grey" />
                <TextInput className="flex-1 ml-2" keyboardType="text" maxLength={11} placeholder="Nin" />
            </View>
            <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                <Icon name="map-marker-outline" size={20} color="grey" />
                <TextInput className="flex-1 ml-2" keyboardType="text" maxLength={11} placeholder="Bvn" />
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("secureaccount");
                }}
                className="bg-[#34c759] mb-1 h-12 w-80 flex items-center rounded-3xl justify-center hover:bg-[#4caf50] active:bg-[#3e8e41]"
            >
                <Text className="text-[#ffffff]">Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default VerifyDocuments;
