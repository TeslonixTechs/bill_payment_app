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
    ScrollView,
} from "react-native";
import { validateUsername, validateEmail, validateFullName, validatePassword, validateConfirmPassword } from './services/validations';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const Registration = () => {
    const navigation = useNavigation();
    const [fullname, setFullName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birthday, setBirthDay] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(true);
    // const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    // const hasDigit = /\d/;
    // const hasUpperCase = /[A-Z]/;
    // const hasLowerCase = /[a-z]/;
    useEffect(()=>{
        setFullName("");
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setBirthDay("");
    },[navigation]);
    const handleRegistration = () => {
        if(!fullname) {
            return setErrorMessage('Enter your fullname');
        }
        if(!validateFullName(fullname)) {
            return setErrorMessage('Enter your correct fullname');
        }
        if(!username) {
            return setErrorMessage('Enter your username');
        }
        if(!validateUsername(username)) {
            return setErrorMessage('Enter a correct username');
        }
        if(!birthday) {
            return setErrorMessage('Enter your Birthday dd//mm//yy')
        }
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
            return setErrorMessage('Enter a strong password e.g Password@1234');
        }
        if(!confirmPassword) {
            return setErrorMessage('Confirm your password');
        }
        if(!validateConfirmPassword(password, confirmPassword)) {
            return setErrorMessage('Incorrect password confirmation');
        }
        // navigation.navigate('main_app_screen');
    };
    return (
        <ScrollView className="h-full w-full flex bg-white" showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={`white`} barStyle={`dark-content`} />
            <SafeAreaView className="flex-1 space-y-6 pt-10 pb-8 items-center">
                <View className="flex space-y-4 items-center">
                    <Image
                        source={require("../assets/7627392_app_communication_chat_conversation_messages_icon.png")}
                        resizeMode="contain"
                        className="h-16 w-16"
                    />
                    { !errorMessage ? (
                            <View>
                                <Text className="text-xl font-bold text-center">Welcome to Emote</Text>
                                <Text className="text-base">Sign up to continue using Emote</Text>
                            </View>
                        ) : (
                            <Text className="text-base text-red-600">{errorMessage}</Text>
                        ) }
                </View>
                <KeyboardAvoidingView className="flex space-y-6">
                    <View className="block">
                        <Text>Fullname</Text>
                        <TextInput onChangeText={(text)=>{setFullName(text)}} className="w-80 h-12 border-slate-300 rounded-2xl pl-5 border-2" />
                    </View>
                    <View className="block">
                        <Text>Username</Text>
                        <TextInput onChangeText={(text)=>{setUserName(text)}} className="w-80 h-12 border-slate-300 rounded-2xl pl-5 border-2" />
                    </View>
                    <View className="block">
                        <Text>BirthDay</Text>
                        <TextInput onChangeText={(text)=>{setBirthDay(text)}} className="w-80 h-12 border-slate-300 rounded-2xl pl-5 border-2" />
                    </View>
                    <View className="block">
                        <Text>Email address</Text>
                        <TextInput onChangeText={(text)=>{setEmail(text)}} className="w-80 h-12 border-slate-300 rounded-2xl pl-5 border-2" />
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
                    <View className="block">
                        <Text>Confirm Password</Text>
                        <View className="relative w-80 h-12">
                            <TextInput
                                onChangeText={(text) => {
                                    setConfirmPassword(text);
                                }}
                                secureTextEntry={isShowPassword}
                                className="w-80 h-12 border-slate-300 rounded-2xl pl-5 border-2"
                            />
                            <TouchableOpacity onPress={()=>{isShowPassword ? setIsShowPassword(false) : setIsShowPassword(true)}} className="absolute h-12 flex justify-center right-0 w-10 items-center">
                                <Icon name={`${isShowPassword ? 'eye' : 'eye-off'}`} color={`gray`} size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
                <TouchableOpacity onPress={handleRegistration} className="w-80 rounded-2xl flex items-center justify-center h-12 bg-blue-800">
                    <Text className="text-white">Register</Text>
                </TouchableOpacity>
                <View className="flex flex-row space-x-3 items-center">
                    <Text>Already have an account</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('login_screen')}}>
                        <Text className="text-base text-blue-800 underline">Login</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex flex-wrap space-x-3 items-center">
                    <Text>By creating an account you agree to Emote</Text>
                    <TouchableOpacity>
                        <Text className="text-base text-blue-800 underline">Terms and Policies</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Registration;