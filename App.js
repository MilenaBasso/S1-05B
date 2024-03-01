import { StatusBar } from "expo-status-bar";
import { styles } from "./src/styles/Estilos";
import { View } from "react-native";
import Login from './src/Pages/Login'

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}
