import { View, TextInput } from "react-native";
import { styles } from "../Styles/StyleSheet";

export default function LoginInput() {
  return (
    <View>
    /* Caixa de nome do usuário */
      <TextInput
        style={styles.inputName}
        placeholder="User"
        inputMode="text"
        placeholderTextColor="brown"
      />
    /*Caixa de senha do login*/
      <TextInput
        style={styles.inputName}
        placeholder="PassWord"
        inputMode="numeric"
        secureTextEntry={true}
        placeholderTextColor="brown"
      />
    </View>
  );
}
