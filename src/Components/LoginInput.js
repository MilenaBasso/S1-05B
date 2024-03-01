import { View, TextInput } from "react-native";
import { styles } from "../styles/Estilos";

export default function LoginInput() {
  return (
    <View>
    {/* Caixa de nome do usuário */}
      <TextInput
        style={styles.inputname}
        placeholder="User"
        inputMode="text"
        placeholderTextColor="purple"
      />
    {/*Caixa de senha do login*/}
      <TextInput
        style={styles.inputname}
        placeholder="PassWord"
        inputMode="numeric"
        secureTextEntry={true}
        placeholderTextColor="purple"
      />
    </View>
  );
}
