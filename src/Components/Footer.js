import { StyleSheet, Text, View } from "react-native";
import { styles } from "../../Styles/StyleSheet";
import LoginImage from "./LoginImage";

export default function Footer() {
  return (
    <View style={{ backgroundColor: "black", width: "100%", height: 60 }}><LoginImage/></View>
  );
}
