import { signOut } from 'firebase/auth';
import { auth, db } from './firebaseConfig';
import { storeData } from '../store/storage';

export default logOut = () => {
    signOut(auth)
        .then(() => {
            console.log('로그아웃');
        })
        .catch((error) => {
            console.error(new Error(error));
        });
};
