import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, ImageBackground, ActivityIndicator } from "react-native";
import { Permissions } from './utils/permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timeoutNavigate = setTimeout(async() => {
            const token = await AsyncStorage.getItem('token');
            Permissions();
            if(token===null){
               navigation.navigate('login_screen');
            }
            else {
                navigation.navigate('main_app_screen')
            }
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
