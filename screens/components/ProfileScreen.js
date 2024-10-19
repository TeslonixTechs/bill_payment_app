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
    ScrollView
} from "react-native";
import Header from './Header';
import { Avatar } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { uploadMedia } from '../models/uploadMedia';
const ProfileScreen = () => {
    const [profilepic, setProfilePic] = useState('file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Femote-3e05973e-6cfd-408b-b64d-381baa7a7a56/ImagePicker/3b6066e1-a89a-4130-81e1-bf5fc891be78.jpeg')
    const editProfilePicture = async () => {
        const pic = await uploadMedia('picture');
        setProfilePic(pic.assets[0].uri);
        console.log(profilepic);
    }
    const [tab, setTab] = useState('profile')
    return (
        <View className="h-full w-full bg-slate-200">
            <StatusBar />
            <Header heading="Profile" />
            <View className="w-full flex items-center pt-3">
                <View className="relative flex-row items-end"><Avatar.Image size={140} source={{uri:profilepic}} /><TouchableOpacity onPress={editProfilePicture} className="h-12 absloute w-12 bg-white rounded-full -ml-8 flex justify-center items-center"><Icon name="pencil" color="darkblue" size={25} /></TouchableOpacity></View>
                <Text className="mt-3 mb-7 text-2xl font-bold">Teslonix</Text>
                <View className="px-4 mb-7 border-b-2 border-zinc-300 h-16 w-full">
                    <View className="w-full flex-row justify-evenly items-center h-full">
                        <TouchableOpacity className="flex items-center space-y-3" onPress={()=>{setTab('profile')}}><Text className="text-base">Profile</Text>{tab==='profile' ? <View className="h-1 w-16 rounded-xl bg-blue-800" /> : ''}</TouchableOpacity>
                        <TouchableOpacity className="flex items-center space-y-3" onPress={()=>{setTab('followers')}}><Text className="text-base">Followers</Text>{tab==='followers' ? <View className="h-1 w-16 rounded-xl bg-blue-800" /> : ''}</TouchableOpacity>
                        <TouchableOpacity className="flex items-center space-y-3" onPress={()=>{setTab('photos')}}><Text className="text-base">Photos</Text>{tab==='photos' ? <View className="h-1 w-16 rounded-xl bg-blue-800" /> : ''}</TouchableOpacity>
                        <TouchableOpacity className="flex items-center space-y-3" onPress={()=>{setTab('video')}}><Text className="text-base">Videos</Text>{tab==='video' ? <View className="h-1 w-16 rounded-xl bg-blue-800" /> : ''}</TouchableOpacity>
                    </View>
                </View>
                <View className="px-3 flex">
                    <View className="flex-row w-full items-center justify-between">
                        <View className="flex-row items-center">
                            <Icon name="email-outline" size={25} color={`darkblue`} />
                            <View className="w-2" />
                            <Text>Email</Text>
                        </View>
                        <View>
                            <Text>Johndoe@gmail.com</Text>
                        </View>
                    </View>
                    <View className="h-8" />
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Icon name="phone" size={25} color={`darkblue`} />
                            <View className="w-2" />
                            <Text>Phone Number</Text>
                        </View>
                        <View>
                            <Text>
                                <TouchableOpacity>
                                    <Icon size={20} color={`darkblue`} name="pencil" />
                                </TouchableOpacity>
                                08166564618
                            </Text>
                        </View>
                    </View>
                    <View className="h-8" />
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Icon name="map-marker-outline" size={25} color={`darkblue`} />
                            <View className="w-2" />
                            <Text>Address</Text>
                        </View>
                        <View className="items-end w-1/2">
                            <Text>
                                <TouchableOpacity>
                                    <Icon size={20} color={`darkblue`} name="pencil" />
                                </TouchableOpacity>
                                No 1 Road 202 Federal Housing Akure
                            </Text>
                        </View>
                    </View>
                    <View className="h-8" />
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Icon name="help-circle-outline" size={25} color={`darkblue`} />
                            <View className="w-2" />
                            <Text>About</Text>
                        </View>
                        <View className="items-end w-1/2">
                            <Text>
                                <TouchableOpacity>
                                    <Icon size={20} color={`darkblue`} name="pencil" />
                                </TouchableOpacity>
                                Web developer
                            </Text>
                        </View>
                    </View>
                    <View className="flex items-center"><TouchableOpacity className="h-[50px] mt-7 rounded-3xl w-72 bg-red-600 flex-row justify-center items-center space-x-2"><Icon name="logout" size={30} color={`white`} /><Text className="text-white text-base">Logout</Text></TouchableOpacity></View>
                </View>
            </View>
        </View>
    )
};

export default ProfileScreen;