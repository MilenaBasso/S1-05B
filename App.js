import { StatusBar } from 'expo-status-bar';
import { styles } from './src/Styles/StyleSheet';
import Login from './src/Pages/Login';
import { StyleSheet, View, TextInput, Button, Text, Image, ImageBackground } from 'react-native';

export default function App() {
    return (
        <View style={ styles.container }> 
            <Header/>
            <Body/>
            <Footer/>
        </View>
    
    );

}