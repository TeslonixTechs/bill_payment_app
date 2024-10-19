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
    TouchableNativeFeedback,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import * as AV from "expo-av";
const SearchScreen = () => {
    const array = ["", "", "", "", "", "", "", "", "", "", "", ""];
    return (
        <View className="flex-1 bg-white">
            <View className="w-full pb-5 items-center relative">
                <View className="w-[95%] items-start justify-center flex">
                    <TextInput placeholder={`Search`} className="w-full pl-10 h-12 border-2 border-slate-300 rounded-3xl" />
                    <View className="absolute ml-3">
                        <Icon size={20} name="magnify" />
                    </View>
                </View>
            </View>
            <View className="w-full gap-3 px-3 flex-row flex-wrap pb-5">
                <TouchableOpacity className="h-10 items-center justify-between rounded-3xl border-zinc-300 px-3 flex-row w-[45%] border">
                    <Text className="text-base">Tesla</Text>
                    <Icon name="magnify" size={20} color={`gainsboro`} />
                </TouchableOpacity>
                <TouchableOpacity className="h-10 items-center justify-between rounded-3xl border-zinc-300 px-3 flex-row w-[45%] border">
                    <Text className="text-base">Tesla</Text>
                    <Icon name="magnify" size={20} color={`gainsboro`} />
                </TouchableOpacity>
                <TouchableOpacity className="h-10 items-center justify-between rounded-3xl border-zinc-300 px-3 flex-row w-[80%] border">
                    <Text className="text-base">Tesla</Text>
                    <Icon name="magnify" size={20} color={`gainsboro`} />
                </TouchableOpacity>

                <TouchableOpacity className="h-10 items-center justify-between rounded-3xl border-zinc-300 px-3 flex-row w-[45%] border">
                    <Text className="text-base">Tesla</Text>
                    <Icon name="magnify" size={20} color={`gainsboro`} />
                </TouchableOpacity>
                <TouchableOpacity className="h-10 items-center justify-between rounded-3xl border-zinc-300 px-3 flex-row w-[45%] border">
                    <Text className="text-base">Tesla</Text>
                    <Icon name="magnify" size={20} color={`gainsboro`} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                {/* <View className="flex-row pb-5 pt-3 flex-wrap justify-center">
        { array.map((item, index)=>(
          <TouchableOpacity key={index} className="h-40 w-28 border-2 border-white flex bg-stone-100">
            <Image source={require('../../assets/iphone-img.jpg')} resizeMode="cover" className="h-full w-full" />
          </TouchableOpacity>
        )) }
      </View> */}
            </ScrollView>
        </View>
    );
};

export default SearchScreen;
