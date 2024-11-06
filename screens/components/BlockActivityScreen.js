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
const BlockActivityScreen = () => {
    const navigation = useNavigation();
    return (
        <View className="bg-orange-800 h-full w-full">
            <Header heading="Block Activity" />
        </View>
    )
}

export default BlockActivityScreen;