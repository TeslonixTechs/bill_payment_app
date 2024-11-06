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
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const SettingsScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView className="flex-1">
            <View>
                <Text className="text-2xl font-bold my-5 px-3">Settings and activity</Text>
                <View>
                    <Text className="my-4 px-3">Your account</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('profile')}} className="flex-row justify-between items-center px-3 py-4 mb-2">
                        <View className="flex-row space-x-3">
                            <Icon name="account-circle-outline" size={30} />
                            <View className="flex">
                                <Text>Account settings</Text>
                                <Text>Profile, password and personal details</Text>
                            </View>
                        </View>
                        <Icon name="chevron-right" size={25} />
                        {/* <Text>Manage your personal details on Emote</Text> */}
                        {/* <TouchableOpacity>
                            <Text>Learn more</Text>
                        </TouchableOpacity> */}
                    </TouchableOpacity>
                </View>
                <View>
                    <Text className="my-4 px-3">App archives</Text>
                    <View>
                        <TouchableOpacity onPress={()=>{navigation.navigate('collection')}} className="flex-row justify-between items-center px-3 py-4 mb-2">
                            <View className="flex-row space-x-3 items-center">
                                <Icon size={30} name="bookmark-outline" />
                                <Text>Saved</Text>
                            </View>
                            <Icon size={30} name="chevron-right" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('activity')}} className="flex-row justify-between items-center px-3 py-4 mb-2">
                            <View className="flex-row space-x-3 items-center">
                                <Icon size={30} name="graph" />
                                <Text>Activity</Text>
                            </View>
                            <Icon size={30} name="chevron-right" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('notification_screen')}} className="flex-row justify-between items-center px-3 py-4 mb-2">
                            <View className="flex-row space-x-3 items-center">
                                <Icon size={30} name="bell-outline" />
                                <Text>Notifications</Text>
                            </View>
                            <Icon size={30} name="chevron-right" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text className="my-4 px-3">Security settings</Text>
                    <View>
                        <TouchableOpacity className="flex-row justify-between items-center px-3 py-4 mb-2">
                            <View className="flex-row space-x-3 items-center">
                                <Icon size={30} name="lock-outline" />
                                <Text>Account privacy</Text>
                            </View>
                            <Icon size={30} name="chevron-right" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('block')}} className="flex-row justify-between items-center px-3 py-4 mb-2">
                            <View className="flex-row space-x-3 items-center">
                                <Icon size={30} name="block-helper" />
                                <Text>Block</Text>
                            </View>
                            <Icon size={30} name="chevron-right" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text className="my-4 px-3">More info and support</Text>
                    <View>
                        <TouchableOpacity onPress={()=>{navigation.navigate('help')}} className="flex-row justify-between items-center px-3 py-4 mb-2">
                            <View className="flex-row space-x-3 items-center">
                                <Icon size={30} name="help-circle-outline" />
                                <Text>Help</Text>
                            </View>
                            <Icon size={30} name="chevron-right" />
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row justify-between items-center px-3 py-4 mb-2">
                            <View className="flex-row space-x-3 items-center">
                                <Icon size={30} name="information-outline" />
                                <Text>About</Text>
                            </View>
                            <Icon size={30} name="chevron-right" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate('termsandpolicies')}} className="flex-row justify-between items-center px-3 py-4 mb-2">
                            <View className="flex-row space-x-3 items-center">
                                <Icon size={30} name="note-outline" />
                                <Text>Terms and policies</Text>
                            </View>
                            <Icon size={30} name="chevron-right" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default SettingsScreen;
