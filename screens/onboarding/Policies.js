import React, { useRef, useEffect, useState } from 'react';
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
const Policies = () => {
	const navigation = useNavigation(); 
	return (
		<SafeAreaView className="h-full w-full bg-[#f1f1f1] flex items-center space-y-5 pt-20 pb-5">
		    <StatusBar />
            <View className="w-80">
                <Text className="text-4xl font-bold text-[#333]">Policies</Text>
                <Text className="text-[#666]">App terms and policies</Text>
            </View>
		    <ScrollView></ScrollView>
		    <TouchableOpacity onPress={()=>{navigation.navigate('screentab')}} className="w-72 rounded-3xl h-[50px] bg-[#34c759] flex justify-center items-center"><Text className="text-[#fff]">Continue</Text></TouchableOpacity>
		</SafeAreaView>
	);
};

export default Policies;