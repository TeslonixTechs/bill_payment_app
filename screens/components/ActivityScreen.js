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
import Header from './Header';
const ActivityScreen = () => {
    const navigation = useNavigation();
    return (
        <View className="bg-rose-800 h-full w-full">
            <Header heading="Activity" />
        </View>
    )
}

export default ActivityScreen;