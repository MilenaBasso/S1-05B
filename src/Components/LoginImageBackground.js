import { View, ImageBackground } from "react-native";

export default function LoginImageBackground() {
  return (
    <ImageBackground source={require("../images/fundo.jpg")} style={styles.img}>
      <Header />
      <Body />
      <Footer />
    </ImageBackground>
  );
}
