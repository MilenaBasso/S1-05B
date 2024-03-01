import {ImageBackground,} from "react-native";
import { styles } from "../styles/Estilos";
import HeaderComponent from "./HeaderComponent";
import BodyComponent from "./BodyComponent";
import FooterComponent from "./FooterComponent";

export default function LoginImageBackground() {
  return (
    <ImageBackground source={require('../assets/images/fundo.jpg')} style={styles.img}>
      
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />

    </ImageBackground>
  );
}
