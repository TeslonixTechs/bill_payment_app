import React, { useRef, useEffect, useState } from "react";
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Header from "../components/TransactionHeader";
import CheckoutButton from '../components/CheckoutButton';
const Airtime = () => {
    const handleCheckout = () => {}
    return (
        <View className="bg-[#f1f1f1] h-full w-full">
            <Header heading="Buy Airtime" />
            <View>
                <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                    <Icon name="office-building-outline" size={20} color="grey" />
                    <TextInput className="flex-1 ml-2" keyboardType="text" maxLength={11} placeholder="Select biller" />
                </View>
                <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                    <Icon name="office-building-outline" size={20} color="grey" />
                    <TextInput className="flex-1 ml-2" keyboardType="text" maxLength={11} placeholder="Select biller" />
                </View>
                <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                    <Icon name="office-building-outline" size={20} color="grey" />
                    <TextInput className="flex-1 ml-2" keyboardType="text" maxLength={11} placeholder="Select biller" />
                </View>
                <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                    <Icon name="office-building-outline" size={20} color="grey" />
                    <TextInput className="flex-1 ml-2" keyboardType="text" maxLength={11} placeholder="Select biller" />
                </View>
            </View>
            <CheckoutButton handleCheckout={handleCheckout} />
        </View>
    );
};

export default Airtime;
