import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const users = [
    {
        name: 'Brian',
        occupation: 'Web Developer',
    },
    {
        name: 'John',
        occupation: 'Doctor',
    },
    {
        name: 'Mark',
        occupation: 'Teacher',
    },
];
export default function DataContent() {
    return (
        <View title='CARD WITH DIVIDER'>
            {users.map((u, i) => {
                return (
                    <View style={styles.container} key={i}>
                        <StatusBar backgroundColor='lightgray' />
                        <Text> Occupation: {u.occupation}</Text>
                        <Text key={i}>
                            <Text> Name: {u.name}</Text>
                        </Text>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        borderRadius: 10,
        padding: 40,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
});
