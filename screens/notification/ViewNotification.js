import React, { useRef, useEffect, useState } from 'react';
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Icon2 from '@expo/vector-icons/FontAwesome6';
import Header from '../components/Header';
const ViewNotification = () => {
	const navigation = useNavigation();
	return (
		<View className="h-full w-full bg-[#ff0000]">
			<StatusBar />
			<SafeAreaView className="p-3 flex space-y-5">
			</SafeAreaView>
		</View>
	);
};

export default ViewNotification;