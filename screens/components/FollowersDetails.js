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
import { followers, following } from "../data/followersData";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome6'
const FollowersScreen = () => {
    const [tab, setTab] = useState("foryou");
    return (
        <View className="px-3 flex space-y-5">
            <View className="flex-row space-x-[20%] w-full justify-center items-center">
                <TouchableOpacity
                    onPress={() => {
                        setTab("foryou");
                    }}
                    className="flex items-center space-y-2"
                >
                    <Text className="text-[12px]">For you</Text>
                    {tab === "foryou" ? <View className="h-1 w-10 bg-blue-800 rounded-xl" /> : ""}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setTab("followers");
                    }}
                    className="flex items-center space-y-2"
                >
                    <Text className="text-[12px]">Followers</Text>
                    {tab === "followers" ? <View className="h-1 w-10 bg-blue-800 rounded-xl" /> : ""}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setTab("following");
                    }}
                    className="flex items-center space-y-2"
                >
                    <Text className="text-[12px]">Following</Text>
                    {tab === "following" ? <View className="h-1 w-10 bg-blue-800 rounded-xl" /> : ""}
                </TouchableOpacity>
            </View>
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {tab === "foryou" && <View className="px-2 flex space-y-3">
                        {followers.map((item, index) => (
                            <TouchableOpacity className="flex-row w-full justify-between items-center">
                                <View className="flex-row space-x-3 items-center">
                                    <Image resizeMode="contain" className="h-16 rounded-full w-16" source={item.pic} />
                                    <Text>{item.name}</Text>
                                </View>
                                <TouchableOpacity className="h-10 rounded-xl w-10 border-2 border-slate-900 flex justify-center items-center"><Icon name="plus" size={20} /></TouchableOpacity>
                            </TouchableOpacity>
                        ))}
                    </View>}
                {tab === "followers" && (
                    <View className="px-2 flex space-y-3">
                        {followers.map((item, index) => (
                            <TouchableOpacity className="flex-row w-full justify-between items-center">
                                <View className="flex-row space-x-3 items-center">
                                    <Image resizeMode="contain" className="h-16 rounded-full w-16" source={item.pic} />
                                    <Text>{item.name}</Text>
                                </View>
                                <TouchableOpacity className="h-10 rounded-xl w-10 border-2 border-slate-900 flex justify-center items-center"><Icon name="plus" size={20} /></TouchableOpacity>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
                {tab === "following" && (
                    <View className="px-2 w-full flex justify-end space-y-3">
                        {following.map((item, index) => (
                            <TouchableOpacity className="flex-row w-full justify-between items-center">
                                <View className="flex-row space-x-3 items-center">
                                    <Image resizeMode="contain" className="h-16 rounded-full w-16" source={item.pic} />
                                    <Text>{item.name}</Text>
                                </View>
                                <TouchableOpacity className="h-8 rounded-3xl w-8 flex justify-center items-center"><FontAwesome name="whatsapp" size={25} /></TouchableOpacity>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default FollowersScreen;
