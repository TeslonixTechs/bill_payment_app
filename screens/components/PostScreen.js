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
    PanResponder,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { uploadMedia } from "../models/uploadMedia";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";
const PostScreen = () => {
    const navigation = useNavigation();
    const [postmedia, setPostMedia] = useState('');
    const translateY = useSharedValue(300);
    const [selectAction, setSelectAction] = useState(false);
    const animatedStyleY = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });
    useEffect(() => {
        if (selectAction) {
            translateY.value = withTiming(0, { duration: 1000 });
        } else {
            translateY.value = withTiming(700, { duration: 1000 });
        }
    }, [selectAction]);
    const handleUploadMedia = async () => {
        setSelectAction((prev)=>(!prev))
    };
    const handlegallery = async () => {
        const media = await uploadMedia();
        setPostMedia(media.assets[0].uri);
        setSelectAction(false)
    }
    return (
        <ScrollView className="h-full w-full">
            <View className="py-10">
                <View className="flex-row space-x-5 px-3 items-center">
                    <View className="w-14 h-14 bg-zinc-200 flex justify-center items-center rounded-full">
                       <Icon name="account" size={30} color="grey" />
                    </View>
                    <Text className="text-base">Create new post</Text>
                </View>
                <TouchableOpacity onPress={handleUploadMedia} className="mt-7 h-64 w-[90%] px-3 border-2 border-zinc-200 self-center rounded-3xl flex items-center justify-center">
                    { postmedia==="" ? <View className="flex items-center"><Icon name="camera" color="gainsboro" size={30} />
                    <Text className="text-zinc-400">Upload photo</Text></View> : <Image source={{uri:postmedia}} resizeMode="contain" className="h-full rounded-3xl w-full" /> }
                </TouchableOpacity>
                <View className="mt-7">
                    <TextInput multiline placeholder="Type your post here" className="border-2 border-zinc-300 h-24 w-80 self-center rounded-3xl pb-2 pl-3 pr-2" />
                </View>
                <TouchableOpacity className="w-80 h-12 bg-blue-800 self-center rounded-2xl mt-5 flex justify-center items-center"><Text className="text-white">Post</Text></TouchableOpacity>
            </View>
           { selectAction && ( <Animated.View style={animatedStyleY} className="h-36 w-full bg-zinc-100 border-t-2 border-t-zinc-200 absolute top-[80%] flex-row pt-3 space-x-7 items-center px-5">
                <TouchableOpacity onPress={()=>{navigation.navigate('camera')}} className="h-[80px] rounded-full w-[80px] bg-zinc-300 flex items-center justify-center space-y-1"><Icon name="camera" size={25} color={`grey`} /><Text>Camera</Text></TouchableOpacity>
                <TouchableOpacity onPress={handlegallery} className="h-[80px] rounded-full w-[80px] bg-zinc-300 flex items-center justify-center space-y-1"><Icon name="library" size={25} color={`grey`} /><Text>Gallery</Text></TouchableOpacity>
            </Animated.View>) }
        </ScrollView>
    );
};

export default PostScreen;