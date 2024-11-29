import React, { useRef, useEffect, useState } from "react";
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const CheckoutButton = ({handleCheckout}) => {
    return (
        <TouchableOpacity
            onPress={handleCheckout}
            className="bg-[#34c759] mb-1 h-12 w-80 flex items-center rounded-3xl justify-center hover:bg-[#4caf50] active:bg-[#3e8e41]"
        >
            <Text className="text-[#ffffff]">Continue</Text>
        </TouchableOpacity>
    );
};

export default CheckoutButton;