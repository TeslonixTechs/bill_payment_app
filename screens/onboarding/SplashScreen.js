import React, { useRef, useEffect } from "react";
import { Animated, View, StatusBar, Text, Image } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
const SplashScreen = () => {
    const navigation = useNavigation();
    const scaleAnimation = useRef(new Animated.Value(0)).current;
    const dropAnimation = useRef(new Animated.Value(-1000)).current; // Starts from off-screen (top)

    useEffect(() => {
        // Start the animations in sequence
        Animated.sequence([
            // Animate the scale of the yellow card
            Animated.timing(scaleAnimation, {
                toValue: 1,
                duration: 1000, // Scale up in 1 second
                useNativeDriver: true,
            }),
            // After scaling, drop the third card from the top
            Animated.timing(dropAnimation, {
                toValue: 0,
                duration: 1000, // Drop in 1 second
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const isFocused = useIsFocused();
    const goto = async () => {
        navigation.navigate("onboarding");
    };
    useEffect(() => {
        if (isFocused) {
            const mystart = setTimeout(() => {
                goto();
            }, 4000);
            return () => clearTimeout(mystart);
        }
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="auto" />

            {/* First view: White background */}
            <View className="h-full w-full absolute bg-white" />

            {/* Second view: Yellow card scaling */}
            <Animated.View
                style={[
                    {
                        transform: [{ scale: scaleAnimation }], // Scale the yellow card
                    },
                ]}
                className="h-full w-full bg-[#ffc107] absolute"
            />

            {/* Third view: Blue card dropping from the top */}
            <Animated.View
                style={[
                    {
                        transform: [{ translateY: dropAnimation }], // Drop animation
                    },
                ]}
                className="flex-col justify-center items-center space-y-3 bg-[#34c759] absolute h-full w-full"
            >
                <View>
                    <Image source={require("../../assets/icon.png")} resizeMode="contain" className=" h-40 w-40 rounded-full" />
                </View>
                <Text className=" text-white font-bold text-center text-4xl">BankApp</Text>
            </Animated.View>
        </View>
    );
};

export default SplashScreen;
