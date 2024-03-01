import { View } from "react-native";
import { styles } from "../styles/Estilos";
import LoginImage from "./LoginImage";

export default function FooterComponent() {
  return (
    <View style={{ backgroundColor: "black", width: "100%", height: 60 }}>
      <LoginImage/>
    </View>
  );
}
