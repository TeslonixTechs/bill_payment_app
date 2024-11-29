import React, { useRef, useEffect, useState } from 'react';
import { Animated, TextInput, View, StatusBar, Text, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Icon2 from '@expo/vector-icons/FontAwesome6';
import Header from '../components/Header';
import AccountInfo from '../components/AccountInfo';
import ServiceList from '../components/ServiceList';
const Transactions = () => {
	const navigation = useNavigation();
	return (
		<View className="h-full w-full bg-[#f1f1f1]">
			<StatusBar />
			<SafeAreaView className="py-10 flex">
                <View className="w-80 h-[50px] bg-white px-3 rounded-xl flex-row items-center">
                    <Icon name="office-building-outline" size={20} color="grey" />
                    <TextInput className="flex-1 ml-2" keyboardType="text" maxLength={11} placeholder="Search by beneficiary name or account number" />
                </View>
				<ScrollView>
					<View className="flex items-center space-y-5">
						<View className="w-80 h-20 bg-[#e3e3e3] flex-row items-center justify-evenly">
							<View className="h-12 w-12 rounded-full bg-[#fff] flex justify-center items-center"><Icon name="bank-transfer-out" size={20} color="#ff0000" /></View>
							<View>Samuel Oni</View>
							<View><Text>5400</Text><Text>13/07 15:39pm</Text></View>
						</View>
						<View className="w-80 h-20 bg-[#e3e3e3] flex-row items-center justify-evenly">
							<View className="h-12 w-12 rounded-full bg-[#fff] flex justify-center items-center"><Icon name="bank-transfer-out" size={20} color="#ff0000" /></View>
							<View>Samuel Oni</View>
							<View><Text>5400</Text><Text>13/07 15:39pm</Text></View>
						</View>
						<View className="w-80 h-20 bg-[#e3e3e3] flex-row items-center justify-evenly">
							<View className="h-12 w-12 rounded-full bg-[#fff] flex justify-center items-center"><Icon name="bank-transfer-out" size={20} color="#ff0000" /></View>
							<View>Samuel Oni</View>
							<View><Text>5400</Text><Text>13/07 15:39pm</Text></View>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
};

export default Transactions;