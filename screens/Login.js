import { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import signIn from '../services/signIn';
import AuthContext from '../store/AuthContext';
export default Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const myAuthContext = useContext(AuthContext);
    const handleSubmit = async () => {
        const user = await signIn(email.trim(), password.trim());
        if (user) {
            myAuthContext.setIsLogin(true);
            myAuthContext.setUser(user);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={CommonStyles.mlogo}>suffer.</Text>
            <TextInput
                style={styles.input}
                placeholder="이메일"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="비밀번호"
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <TouchableOpacity
                style={[styles.button, CommonStyles.longButton]}
                onPress={() => handleSubmit()}
            >
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
