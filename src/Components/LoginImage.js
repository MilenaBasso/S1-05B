import { Image, TouchableOpacity,} from 'react-native';
import { styles } from '../styles/Estilos';

gato = () => {
    alert("Knock Knock... Who's there??")
 }

export default function LoginImage() {

    return(
        <TouchableOpacity style={{ padding: 15, width: 100, height: 100 }} onPress={gato}>
            <Image source={require('../assets/images/gato.jpg')} style={styles.image1}/>
        </TouchableOpacity>
    );
}