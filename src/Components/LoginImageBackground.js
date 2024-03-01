import { View, ImageBackground, Text } from "react-native";
import { styles } from "../styles/StyleSheet";
import HeaderComponent from "./HeaderComponent";
import BodyComponent from "./BodyComponent";
import FooterComponent from "./FooterComponent";

export default function LoginImageBackground() {
  return (
    <ImageBackground source={require("../assets/images/fundo.jpg")} style={styles.img}>
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>

    </ImageBackground>
  );
}
