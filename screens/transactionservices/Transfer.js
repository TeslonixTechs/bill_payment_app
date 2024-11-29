import React, { useRef, useEffect, useState } from "react";
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Header from "../components/TransactionHeader";
import CheckoutButton from '../components/CheckoutButton';

const Transfer = () => {
  return (
    <View className="h-full w-full bg-[#4efded]">
      <Text>Transfer</Text>
    </View>
  );
};

export default Transfer;