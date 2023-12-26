import { storeData } from '../store/storage';
import { Alert } from 'react-native';

export default signIn = async (email, password) => {
    try {
        const response = await fetch('http://192.168.45.212:3000/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ email: email, password: password }),
        });
        const data = await response.json();
        console.log(data);
        storeData('user', data.user);
        storeData('accessToken', data.accessToken);
        storeData('refreshToken', data.refreshToken);
        return data.user;
    } catch (error) {
        Alert.alert('이메일 혹은 비밀번호를 확인해주세요.');
        console.error(new Error(error));
    }
};
