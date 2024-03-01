import {View, Image, TouchableOpacity,} from 'react-native';

AAAAAAAAAAAAAAAAAAAAAAA = () => {
    alert("Meow")
 }
const image1 = {
    uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.etsystatic.com%2F37761634%2Fr%2Fil%2F716275%2F4235331437%2Fil_570xN.4235331437_eaee.jpg&tbnid=qeguLTQn3UhvqM&vet=12ahUKEwiDlqb0gdOEAxVJA7kGHdigCqoQMygDegQIARBG..i&imgrefurl=https%3A%2F%2Fwww.etsy.com%2Flisting%2F1296811404%2Fsleeping-cat-figurine-cute-laying-kitty&docid=gp0GlCnV6tZGCM&w=570&h=456&q=cat%20statue&ved=2ahUKEwiDlqb0gdOEAxVJA7kGHdigCqoQMygDegQIARBG"
}

export default function LoginImage() {

    return(
        <View style={{backgroundColor: 'pink', width:"100%", height: '80'}}>
            <TouchableOpacity onPress={AAAAAAAAAAAAAAAAAAAAAAA}>
            <Image source={image1} style={styles.image1}/>
            </TouchableOpacity>
        </View>
    );
}