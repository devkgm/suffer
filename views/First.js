import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import AppContext from '../AppContext';
import { useContext } from 'react';
import LongButton from '../components/LongButton';
const First = ({ navigation }) => {
    const myContext = useContext(AppContext);
    const handleLogin = () => {
        navigation.navigate('Login');
    };
    const handleRegister = () => {
        navigation.navigate('Registration');
    };
    useEffect(() => {}, [myContext.isLogined]);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>suffer.</Text>
            <View style={styles.buttonContainer}>
                <LongButton
                    customStyle={{ button: styles.login }}
                    innerText={'로그인'}
                    onPressEvent={handleLogin}
                />
                <LongButton
                    customStyle={{ button: styles.register, text: styles.register }}
                    innerText={'회원가입'}
                    onPressEvent={handleRegister}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 60,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
    },
    login: {
        backgroundColor: '#9A2AFF',
    },
    register: {
        backgroundColor: '#F3EBFA',
        color: '#000',
    },
});

export default First;
