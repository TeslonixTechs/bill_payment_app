import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, ImageBackground, ActivityIndicator } from "react-native";
import { Permissions } from './utils/permissions'
const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timeoutNavigate = setTimeout(() => {
            navigation.navigate('login_screen');
            Permissions();
        }, 5000);
        return () => clearTimeout(timeoutNavigate);
    }, []);

    return (
        <View className="h-full relative w-full flex bg-slate-100 justify-center items-center">
            <ImageBackground
                source={require("../assets/9950829.png")}
                className="absolute bg-slate-100 top-0 h-full w-full -z-50"
                resizeMode="contain"
            ></ImageBackground>
            <View className="absolute bottom-28 space-y-5">
                <Text className="text-base">Feel | Express | Connect</Text>
                <ActivityIndicator size={35} color={`blue`} />
            </View>
        </View>
    );
};

export default SplashScreen;
