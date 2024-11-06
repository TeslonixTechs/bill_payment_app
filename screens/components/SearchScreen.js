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
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import * as AV from "expo-av";
const verifiedBadge = require('../images/badge2.jpeg');
const profilepic = require('../images/teslonix.jpg');
const SearchScreen = () => {
    const array = ["", "", "", "", "", "", "", "", "", "", "", ""];
    const popularpeople = [
        {
            name: 'Teslonix',
            profilepic: profilepic,
            isVerified: true
        },
        {
            name: 'Teslonix',
            profilepic: profilepic,
            isVerified: true
        },
        {
            name: 'Teslonix',
            profilepic: profilepic,
            isVerified: true
        },
        {
            name: 'Teslonix',
            profilepic: profilepic,
            isVerified: true
        },
        {
            name: 'Teslonix',
            profilepic: profilepic,
            isVerified: true
        },
        {
            name: 'Teslonix',
            profilepic: profilepic,
            isVerified: true
        },
    ];
    return (
        <View className="flex-1 bg-slate-100">
            <View className="w-full pb-5 pt-3 items-center relative">
                <View className="w-[95%] items-start justify-center flex">
                    <TextInput placeholder={`Search`} className="w-full pl-10 h-12 border-2 border-slate-300 rounded-3xl" />
                    <View className="absolute ml-3">
                        <Icon size={20} name="magnify" />
                    </View>
                </View>
            </View>
            <View className="w-full gap-3 px-3 flex-row flex-wrap pb-5">
                <TouchableOpacity className="h-10 items-center justify-between rounded-3xl border-zinc-300 px-3 flex-row w-[45%] border">
                    <Text className="text-base text-zinc-500">Tesla</Text>
                    <Icon name="magnify" size={20} color={`gainsboro`} />
                </TouchableOpacity>
                <TouchableOpacity className="h-10 items-center justify-between rounded-3xl border-zinc-300 px-3 flex-row w-[45%] border">
                    <Text className="text-base text-zinc-500">Tesla</Text>
                    <Icon name="magnify" size={20} color={`gainsboro`} />
                </TouchableOpacity>
                <TouchableOpacity className="h-10 items-center justify-between rounded-3xl border-zinc-300 px-3 flex-row w-[80%] border">
                    <Text className="text-base text-zinc-500">Tesla</Text>
                    <Icon name="magnify" size={20} color={`gainsboro`} />
                </TouchableOpacity>

                <TouchableOpacity className="h-10 items-center justify-between rounded-3xl border-zinc-300 px-3 flex-row w-[45%] border">
                    <Text className="text-base text-zinc-500">Tesla</Text>
                    <Icon name="magnify" size={20} color={`gainsboro`} />
                </TouchableOpacity>
                <TouchableOpacity className="h-10 items-center justify-between rounded-3xl border-zinc-300 px-3 flex-row w-[45%] border">
                    <Text className="text-base text-zinc-500">Tesla</Text>
                    <Icon name="magnify" size={20} color={`gainsboro`} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="px-2 flex">
                    {popularpeople.map((item,index)=>(
                        <TouchableOpacity key={index} className="flex-row justify-between items-center py-3 active:bg-zinc-200">
                            <View className="flex-row space-x-3 items-center"><Image source={item.profilepic} resizeMode="contain" className="h-16 w-16 rounded-full" /><Text className="text-base">{item.name}{item.isVerified ? <Image source={verifiedBadge} resizeMode="contain" className="h-8 w-6" /> : ''}</Text></View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default SearchScreen;
