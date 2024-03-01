import { StatusBar } from "expo-status-bar";
import { styles } from "./src/styles/StyleSheet";
import { StyleSheet, View } from "react-native";
import Login from "./src/Pages/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}
