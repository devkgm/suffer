import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
export default Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>suffer.</Text>
            <TextInput
                style={styles.input}
                placeholder="이메일"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="비밀번호"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <TextInput
                style={styles.input}
                placeholder="비밀번호 확인"
                onChangeText={(text) => setPasswordCheck(text)}
                value={passwordCheck}
            />
            <TouchableOpacity style={[styles.button, CommonStyles.longButton]}>
                <Text style={CommonStyles.longButtonText}>회원가입</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        fontSize: 60,
        position: 'absolute',
        top: 100,
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
        width: 300,
    },
    button: {
        margin: 10,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9A2AFF',
        position: 'absolute',
        bottom: 50,
    },
});
