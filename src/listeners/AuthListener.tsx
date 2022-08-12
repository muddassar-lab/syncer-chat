import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode, useEffect } from "react";
import { supabase } from "../app/supabase";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../providers/slices/authSlice";

type Props = {
  children: ReactNode;
};

const AuthListener = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user != null || session?.user != undefined) {
        dispatch(setUser(session.user));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return <View style={styles.container}>{props.children}</View>;
};

export default AuthListener;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
