import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const getIconName = (routeName) => {
    switch (routeName) {
        case "Overview":
            return "home-outline";
        case "Account":
            return "account-outline";
        case "Transactions":
            return "bank-transfer";
        case "Loans":
            return "currency-btc";
        case "Settings":
            return "cog-outline";
    }
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
    const { bottom } = useSafeAreaInsets();

    return (
        <View className=" flex-row py-2 bg-white items-center justify-around">
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        onPress={onPress}
                        className=" items-center justify-center space-y-1 flex"
                    >
                        <View className={`px-3 py-1 rounded-2xl flex items-center justify-center ${isFocused ? 'bg-[#ddffe5]' : 'bg-transparent'}`}>
                            <MaterialCommunityIcons name={getIconName(route.name)} size={20} color={isFocused ? "#34c759" : "#666"} />
                        </View>
                        <Text style={{ color: isFocused ? "#34c759" : "#666" }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomTabBar;

const styles = StyleSheet.create({
    focusedIcon: {
        backgroundColor: "blue",
        borderRadius: "15px",
        opacity: "10",
        padding: "10px 15px",
    },
});
