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
import { validateUsername, validateEmail, validateFullName, validatePassword, validateConfirmPassword, validateGender } from './services/validations';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import axios from 'axios';
import { authregister } from './models/ApiRoutes';
import { Checkbox } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    const [isLoading, setIsLoading] = useState(false);
    const [policies, setPolicies] = useState('');
    const [gender, setGender] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    useEffect(()=>{
        setFullName("");
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setBirthDay("");
    },[navigation]);
    const handleRegistration = async () => {
    //     if(!fullname) {
    //         return setErrorMessage('Enter your fullname');
    //     }
    //     if(!validateFullName(fullname)) {
    //         return setErrorMessage('Enter your correct fullname');
    //     }
    //     if(!username) {
    //         return setErrorMessage('Enter your username');
    //     }
    //     if(!validateUsername(username)) {
    //         return setErrorMessage('Enter a correct username');
    //     }
    //     if(!birthday) {
    //         return setErrorMessage('Enter your Birthday dd//mm//yy')
    //     }
    //     if(!email) {
    //         return setErrorMessage('Enter your email address');
    //     }
    //     if(!gender) {
    //         return setErrorMessage('Select your gender')
    //     }
    //     if(!validateEmail(email)) {
    //         return setErrorMessage('Enter a correct email address');
    //     }
    //     if(!password) {
    //         return setErrorMessage('Enter your password');
    //     }
    //     if(!validatePassword(password)) {
    //         return setErrorMessage('Enter a strong password e.g Password@1234');
    //     }
    //     if(!confirmPassword) {
    //         return setErrorMessage('Confirm your password');
    //     }
    //     if(!validateConfirmPassword(password, confirmPassword)) {
    //         return setErrorMessage('Incorrect password confirmation');
    //     }
    //     if(policies!=='isAgreed') {
    //         return setErrorMessage('You must agree with the app policies to continue using emote')
    //     }
    //     try {
    //         setIsLoading(true);
    //     const data = {
    //         name:fullname,
    //         email: email,
    //         username: username,
    //         password: password,
    //         gender: gender,
    //         phonenumber: phonenumber,
    //         birthday: birthday
    //     };
    //     const response = await axios.post(authregister, data)
    //     .then((response)=>(
    //         console.log(response)
    //     ))
    // } catch (error) {
    //     setIsLoading(false);
    //     console.log(error);
    //     // navigation.navigate('main_app_screen');
    // }
    navigation.navigate('main_app_screen');
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
                        <Text className="text-base px-3 text-center text-red-600">{errorMessage}</Text>
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
                        <Text>Phone Number</Text>
                        <TextInput maxLength={11} keyboardType="phone-pad" onChangeText={(text)=>{setPhonenumber(text)}} className="w-80 h-12 border-slate-300 rounded-2xl pl-5 border-2" />
                    </View>
                    <View className="flex-row justify-evenly">
                        <View className="flex items-center"><RadioButton value="male" status={gender === 'male' ? 'checked' : 'unchecked'} onPress={()=> {setGender('male')}} size={20} color="blue" /><Text>male</Text></View>
                        <View className="flex items-center"><RadioButton value="female" status={gender === 'female' ? 'checked' : 'unchecked'} onPress={()=> {setGender('female')}} size={20} color="blue" /><Text>female</Text></View>
                        <View className="flex items-center"><RadioButton value="other" status={gender === 'other' ? 'checked' : 'unchecked'} onPress={()=> {setGender('other')}} size={20} color="blue" /><Text>other</Text></View>
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
                    { isLoading ? <ActivityIndicator size={20} color="white" /> : <Text className="text-white">Register</Text> }
                </TouchableOpacity>
                <View className="flex flex-row space-x-3 items-center">
                    <Text>Already have an account</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('login_screen')}}>
                        <Text className="text-base text-blue-800 underline">Login</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex flex-wrap space-x-3 items-center">
                    <Text>By creating an account you agree to Emote</Text>
                    <TouchableOpacity className="flex-row items-center">
                        <Text className="text-base text-blue-800 underline">Terms and Policies</Text>
                        <Checkbox value="isAgreed" color={`blue`} status={policies === 'isAgreed' ? 'checked' : 'unchecked'} onPress={()=> {policies==='isAgreed' ? setPolicies('notAgreed') : setPolicies('isAgreed')}} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Registration;
