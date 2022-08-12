import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";

type Props = {};

const AuthStack = createNativeStackNavigator();
const Auth = (props: Props) => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="login" component={Login}></AuthStack.Screen>
      <AuthStack.Screen name="register" component={Register}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default Auth;
