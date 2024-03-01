import { StyleSheet, Text, View } from "react-native";
import { styles } from "../styles/StyleSheet";
import LoginImage from "./LoginImage";

export default function FooterComponent() {
  return (
    <View style={[styles.secondaryContainer, { backgroundColor: "black", width: "100%", height: 60 }]}><LoginImage/></View>
  );
}
