import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "../app/hooks";
import Auth from "./AuthStack";

type Props = {};

const Navigation = (props: Props) => {
  const user = useAppSelector((state) => state.auth.user);
  return <NavigationContainer>{!user && <Auth></Auth>}</NavigationContainer>;
};

export default Navigation;

const styles = StyleSheet.create({});
