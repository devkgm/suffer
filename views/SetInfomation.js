import React, { useState, useContext } from 'react';
import AppContext from '../AppContext';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import LongButton from '../components/LongButton';
import { db, auth } from '../firebase/firebaseConfig';
import { collection, setDoc, doc } from 'firebase/firestore';

export default function SetInfomation({ navigation }) {
    const myContext = useContext(AppContext);
    const user = auth.currentUser;
    const [company, setCompany] = useState('');
    const [name, setName] = useState('');
    const handleSetInfo = async () => {
        try {
            const docRef = doc(db, 'user', user.uid);
            await setDoc(docRef, {
                Company: company,
                uid: user.uid,
                Name: name,
                Project: [],
                favoriteProject: [],
            });
            myContext.setLogin();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>suffer.</Text>

            <TextInput
                style={styles.input}
                placeholder="회사이름"
                autoCapitalize="none"
                onChangeText={(company) => setCompany(company)}
                value={company}
            />
            <TextInput
                style={styles.input}
                placeholder="이름"
                autoCapitalize="none"
                onChangeText={(name) => setName(name)}
                value={name}
            />
            <LongButton
                innerText={'설정하기'}
                customStyle={{ button: styles.login }}
                onPressEvent={handleSetInfo}
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
