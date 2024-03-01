import { StatusBar } from 'expo-status-bar';
import { styles } from './src/Styles/StyleSheet';
import Login from './src/Pages/Login';
import { StyleSheet, View, Image, } from 'react-native';

export default function App() {
    return (
        <View style={ styles.container }> 
        <Login/>
        </View>
    
    );

}