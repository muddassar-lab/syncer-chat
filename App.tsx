import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";
import { Input } from "@rneui/themed";
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Button title="working"></Button>
        <Input
          placeholder="Enter a comment"
          label="comment"
          style={{ backgroundColor: "orange", color: "white" }}
        ></Input>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
