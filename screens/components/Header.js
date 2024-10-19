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
    Animated,
    PanResponder,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Header = ({heading}) => {
    const navigation = useNavigation();
    return (
        <View className="flex-row pt-5 pb-3 justify-between px-2 items-center">
            <TouchableOpacity onPress={()=>{navigation.navigate('main_app_screen')}} className="h-12 w-12 flex items-center justify-center rounded-full bg-slate-300"><Icon name="arrow-left" size={23} /></TouchableOpacity>
            <Text className="text-xl font-semibold">{heading}</Text>
            <View className="h-10 w-10 flex items-center justify-center rounded-full"></View>
        </View>
    )
}

export default Header;