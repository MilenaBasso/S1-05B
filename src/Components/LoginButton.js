import { View, Button } from "react-native";
import { styles } from "../../Styles/StyleSheet";

export default function LoginButton() {
  pressButon = () => {
    alert("abc");
  };

  return (
    <View style={styles.container}>
      <Button onPress={pressButon} title="Click Here!!" color="brown" />
    </View>
  );
}