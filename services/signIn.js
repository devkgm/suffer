import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebaseConfig';
import { storeData } from '../store/storage';
import { Alert } from 'react-native';

export default signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            storeData('user', user);
            return user;
        })
        .catch((error) => {
            Alert.alert('이메일 혹은 비밀번호를 확인해주세요.');
            console.error(new Error(error));
        });
};
