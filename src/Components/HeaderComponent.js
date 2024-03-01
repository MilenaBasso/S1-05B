import { View,  } from "react-native";
import { styles } from "../styles/Estilos";

export default function HeaderComponent() {
  return (
    <View style={[styles.secondaryContainer,{ backgroundColor: "black", width: "100%", height: 60 }]}></View>
  );
}
