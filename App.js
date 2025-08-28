import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Calculadora from "./componentes/Calculadora";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>A2 - Calculadora</Text>
      <Calculadora></Calculadora>
      <StatusBar style="auto" />
    </View>
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
