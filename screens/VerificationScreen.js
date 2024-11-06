import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
    ActivityIndicator,
    ScrollView
} from "react-native";
import { validateEmail } from './services/validations';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import axios from 'axios';
import { authsendotp } from './models/ApiRoutes';
const VerificationScreen = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleVerification = async () => {
        if(!email.trim()) {
            return setErrorMessage('Enter your emaiil to proceed')
        }
        if(!validateEmail(email)) {
            return setErrorMessage('Invalid email address');
        }
        setIsLoading(true);
        const response = await axios.post(authsendotp, { email: email });
        console.log(response)
    }
    return (
        <View className="h-full w-full flex justify-center items-center">
            <Image
                source={require("../assets/7627392_app_communication_chat_conversation_messages_icon.png")}
                resizeMode="contain"
                className="h-16 w-16"
            />
                <View>
                    <Text className="text-xl font-bold text-center">Getting started with Emote</Text>
                    {!errorMessage ? <Text className="text-base text-center">Verify your email address</Text> : <Text className="text-base px-3 text-center text-red-600">{errorMessage}</Text> }
                </View>
            <View className="flex space-y-3 mt-7">
                <View className="block">
                    <Text>Email address</Text>
                    <TextInput onChangeText={(text)=>{setEmail(text)}} className="w-80 h-12 border-slate-300 rounded-2xl pl-5 border-2" />
                </View>
                <TouchableOpacity onPress={handleVerification} className="w-80 rounded-2xl flex items-center justify-center h-12 bg-blue-800">
                   { isLoading ? <ActivityIndicator size={20} color="white" /> : <Text className="text-white">Verify</Text> }
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default VerificationScreen;