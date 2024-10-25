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

const image1 = require('../data/Images/1.jpg');
const image2 = require('../data/Images/12.jpg');
const image3 = require('../data/Images/12.png');
const image4 = require('../data/Images/14.jpg');
const image5 = require('../data/Images/15.jpg');
const image6 = require('../data/Images/16.jpg');
const image7 = require('../data/Images/17.jpg');
const image8 = require('../data/Images/18.png');
const Images = {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
};

const MessageScreen = () => {
    const navigation = useNavigation();
    const [array, setArray] = useState([
        {
            name: 'Alvarez',
            last_seen: 'yesterday at 02:00',
            unread: '7',
            photo: Images.image8
        },
        {
            name: 'Costa',
            last_seen: 'yesterday at 20:40',
            unread: '9',
            photo: Images.image2
        },
        {
            name: 'Miranda',
            last_seen: 'yesterday at 12:49',
            unread: '2',
            photo: Images.image7
        },
        {
            name: 'Fazio',
            last_seen: 'yesterday at 12:00',
            unread: '3',
            photo: Images.image1
        },
        {
            name: 'Vera',
            last_seen: 'yesterday at 09:00',
            unread: '1',
            photo: Images.image4
        },
        {
            name: 'Anderson',
            last_seen: 'yesterday at 10:00',
            unread: '8',
            photo: Images.image4
        },
        {
            name: 'Carrassco',
            last_seen: 'yesterday at 22:00',
            unread: '2',
            photo: Images.image5
        },
        {
            name: 'Samuel',
            last_seen: 'yesterday at 17:00',
            unread: '13',
            photo: Images.image4
        },
        {
            name: 'Bethany',
            last_seen: 'yesterday at 12:00',
            unread: '6',
            photo: Images.image4
        },
        {
            name: 'Tesla',
            last_seen: 'yesterday at 10:00',
            unread: '3',
            photo: Images.image5
        },
        {
            name: 'Servijk guerr',
            last_seen: 'yesterday at 02:00',
            unread: '3',
            photo: Images.image5
        },
        {
            name: 'Manolas',
            last_seen: 'yesterday at 05:00',
            unread: '50',
            photo: Images.image2
        },
        {
            name: 'Kuurke reece',
            last_seen: 'yesterday at 01:00',
            unread: '3',
            photo: Images.image6
        },
        {
            name: 'Stephen james',
            last_seen: 'yesterday at 13:00',
            unread: '6',
            photo: Images.image3
        },
        {
            name: 'Chloe',
            last_seen: 'yesterday at 11:00',
            unread: '3',
            photo: Images.image2
        },
    ]);
    const handleGoToMessage = (index) => {
        const data = array[index]
        navigation.navigate('message', { data: data })
    }
    return (
        <View className="h-full w-full bg-slate-200 flex">
            <StatusBar />
            <Header heading="Messages" />
            <ScrollView className="flex-1">
                <View className="h-full w-full flex mt-5">
                    { array.map((item, index)=>(
                        <TouchableOpacity onPress={()=>{handleGoToMessage(index)}} key={index} className="h-20 w-full px-3 active:bg-zinc-400 justify-between flex-row items-center">
                            <View className="space-x-4 flex-row items-center"><Image source={item.photo} resizeMode="cover" className="h-14 w-14 rounded-full" />
                            <View className="flex"><Text className="text-lg font-bold">{item.name}</Text><Text>last seen {item.last_seen}</Text></View></View>
                            <View className="flex justify-center items-center h-5 w-5 rounded-full bg-blue-800"><Text className="text-white text-xs">{item.unread}</Text></View>
                        </TouchableOpacity>
                    )) }
                </View>
            </ScrollView>
            <TouchableOpacity className="h-14 w-14 rounded-full absolute bottom-10 right-3 bg-blue-800 flex justify-center items-center"><Icon name="plus" color="white" size={25} /></TouchableOpacity>
        </View>
    )
};

export default MessageScreen;