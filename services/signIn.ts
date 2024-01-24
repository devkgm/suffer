import { User } from '../model/user';
import { storeData } from '../store/storage';
import { Alert } from 'react-native';

const signIn = async (email: string, password: string) => {
    try {
        const response = await fetch(process.env.EXPO_PUBLIC_API_URL + '/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ email: email, password: password }),
        });

        const user = (await response.json()) as User;

        storeData('user', user);
        return user;
    } catch (error) {
        Alert.alert('이메일 혹은 비밀번호를 확인해주세요.');
        console.error(new Error(error));
    }
};

export default signIn;
