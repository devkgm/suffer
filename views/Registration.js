import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { app, auth } from '../firebase/firebaseConfig'; // Import your Firebase configuration
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AppContext from '../AppContext';

const Registration = ({ navigation }) => {
    const myContext = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        const minimumPasswordLength = 6; // You can adjust this value
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };
        const isValidPassword = (password) => {
            return password.length >= minimumPasswordLength;
        };
        if (!isValidEmail(email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }

        if (!isValidPassword(password)) {
            Alert.alert(
                'Invalid Password',
                `Password must be at least ${minimumPasswordLength} characters long.`,
            );
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Passwords don't match");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Passwords don't match");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Handle successful registration
                Alert.alert('User registered successfully!');
                navigation.navigate('회사설정');
            })
            .catch((error) => {
                // Handle registration errors
                Alert.alert(error.message);
            });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
                value={email}
            />
            <TextInput
                secureTextEntry
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
                value={password}
            />
            <TextInput
                secureTextEntry
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Confirm Password"
                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                value={confirmPassword}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
    },
});

export default Registration;
