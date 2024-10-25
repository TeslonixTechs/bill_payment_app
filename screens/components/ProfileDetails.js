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
} from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const ProfileDetails = () => {
    return (
        <View className="px-3 flex">
            <View className="flex-row w-full items-center justify-between">
                <View className="flex-row items-center">
                    <Icon name="email-outline" size={25} color={`darkblue`} />
                    <View className="w-2" />
                    <Text>Email</Text>
                </View>
                <View>
                    <Text>Johndoe@gmail.com</Text>
                </View>
            </View>
            <View className="h-8" />
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <Icon name="phone" size={25} color={`darkblue`} />
                    <View className="w-2" />
                    <Text>Phone Number</Text>
                </View>
                <View>
                    <Text>
                        <TouchableOpacity>
                            <Icon size={20} color={`darkblue`} name="pencil" />
                        </TouchableOpacity>
                        08166564618
                    </Text>
                </View>
            </View>
            <View className="h-8" />
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <Icon name="map-marker-outline" size={25} color={`darkblue`} />
                    <View className="w-2" />
                    <Text>Address</Text>
                </View>
                <View className="items-end w-1/2">
                    <Text>
                        <TouchableOpacity>
                            <Icon size={20} color={`darkblue`} name="pencil" />
                        </TouchableOpacity>
                        No 1 Road 202 Federal Housing Akure
                    </Text>
                </View>
            </View>
            <View className="h-8" />
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <Icon name="help-circle-outline" size={25} color={`darkblue`} />
                    <View className="w-2" />
                    <Text>About</Text>
                </View>
                <View className="items-end w-1/2">
                    <Text>
                        <TouchableOpacity>
                            <Icon size={20} color={`darkblue`} name="pencil" />
                        </TouchableOpacity>
                        Web developer
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ProfileDetails;
