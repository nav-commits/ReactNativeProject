import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import DataContent from './src/Components/DataContent/DataContent';

export default function App() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.title} placeholder='Best Users' />
            <DataContent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
