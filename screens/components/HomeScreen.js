import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
    ImageBackground,
    View,
    SafeAreaView,
    Text,
    StatusBar,
    TextInput,
    Button,
    KeyboardAvoidingView,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
    Modal,
    Share
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";
import { postData } from "../data/posts";
import { commentsData } from '../data/commentsData';
import socket from '../utils/socket';
const image1 = require('../data/Images/1.jpg');
const image2 = require('../data/Images/12.jpg');
const image3 = require('../data/Images/17.jpg');
const image4 = require('../data/Images/IMG_20240107_184951_929.jpg');
const image5 = require('../data/Images/24.jpg');
const image6 = require('../data/Images/I WILL UNCOVER AMAZON HIJACKERS FACE AND SEND THEM AWAY.jpeg');
const HomeScreen = () => {
    useEffect(()=>{socket.open();console.log(socket.connected);})
    const scrollViewRef = useRef();
    const navigation = useNavigation();
    const image = require("../../assets/jota.jpg");
    const postImage = require("../../assets/palmer.jpg");
    const [Likes, setLikes] = useState();
    const [displayCommentsData, setDisplayCommentsData] = useState([
      {
        id: 1,
        name: 'Samuel Oni',
        image: image,
        isLiked: false,
        comment: 'Wow'
    },
    {
        id: 2,
        name: 'Jason Brian',
        image: image1,
        isLiked: true,
        comment: 'Awesome'
    },
    {
        id: 3,
        name: 'Bethany Campbell',
        image: image3,
        isLiked: true,
        comment: 'Awesome'
    },
    {
        id: 4,
        name: 'Elite Fizzy',
        image: image2,
        isLiked: true,
        comment: 'Awesome'
    },
    {
        id: 5,
        name: 'Rikon Persy',
        image: image4,
        isLiked: true,
        comment: 'Awesome'
    },
    {
        id: 6,
        name: 'Servijk Guerr',
        image: postImage,
        isLiked: false,
        comment: 'Awesome'
    },
    {
        id: 7,
        name: 'Chloe',
        image: image5,
        isLiked: false,
        comment: 'Awesome'
    },
    {
        id: 8,
        name: 'Tesla',
        image: image6,
        isLiked: true,
        comment: 'Awesome'
    },
    ])
    const [isClicked, setIsClicked] = useState(false);
    const [displayComments, setDisplayComments] = useState(false);
    const [isLiked, setIsLicked] = useState(false);
    const translateY = useSharedValue(700);
    const [isSaved, setIsSaved] = useState(false);
    const [isPointerParentView, setIsPointerparentView] = useState('');
    const [displayAlertBox, setDisplayAlertBox] = useState(false);
    const [commentInputValue, setCommentInputValue] = useState('');
    const AlertBox = ({message}) => {
        return (
            <View className="h-full w-full bg-transparent flex items-center justify-center absolute top-0">
                <View className="shadow-md h-32 rounded-xl w-72 bg-white flex justify-between pl-5 pr-2 pt-5 pb-2"><Text className="text-base">{message}</Text><TouchableOpacity onPress={()=>{setDisplayAlertBox(false)}} className="self-end flex justify-center items-center h-8 bg-blue-200 w-12 rounded-2xl"><Text className="text-base">ok</Text></TouchableOpacity></View>
            </View>
        );
    };
    const animatedStyleY = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    const handleLike = (id) => {
        const postIndex = id - 1;
        const isLiked = postData[postIndex].isLiked;

        // Toggle the like state
        postData[postIndex].isLiked = !isLiked;
        postData[postIndex].likes += isLiked ? -1 : 1; // Adjust likes count

        // Update state
        setLikes(postData[postIndex].likes);
        setIsClicked(!isLiked);
    };

    const handleComment = () => {
        setDisplayComments(prev => !prev);
    };

    useEffect(() => {
        if (displayComments) {
            translateY.value = withTiming(0, { duration: 500 });
            setIsPointerparentView('none');
        } else {
            translateY.value = withTiming(700, { duration: 500 });
                setIsPointerparentView('')
        }
    }, [displayComments]);

    const handleSave = () => {
        setIsSaved(prev => !prev);
        setDisplayAlertBox(true);
    };

    const handleShare = (id) => {
        const filteredData = postData.filter((item) => item.id === id);
        const url = filteredData[0].postImage;
        Share.share({
            message: `${url}`,
            url: url,
        })
        .then((result) => {
            if (result.action === Share.sharedAction) {
                postData[id - 1].shares += 1;
                Alert.alert('Shared successfully!');
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };
    const photopic = require('../data/Images/12.jpg');
    const handleAddComment = () => {
        if(!commentInputValue.trim()) {
            return
        }
        const newcomment = {
            id: commentsData.length+1,
            name: 'Teslonix',
            image: photopic,
            isLiked: false,
            comment: commentInputValue
        };
        setDisplayCommentsData((prevComment)=>[...prevComment,newcomment])
        setCommentInputValue('');
    };
    return (
        <View ref={scrollViewRef} className="flex-1 bg-white relative">
            <View className="h-12 w-full flex flex-row border-b border-b-slate-300 px-4 justify-between items-center">
                <Text className="text-2xl font-bold">Emote</Text>
                <View className="flex-row space-x-4">
                    <TouchableOpacity onPress={()=>{navigation.navigate('chats')}}>
                        <Icon name="whatsapp" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="h-28 flex space-y-2 w-full border-b border-slate-300">
                    <ScrollView className="flex-1" horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View className="flex-row px-5 space-x-4 items-center">
                            <TouchableOpacity className="h-20 w-20 rounded-full bg-blue-400 p-1">
                                <View className="h-full w-full rounded-full bg-white flex justify-center items-center"><Icon name="plus" size={25} /><Text className="text-[10px]">Add a story</Text></View>
                            </TouchableOpacity>
                            {postData.map((item, index) => (
                                <TouchableOpacity onPress={()=>{navigation.navigate('story_screen')}} key={index} className="h-20 w-20 rounded-full bg-blue-400 p-1">
                                    <Image source={item.image} resizeMode="cover" className="h-full w-full rounded-full" />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
                <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                    <View className="flex space-y-10 items-center py-8">
                        {postData.map((item, index) => (
                            <View key={index} className="flex w-full space-y-2">
                                <View className="flex-row justify-between w-full px-3">
                                    <View className="flex-row space-x-2">
                                        <Image source={item.image} resizeMode="cover" className="h-12 w-12 rounded-full" />
                                        <View className="block space-y-1">
                                            <Text className="text-lg font-bold">{item.name}</Text>
                                            <Text className="text-sm text-zinc-400">{item.date}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity className="rounded-3xl justify-center space-x-1 flex flex-row h-8 items-center w-8 border">
                                        <Icon name="dots-vertical" size={20} />
                                    </TouchableOpacity>
                                </View>
                                <ImageBackground
                                    source={item.postImage}
                                    resizeMode="cover"
                                    className="w-full rounded-xl h-[300px]"
                                />
                                <View className="flex-row items-center justify-between px-4">
                                    <View className="flex-row space-x-2">
                                        <TouchableOpacity
                                            onPress={() => handleLike(item.id)}
                                            className="rounded-3xl justify-center space-x-1 flex flex-row h-8 items-center w-16 border"
                                        >
                                            <Icon
                                                name={`${item.isLiked ? "heart" : "heart-outline"}`}
                                                size={20}
                                                color={`${item.isLiked ? "red" : "black"}`}
                                            />
                                            <Text>{item.likes}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={handleComment}
                                            className="rounded-3xl justify-center space-x-1 flex flex-row h-8 items-center w-16 border"
                                        >
                                            <Icon name="comment-outline" size={20} />
                                            <Text>{item.comments}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{handleShare(item.id)}} className="rounded-3xl justify-center space-x-1 flex flex-row h-8 items-center w-16 border">
                                            <Icon name="send-outline" size={20} />
                                            <Text>{item.shares}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={handleSave} className={`rounded-3xl ${isSaved ? 'border-blue-800' : 'border-black'} justify-center space-x-1 flex flex-row h-8 items-center w-8 border`}>
                                        <Icon name={`${isSaved ? 'bookmark' : 'bookmark-outline'}`} color={`${isSaved ? 'blue' : 'black'}`} size={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </ScrollView>
            {displayComments && (
                <View className="h-full bg-transparent w-full absolute top-0">
                    <Animated.View style={animatedStyleY} className="h-[75%] w-full absolute bottom-0 flex rounded-t-3xl bg-white shadow-xl">
                    <View className="absloute left-[92%] top-2 w-fit">
                        <TouchableOpacity onPress={handleComment} className="w-10 h-10 rounded-full"><Icon size={25} name="cancel" /></TouchableOpacity>
                    </View>
                    <View className="flex items-center absolute top-0 left-[36%]">
                        <View className="h-1 w-16 bg-gray-500 rounded-xl"></View>
                        <Text className="text-xl font-bold my-3">Comments</Text>
                    </View>
                    <ScrollView className="flex-1 border-y border-slate-300" ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                        <View className="py-5 flex space-y-5">
                            {displayCommentsData.map((item, index) => (
                                <View key={index} className="flex-row items-center pl-3">
                                    <Image source={item.image} resizeMode="cover" className="h-14 w-14 rounded-full" />
                                    <View className="flex pl-3 space-y-1 flex-1">
                                        <Text className="text-lg font-bold">{item.name}</Text>
                                        <Text className="text-slate-400">{item.comment}</Text>
                                    </View>
                                    <View className="w-16 flex items-center">
                                        <TouchableOpacity>
                                            <Icon
                                                name={`${item.isLiked ? "heart" : "heart-outline"}`}
                                                size={25}
                                                color={`${item.isLiked ? "red" : "black"}`}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                    <View className="w-full flex-row items-center justify-center px-2 py-2 space-x-2 relative">
                        <Image source={image} resizeMode="contain" className="h-10 w-10 rounded-full" />
                        <TextInput value={commentInputValue} onChangeText={(text)=>{setCommentInputValue(text)}} className="bg-slate-200 flex-1 h-11 rounded-2xl pl-3" placeholder="Comment" />
                        <TouchableOpacity onPress={handleAddComment} className="absolute right-2 h-11 w-11 rounded-full flex items-center justify-center">
                            <Icon name="send-outline" size={20} />
                        </TouchableOpacity>
                    </View>
                </Animated.View>
                </View>
            )}
            {displayAlertBox && (
                <AlertBox message={`${isSaved ? 'Saved to collection' : 'Removed from collection'}`} />
            )}
        </View>
    );
};

export default HomeScreen;
