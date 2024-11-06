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
const TermsPoliciesScreen = () => {
    const navigation = useNavigation();
    return (
        <View className="bg-amber-800 h-full w-full">
            <Header heading="Terms & Policies" />
        </View>
    )
}

export default TermsPoliciesScreen;