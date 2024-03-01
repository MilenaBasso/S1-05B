import { View, } from "react-native";
import { styles } from "../styles/Estilos";
import LoginInput from "./LoginInput";
import LoginText from "./LoginText";
import LoginButton from "./LoginButton";

export default function BodyComponent() {
  return (
    <View style={styles.container}>
      <LoginText/>
      <LoginInput />
      <LoginButton />
    </View>
  );
}
