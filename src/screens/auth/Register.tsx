import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Button, Input, Text } from "@rneui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { register } from "../../providers/slices/authSlice";

type RegisterScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  `register`
>;
const Register = (props: RegisterScreenProps) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);
  const [formData, setFormData] = useState({
    email: ``,
    password: ``,
    name: ``,
    imageUrl: ``,
  });
  const submit = () => {
    dispatch(register({ ...formData }));
  };
  const onValueChange = (key: `email` | `password`, value: string) => {
    setFormData({ ...formData, [key]: value });
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: `bold` }}>
        Create an account
      </Text>
      <Text style={{ fontSize: 14, color: `#999EA1` }}>
        Connect with your friends today!
      </Text>
      <View style={{ marginTop: 50 }}>
        <Input
          label="Name"
          keyboardType="default"
          inputContainerStyle={{
            borderWidth: 1,
            borderColor: `#C6C6C6`,
            paddingVertical: 5,
            borderRadius: 10,
            paddingLeft: 5,
          }}
          placeholder="Please enter your name"
        ></Input>

        <Input
          label="Email"
          keyboardType="email-address"
          inputContainerStyle={{
            borderWidth: 1,
            borderColor: `#C6C6C6`,
            paddingVertical: 5,
            borderRadius: 10,
            paddingLeft: 5,
          }}
          placeholder="Please enter your email"
        ></Input>
        <Input
          label="Password"
          keyboardType="visible-password"
          placeholder="Please enter your password"
          inputContainerStyle={{
            borderWidth: 1,
            borderColor: `#C6C6C6`,
            paddingVertical: 5,
            borderRadius: 10,
            paddingLeft: 5,
          }}
        ></Input>
        <Button
          title={`Register`}
          onPress={loading ? () => {} : submit}
          containerStyle={{ marginTop: 20, borderRadius: 10 }}
          size={`lg`}
          titleStyle={{ fontSize: 17 }}
          buttonStyle={{ borderRadius: 10 }}
        ></Button>
        <Button
          title={`Login`}
          onPress={() =>
            loading ? () => {} : props.navigation.replace(`login`)
          }
          type={`outline`}
          containerStyle={{ marginTop: 20, borderRadius: 10 }}
          size={`lg`}
          titleStyle={{ fontSize: 17 }}
          buttonStyle={{ borderRadius: 10 }}
        ></Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: Dimensions.get(`window`).width,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: `center`,
  },
});
