import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Text style={{backgroundColor:'red'}}>welcome world</Text>
            <Button
                title='Learn More'
                color='#841584'
                accessibilityLabel='Learn more about this purple button'
        />
        <TextInput placeholder='welcome'/>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
