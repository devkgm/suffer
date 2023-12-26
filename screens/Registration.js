import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import registration from '../services/registration';
export default Registration = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const handleSubmit = async () => {
        if (!isSamePassword(password, passwordCheck)) {
            Alert.alert('비밀번호가 일치하지 않습니다.');
        } else if (!isValidEmail(email)) {
            Alert.alert('유효하지 않은 이메일', '올바른 이메일 주소를 입력하세요.');
        } else if (!isValidPassword(password)) {
            Alert.alert(
                '유효하지 않은 비밀번호',
                '비밀번호는 최소 6자 이상, 영문, 숫자, 특수 기호를 포함해야 합니다.',
            );
        } else {
            const user = await registration(email.trim(), password.trim());
            navigation.navigate('FirstSetting');
        }
    };
    const isSamePassword = (password, passwordCheck) => {
        return password == passwordCheck;
    };
    const isValidEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };
    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return passwordRegex.test(password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>suffer.</Text>
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
            <TextInput
                style={styles.input}
                placeholder="비밀번호 확인"
                autoCapitalize="none"
                onChangeText={(text) => setPasswordCheck(text)}
                value={passwordCheck}
            />
            <TouchableOpacity
                style={[styles.button, CommonStyles.longButton]}
                onPress={() => handleSubmit()}
            >
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
