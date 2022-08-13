import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/themed";
import { Input, Text } from "@rneui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "../../providers/slices/authSlice";

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, `login`>;

const Login = (props: LoginScreenProps) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);
  const [formData, setFormData] = useState({ email: ``, password: `` });
  const submit = () => {
    dispatch(login({ ...formData }));
  };
  const onValueChange = (key: `email` | `password`, value: string) => {
    setFormData({ ...formData, [key]: value });
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: `bold` }}>
        Hi, Wecome Back! 👋
      </Text>
      <Text style={{ fontSize: 14, color: `#999EA1` }}>
        Hello again, you’ve been missed!
      </Text>
      <View style={{ marginTop: 50 }}>
        <Input
          label="Email"
          keyboardType="email-address"
          onChangeText={(value) => onValueChange(`email`, value)}
          value={formData.email}
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
          value={formData.password}
          onChangeText={(value) => onValueChange(`password`, value)}
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
        <TouchableOpacity style={{ alignSelf: `flex-end`, marginRight: 5 }}>
          <Text style={{ fontSize: 14 }}>Forgot Password</Text>
        </TouchableOpacity>
        <Button
          onPress={loading ? () => {} : submit}
          title={`Login`}
          loading={loading}
          containerStyle={{ marginTop: 20, borderRadius: 10 }}
          size={`lg`}
          titleStyle={{ fontSize: 17 }}
          buttonStyle={{ borderRadius: 10 }}
        ></Button>
        <Button
          onPress={() =>
            loading ? () => {} : props.navigation.replace(`register`)
          }
          title={`Register`}
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

export default Login;

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
