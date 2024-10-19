import { useNavigation } from "@react-navigation/native";
import { CameraView } from "expo-camera";
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
import * as MediaLibrary from "expo-media-library";
import { CameraType, FlashMode } from "expo-camera/build/legacy/Camera.types";
import { Permissions } from "../utils/permissions";
import { Audio } from "expo-av";
import { uploadMedia } from "../models/uploadMedia";
const PostScreen = () => {
    const [facing, setFacing] = useState(CameraType.front);
    const [mode, setMode] = useState("picture");
    const [camera, setCamera] = useState(null);
    const [animatedValue] = useState(new Animated.Value(0));
    const [photo, setPhoto] = useState(null);
    const [video, setVideo] = useState(null);
    const [recording, setRecording] = useState(false);
    const [flash, setFlash] = useState(FlashMode.off);
    const [isFlash, setIsFlash] = useState(false);
    const toggleMode = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
            if (gestureState.dx < -50) {
                Animated.spring(animatedValue, {
                    toValue: 1,
                    useNativeDriver: true,
                }).start();
                setMode(video);
            } else if (gestureState.dx > 50) {
                Animated.spring(animatedValue, {
                    toValue: 0,
                    useNativeDriver: true,
                }).start();
                setMode("picture");
            }
        },
    });
    const toggleFacing = () => {
        if (facing === "front") {
            setFacing(CameraType.back);
            setFlash(FlashMode.off);
        } else {
            setFacing(CameraType.front);
            setFlash(FlashMode.off);
        }
    };
    const savePicture = (media) => {
        const assets = MediaLibrary.createAssetAsync(media.uri);
    };
    const takePicture = async () => {
        if (camera) {
            const options = { quality: 0.5, base64: true };
            const photo = await camera.takePictureAsync(options);
            savePicture(photo);
            setPhoto(photo);
        }
    };
    const recordVideo = async () => {
        if (!recording) {
            setRecording(true);
            const video = recording ? await camera.recordAsync() : console.log('failed')
            savePicture(video);
            console.log('test: %d',video);
            setVideo(video);
        } else {
            camera.stopRecording();
            setRecording(false);
        }
    };
    const switchMode = () => {
        if (mode === "picture") {
            takePicture();
        } else {
            recordVideo();
        }
    };
    const pickMedia = () => {
        uploadMedia(mode);
    };
    const toggleFlash = () => {
        isFlash === false ? setIsFlash(true) : setIsFlash(false);
        if(flash==='on') {
            setFlash(FlashMode.torch);
        }
        else {
            setFlash(FlashMode.off);
        }
    };
    return (
        <View className="relative flex-1" {...toggleMode.panHandlers}>
            <CameraView
                className="flex-1"
                enableTorch={isFlash}
                ratio="4:3"
                videoQuality="1080p"
                autofocus="on"
                videoStabilizationMode="standard"
                facing={facing}
                mode={mode}
                ref={(ref) => setCamera(ref)}
            ></CameraView>
            <View className="flex-row justify-center absolute bottom-24 w-full h-14 flex-row items-center">
                <Animated.View
                    style={{
                        transform: [
                            {
                                translateX: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -100],
                                }),
                            },
                        ],
                    }}
                >
                    <Text className={`${mode === "picture" ? "text-2xl text-zinc-200" : "text-base text-zinc-400"}`}>Photo</Text>
                </Animated.View>
                <Animated.View
                    style={{
                        transform: [
                            {
                                translateX: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [100, 0],
                                }),
                            },
                        ],
                    }}
                >
                    <Text className={`${mode !== "picture" ? "text-2xl text-zinc-200" : "text-base text-zinc-400"}`}>Video</Text>
                </Animated.View>
            </View>
            <View className="absolute top-5 right-5">
                <TouchableOpacity onPress={toggleFlash}>
                    <Icon name="flash" size={35} color={`${isFlash ? 'yellow' : 'white'}`} />
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-between px-7 bottom-3 absolute items-center w-full">
                <TouchableOpacity
                    onPress={pickMedia}
                    className="border flex justify-center bg-zinc-600 items-center rounded-full border-white h-14 w-14"
                >
                    <Icon name="plus" color={`#fff`} size={30} />
                </TouchableOpacity>
                <View className="p-1 rounded-3xl h-fit w-fit border-white border-2">
                    <TouchableOpacity
                        onPress={switchMode}
                        className={`border flex justify-center items-center rounded-full h-14 w-14 ${mode === "picture" ? "bg-blue-600" : "bg-red-600"}`}
                    >
                        {/*<Icon name={`${mode === "picture" ? "camera" : "video"}`} color={`#fff`} size={30} />*/}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={toggleFacing}
                    className="border flex justify-center bg-zinc-600 items-center rounded-full border-white h-14 w-14"
                >
                    <Icon name="camera-flip" color={`#fff`} size={30} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PostScreen;
