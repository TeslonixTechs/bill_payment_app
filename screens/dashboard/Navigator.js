import React from "react";
import { CommonActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, BottomNavigation } from "react-native-paper";
import Overview from "./Overview";
import { View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Icon2 from "@expo/vector-icons/FontAwesome6";
import Settings from "./Settings";
import Transactions from "./Transactions";
import Loans from "./Loans";
import CustomTabBar from "../components/CustomTabBar";
import Account from "./Account";
const Navigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            shifting={true}
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === "Overview") {
                        iconName = "home-outline"; // Changed icon name
                    } else if (route.name === "Transactions") {
                        iconName = "trophy-award"; // Changed icon name
                    } else if (route.name === "Settings") {
                        iconName = "profile"; // Changed icon name
                    } else if (route.name === "Loans") {
                        iconName = "exchange"; // Changed icon name
                    } else if (route.name === "Account") {
                        iconName = "exchange"; // Changed icon name
                    }

                    return <Icons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Overview" component={Overview} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={Account} options={{ headerShown: false }} />
            <Tab.Screen name="Transactions" component={Transactions} options={{ headerShown: false }} />
            <Tab.Screen name="Loans" component={Loans} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default Navigator;
