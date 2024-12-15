import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { PaperProvider } from 'react-native-paper';
import SplashScreen from './screens/onboarding/SplashScreen';
import Onboarding from './screens/onboarding/Onboarding';
import LoginScreen from './screens/onboarding/LoginScreen';
import RegistrationScreen from './screens/onboarding/RegistrationScreen';
import PersonalDetails from './screens/onboarding/PersonalDetails';
import VerifyDocuments from './screens/onboarding/VerifyDocuments';
import AccountDetails from './screens/onboarding/AccountDetails';
import Navigator from './screens/dashboard/Navigator';
import Policies from './screens/onboarding/Policies';
import SecureAccount from './screens/onboarding/SecureAccount';
import Airtime from "./screens/transactionservices/Airtime";
import Data from "./screens/transactionservices/Data";
import Deposit from "./screens/transactionservices/Deposit";
import Invest from "./screens/transactionservices/Invest";
import Transfer from "./screens/transactionservices/Transfer";
import TvBills from "./screens/transactionservices/TvBills";
import ElectricityBills from "./screens/transactionservices/ElectricityBills";
import ListNotification from './screens/notification/ListNotification';
import ViewNotification from './screens/notification/ViewNotification';
export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="splash_screen"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    {/* onboarding screens */}
                    <Stack.Screen name="splash_screen" component={SplashScreen} />
                    <Stack.Screen name="onboarding" component={Onboarding} />
                    <Stack.Screen name="login_screen" component={LoginScreen} />
                    <Stack.Screen name="registration_screen" component={RegistrationScreen} />
                    <Stack.Screen name="personal_details" component={PersonalDetails} />
                    <Stack.Screen name="verifydocuments" component={VerifyDocuments} />
                    <Stack.Screen name="accountdetails" component={AccountDetails} />
                    <Stack.Screen name="policies" component={Policies} />
                    <Stack.Screen name="secureaccount" component={SecureAccount} />
                    {/* dashboard screens */}
                    <Stack.Screen name="screentab" component={Navigator} />
                    {/* transaction screens */}
                    <Stack.Screen name="buyairtime" component={Airtime} />
                    <Stack.Screen name="buydata" component={Data} />
                    <Stack.Screen name="depositmoney" component={Deposit} />
                    <Stack.Screen name="electricitybills" component={ElectricityBills} />
                    <Stack.Screen name="investmoney" component={Invest} />
                    <Stack.Screen name="transfermoney" component={Transfer} />
                    <Stack.Screen name="tvbills" component={TvBills} />
                    {/* notification screens */}
                    <Stack.Screen name="listnotification" component={ListNotification} />
                    <Stack.Screen name="viewnotification" component={ViewNotification} />
                </Stack.Navigator>
            </NavigationContainer>  
        </PaperProvider>
    );
};