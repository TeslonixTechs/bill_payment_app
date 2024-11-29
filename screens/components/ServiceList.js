import React, { useRef, useEffect, useState } from "react";
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Icon2 from "@expo/vector-icons/FontAwesome6";

const ServiceList = () => {
	const navigation = useNavigation()
    return (
        <View className="items-start w-full bg-white rounded-3xl flex p-2 space-y-3">
			<View className="w-max py-0.5 px-3 border-slate-400 border rounded-3xl"><Text>Quick actions</Text></View>
            <View className="items-center w-full bg-white flex-row justify-evenly mb-5">
                <TouchableOpacity onPress={()=>{navigation.navigate('buyairtime')}} className="flex items-center">
                    <View className="h-14 w-14 flex justify-center items-center rounded-full bg-[#34c759]">
                        <Icon name="phone" size={20} color="#fff" />
                    </View>
                    <Text>Airtime</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('buydata')}} className="flex items-center">
                    <View className="h-14 w-14 flex justify-center items-center rounded-full bg-[#34c759]">
                        <Icon name="wifi" size={20} color="#fff" />
                    </View>
                    <Text>Data</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('electricitybills')}} className="flex items-center">
                    <View className="h-14 w-14 flex justify-center items-center rounded-full bg-[#34c759]">
                        <Icon2 name="plug" size={20} color="#fff" />
                    </View>
                    <Text>Electricity</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('transfermoney')}} className="flex items-center">
                    <View className="h-14 w-14 flex justify-center items-center rounded-full bg-[#34c759]">
                        <Icon name="bank-transfer" size={20} color="#fff" />
                    </View>
                    <Text>Transfer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ServiceList;
