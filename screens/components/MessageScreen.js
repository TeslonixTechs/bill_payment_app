import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState, useRef } from "react";
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
    Platform
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { FontAwesome } from "@expo/vector-icons";
import ChatHeader from './ChatHeader'
const MessageScreen = () => {
    const scrollViewRef = useRef();
	const navigation = useNavigation();
	const { params } = useRoute();
	const data = params?.data;
	console.log(data);
	const [inputText, setInputText] = useState('');
	const [messages, setMessages] = useState([
		{
			type: 'received',
			text: 'Hi',
			time: '12:45'
		},
		{
			type: 'sent',
			text: 'Hi',
			time: '12:56'
		},
		{
			type: 'sent',
			text: 'How are you doing',
			time: '12:57'
		},
		{
			type: 'received',
			text: 'Hi',
			time: '13:45'
		},
		{
			type: 'received',
			text: 'All well',
			time: '12:45'
		},
		{
			type: 'sent',
			text: 'Hi',
			time: '12:45'
		},
		{
			type: 'received',
			text: 'Hi',
			time: '12:56'
		},
		{
			type: 'sent',
			text: 'How are you doing',
			time: '12:57'
		},
		{
			type: 'sent',
			text: 'Hi',
			time: '13:45'
		},
		{
			type: 'received',
			text: 'All well',
			time: '12:45'
		}
	]);
	const getTime = () => {
		const msgTimeHour = new Date().getHours();
        const msgTimeMin = new Date().getMinutes();
        let newMsgTimeHour;
        let newMsgTimeMin;
        if(msgTimeHour < 10){
            newMsgTimeHour = '0'+msgTimeHour;
        } else {
            newMsgTimeHour = msgTimeHour;
        }
        if(msgTimeMin < 10){
            newMsgTimeMin = '0'+msgTimeMin;
        } else {
            newMsgTimeMin = msgTimeMin;
        }
        const msgTime = newMsgTimeHour + ':' + newMsgTimeMin;
        return msgTime;
	};
	const handleAddMessage = () => {
		const newmsg = {
			type: 'sent',
			text: inputText,
			time: `${getTime()}`
		};
		setMessages((prevMessages)=> [...prevMessages, newmsg]); 
		console.log(inputText);
		setInputText('')
	}
	return (
		<View className="h-full w-full bg-slate-200 flex">
			<StatusBar />
			<ChatHeader data={data} />
			<KeyboardAvoidingView
				className="bg-white"
                style={{ flex: 1 }}
            >
                <ScrollView
                    ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }} className="bg-slate-200"
                    contentContainerStyle={{ flexGrow: 1,}}
                >
                    <View className="pt-5 px-3 flex space-y-3 pb-12">
                        {/* Date Indicator */}
                    	<View className="flex w-full items-center mb-4"><TouchableOpacity className="h-9 w-[40%] rounded-2xl flex justify-center items-center bg-white"><Text>Yesterday</Text></TouchableOpacity></View>
                        { messages.map((item,index)=>(
                        	<TouchableOpacity key={index} className={`max-w-[65%] w-max min-w-[30%] rounded-2xl pt-2 pb-1 h-max items-end px-3 bg-white flex justify-end ${item.type==='sent' ? 'self-end' : 'self-start'}`}>
                        		<Text className="">{item.text}</Text>
	                        	<Text className="text-xs flex-row space-x-2">{item.time}<Icon name="check-circle-outline" color="green" /></Text>
	                        </TouchableOpacity>
                        )) }
                    </View>
                </ScrollView>
                <View className="w-full h-14 flex-row">
                	<TextInput onChangeText={(text)=>{setInputText(text)}} value={inputText} className="flex-1 h-12 bg-gray-100 rounded-3xl pl-4"
                		placeholder="Type your message here"
          			/>
                	<TouchableOpacity onPress={handleAddMessage} className="h-12 w-12 bg-slate-200 rounded-full flex items-center justify-center"><FontAwesome size={17} name="send" /></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity onPress={()=>{scrollViewRef.current.scrollToEnd({ animated: true })}} className="h-9 w-9 z-10 rounded-full bg-zinc-300 flex justify-center items-center absolute bottom-16 right-2"><Icon name="chevron-double-down" size={20} color={`grey`} /></TouchableOpacity>
		</View>
	)
};

export default MessageScreen