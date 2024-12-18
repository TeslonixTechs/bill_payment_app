import React, { useRef, useEffect, useState } from 'react';
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Icon2 from '@expo/vector-icons/FontAwesome6';

const Header = () => {
	const navigation = useNavigation();
	return (
		<View className="flex-row mb-5 justify-between items-center">
			<View className="h-14 w-14 rounded-full bg-zinc-300"></View>
			<View>
				<TouchableOpacity onPress={()=>{navigation.navigate('listnotification')}}><Icon name="bell-outline" size={25} color="#666" /></TouchableOpacity>
			</View>	
		</View>
	)
};

export default Header;