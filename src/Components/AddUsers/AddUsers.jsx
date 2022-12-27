import { StyleSheet, Text, View, Button, TextInput, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function AddUsers({ changeHandler, addUsersHandler, enteredText  }) {
    return (
        <View style={styles.container}>
            <Button onPress={addUsersHandler} title='Add User' />
            <TextInput style={styles.textInput} placeholder='Add User' onChange={changeHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textInput: {
        width: '80%',
        borderWidth: 2,
        borderColor: '#cccccc',
        marginLeft: 10,
        paddingLeft: 10,
    },
});
