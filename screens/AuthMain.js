import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
const AuthMain = ({ navigation }) => {
    const handleLoginButton = () => {
        navigation.navigate('Login');
    };
    const handleRegistButton = () => {
        navigation.navigate('Registration');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>suffer.</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={CommonStyles.longButton}
                    onPress={() => handleLoginButton()}
                >
                    <Text style={CommonStyles.longButtonText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[CommonStyles.longButton, styles.register]}
                    onPress={() => handleRegistButton()}
                >
                    <Text style={[CommonStyles.longButtonText, styles.register]}>회원가입</Text>
                </TouchableOpacity>
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
    logo: {
        position: 'absolute',
        top: 100,
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

export default AuthMain;
