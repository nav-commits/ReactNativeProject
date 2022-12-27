import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import DataContent from './src/Components/DataContent/DataContent';
import AddUsers from './src/Components/AddUsers/AddUsers';
import { useState } from 'react';

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

export default function App() {
    const [addUsers, setAddUsers] = useState(users);
    const [enteredText, setEnteredText] = useState('');
    const changeHandler = (textValue) => {
        setEnteredText(textValue);
        console.log(enteredText)
    };

    const addUsersHandler = (text) => {
        setAddUsers((currentUsers) => [...currentUsers, { name: text }]);
        console.log(addUsers);
        setEnteredText('')
    };
    return (
        <View style={styles.container}>
            <AddUsers
                changeHandler={changeHandler}
                addUsersHandler={addUsersHandler}
                enteredText={enteredText}
            />
            <Text style={styles.title}>Best Users</Text>
            <DataContent users={addUsers} />
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
