import { View, Button } from "react-native";
import { styles } from "../styles/Estilos";

export default function LoginButton() {
  pressButon = () => {
    alert("Heyyyy!!");
  };

  return (
      <Button onPress={pressButon} title="Click Here!!" color="brown" />
  );
}
