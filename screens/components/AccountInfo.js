import React, { useRef, useEffect, useState } from "react";
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Icon2 from "@expo/vector-icons/FontAwesome6";

const AccountInfo = () => {
    return (
        <View className="h-80 space-y-4 mb-5 w-full bg-[#fff] rounded-2xl p-3">
            <View className="bg-[#f3f3f3] h-10 flex-row rounded-3xl items-center px-1 justify-between">
                <View className="flex-row space-x-3 items-center">
                    <View className="h-8 w-8 rounded-full bg-[#34c759]"></View>
                    <Text className="text-base">Tesla Oni</Text>
                </View>
                <View className="flex-row space-x-3 items-center">
                    <Text>9034567489</Text>
                    <TouchableOpacity className="h-8 w-8 rounded-full bg-[#34c759] flex justify-center items-center">
                        <Icon2 name="copy" size={15} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="w-full flex-1 bg-[#f1f1f1] rounded-3xl">
                <View className="h-[25%] px-5 bg-[#34c759] rounded-3xl flex-row justify-between items-center">
                    <Text className="text-white text-xl">N 1800.45</Text>
                    <TouchableOpacity className="h-8 w-8 bg-[#3e8e41] rounded-full flex justify-center items-center">
                        <Icon name="plus" color="#fff" size={20} />
                    </TouchableOpacity>
                </View>
                <View className="flex-1 rounded-b-3xl px-3 py-1 space-y-3">
                    <Text className="text-xs">Recent transactions</Text>
                    <View className="flex-1 flex-row items-center justify-between">
                        <View className="items-center space-x-2 flex-row justify-center">
                            <View className="h-10 rounded-full w-10 bg-[#fff] flex justify-center items-center">
                                <Icon name="arrow-up" color="#34c759" size={18} />
                            </View>
                            <Text>Samuel</Text>
                        </View>
                        <View>
                            <Text>5000.00</Text>
                        </View>
                    </View>
                    <View className="flex-1 flex-row items-center justify-between">
                        <View className="items-center space-x-2 flex-row justify-center">
                            <View className="h-10 rounded-full w-10 bg-[#fff] flex justify-center items-center">
                                <Icon name="phone" color="#34c759" size={18} />
                            </View>
                            <Text>Airtime</Text>
                        </View>
                        <View>
                            <Text>500.00</Text>
                        </View>
                    </View>
                    <View className="flex-1 flex-row items-center justify-between">
                        <View className="items-center space-x-2 flex-row justify-center">
                            <View className="h-10 rounded-full w-10 bg-[#fff] flex justify-center items-center">
                                <Icon name="phone" color="#34c759" size={18} />
                            </View>
                            <Text>Airtime</Text>
                        </View>
                        <View>
                            <Text>500.00</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default AccountInfo;
