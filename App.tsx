import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";
import { Input } from "@rneui/themed";
import Navigation from "./src/navigation/Navigation";
import ReduxProvider from "./src/providers/ReduxProvider";
import AuthListener from "./src/listeners/AuthListener";
export default function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider>
        <SafeAreaView style={styles.container}>
          <AuthListener>
            <Navigation />
          </AuthListener>
        </SafeAreaView>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
