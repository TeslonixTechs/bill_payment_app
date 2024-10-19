import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
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
} from "react-native";
import { validateEmail, validatePassword } from './services/validations';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const handleLogin = () => {
        if(!email) {
            return setErrorMessage('Enter your email address');
        }
        if(!validateEmail(email)) {
            return setErrorMessage('Enter a correct email address');
        }
        if(!password) {
            return setErrorMessage('Enter your password');
        }
        if(!validatePassword(password)) {
            return setErrorMessage('Enter a correct password');
        }
    };
    return (
        <View className="h-full w-full flex items-center bg-white">
            <StatusBar backgroundColor={`white`} barStyle={`dark-content`} />
            <SafeAreaView className="flex-1 space-y-6 pt-10 items-center">
                <View className="flex space-y-4 items-center">
                    <Image
                        source={require("../assets/7627392_app_communication_chat_conversation_messages_icon.png")}
                        resizeMode="contain"
                        className="h-16 w-16"
                    />
                    <Text className="text-xl font-bold text-center">Welcome back to Emote</Text>
                    {!email ? <Text className="text-base">Sign in to continue using your account</Text>
                     : <Text className="text-base text-red-600">{errorMessage}</Text>
                    }
                </View>
                <KeyboardAvoidingView className="flex space-y-6">
                    <View className="block">
                        <Text>Email address</Text>
                        <TextInput
                            onChangeText={(text) => {
                                setEmail(text);
                            }}
                            className="w-80 h-12 border-slate-300 rounded-2xl pl-5 border-2"
                        />
                    </View>
                    <View className="block">
                        <Text>Password</Text>
                        <View className="relative w-80 h-12">
                            <TextInput
                                onChangeText={(text) => {
                                    setPassword(text);
                                }}
                                secureTextEntry={isShowPassword}
                                className="w-80 h-12 border-slate-300 rounded-2xl pl-5 border-2"
                            />
                            <TouchableOpacity onPress={()=>{isShowPassword ? setIsShowPassword(false) : setIsShowPassword(true)}} className="absolute h-12 flex justify-center right-0 w-10 items-center">
                                <Icon name={`${isShowPassword ? 'eye' : 'eye-off'}`} color={`gray`} size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="flex flex-row justify-between w-80">
                        <TouchableOpacity className="flex-row">
                            <Icon name="fingerprint" size={20} />
                            <Text>Login with fingerprint</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text className="text-blue-800">Forgot password</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                <TouchableOpacity onPress={handleLogin} className="w-80 rounded-2xl flex items-center justify-center h-12 bg-blue-800">
                    <Text className="text-white">Sign In</Text>
                </TouchableOpacity>
                <View className="flex flex-row space-x-3 items-center">
                    <Text>Don't have an account</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("registration_screen");
                        }}
                    >
                        <Text className="text-base text-blue-800 underline">Register</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default LoginScreen;