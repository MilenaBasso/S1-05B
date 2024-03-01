import { View, } from "react-native";
import { styles } from "../styles/StyleSheet";
import LoginInput from "./LoginInput";
import LoginText from "./LoginText";
import LoginButton from "./LoginButton";
import LoginImage from "./LoginImage";
import LoginImageBackground from "./LoginImageBackground";

export default function BodyComponent() {
  return (
    <View style={styles.secondaryContainer}>
      <LoginButton /> <LoginImage /> <LoginImageBackground /> <LoginInput /> <LoginText />
    </View>
  );
}
