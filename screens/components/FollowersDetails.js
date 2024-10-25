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
import { followers, following, setFollowers, setFollowing } from "../data/followersData";
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
const FollowersScreen = () => {
    const [tab, setTab] = useState("foryou");
    return (
        <View className="px-3 flex">
            <View className="flex-row justify-around items-center">
                <TouchableOpacity
                    onPress={() => {
                        setTab("foryou");
                    }}
                    className="flex items-center space-y-2"
                >
                    <Text className="text-[12px]">For you</Text>
                    {tab === "foryou" ? <View className="h-1 w-10" /> : ""}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setTab("followers");
                    }}
                    className="flex items-center space-y-2"
                >
                    <Text className="text-[12px]">Followers</Text>
                    {tab === "followers" ? <View className="h-1 w-10" /> : ""}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setTab("following");
                    }}
                    className="flex items-center space-y-2"
                >
                    <Text className="text-[12px]">Following</Text>
                    {tab === "following" ? <View className="h-1 w-10" /> : ""}
                </TouchableOpacity>
            </View>
            <ScrollView>
                {tab === "foryou" && <View className="px-2 flex"></View>}
                {tab === "followers" && (
                    <View className="px-2 flex">
                        {followers.map((item, index) => (
                            <TouchableOpacity className="flex-row justify-between">
                                <View className="flex-row space-x-3">
                                    <Image source={item.pic} />
                                    <Text>{item.name}</Text>
                                </View>
                                <TouchableOpacity className="h-12 w-10 border-2 border-slate-900 flex justify-center items-center"><Icon name="plus" size={20} /></TouchableOpacity>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
                {tab === "following" && (
                    <View className="px-2 flex">
                        {following.map((item, index) => (
                            <TouchableOpacity className="flex-row space-x-3">
                                <Image source={item.pic} />
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default FollowersScreen;
