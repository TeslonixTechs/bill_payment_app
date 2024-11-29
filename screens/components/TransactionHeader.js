import React, { useRef, useEffect, useState } from 'react';
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Icon2 from '@expo/vector-icons/FontAwesome6';

const Header = ({heading}) => {
	return (
		<View className="flex-row mb-5 space-x-4 items-center">
            <TouchableOpacity className="flex justify-center items-center h-10 w-10 rounded-full bg-[#34c759]">
                <Icon name="chevron-left" color="#fff" size={20} />
            </TouchableOpacity>
            <Text className="text-[#333] text-xl">{heading}</Text>
		</View>
	)
};

export default Header;