import React, { useRef, useEffect, useState } from "react";
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Header from "../components/TransactionHeader";
import CheckoutButton from '../components/CheckoutButton';

const TvBills = () => {
  return (
    <View className="h-full w-full bg-[#555fea]">
      <Text>TvBills</Text>
    </View>
  );
};

export default TvBills;