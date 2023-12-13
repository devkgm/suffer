import React, { useState, useContext } from 'react';
import AppContext from '../AppContext';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import LongButton from '../components/LongButton';
import { auth, db } from '../firebase/firebaseConfig'; // Import your Firebase configuration
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDoc, query, where, doc } from 'firebase/firestore';
import { storeData } from '../modules/storage';

export default function Login({ navigation }) {
    const myContext = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async () => {
                // Handle successful registration
                const user = auth.currentUser;

                const userRef = doc(db, 'user', user.uid);
                try {
                    const userSnapshot = await getDoc(userRef);
                    if (!userSnapshot.exists()) {
                        navigation.navigate('회사설정');
                    } else {
                        Alert.alert('로그인 했습니다');
                        myContext.setIsLogined(true);
                        myContext.setUid(user.uid);
                        myContext.setName(userSnapshot.data().Name);
                        await storeData('UID', user.uid);
                    }
                } catch (error) {
                    console.log(error);
                }
            })
            .catch((error) => {
                // Handle registration errors
                Alert.alert(error.message);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>suffer.</Text>

            <TextInput
                style={styles.input}
                placeholder="이메일 주소"
                autoCapitalize="none"
                onChangeText={(email) => setEmail(email)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="비밀번호"
                autoCapitalize="none"
                onChangeText={(password) => setPassword(password)}
                value={password}
            />
            <LongButton
                innerText={'로그인'}
                customStyle={{ button: styles.login }}
                onPressEvent={handleSignIn}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        position: 'absolute',
        top: 180,
        fontSize: 60,
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        width: 300,
        padding: 10,
    },
    login: {
        position: 'absolute',
        bottom: 50,
    },
});
