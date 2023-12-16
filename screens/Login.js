import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
export default Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Text style={CommonStyles.mlogo}>suffer.</Text>
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
            <TouchableOpacity style={[styles.button, CommonStyles.longButton]}>
                <Text style={CommonStyles.longButtonText}>로그인 하기</Text>
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
