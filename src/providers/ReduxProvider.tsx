import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";

type Props = {
  children: ReactNode;
};

const ReduxProvider = (props: Props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;
