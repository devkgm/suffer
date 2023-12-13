import React, { useState, useContext } from 'react';
import AppContext from '../AppContext';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import LongButton from '../components/LongButton';
import { auth, db } from '../firebase/firebaseConfig'; // Import your Firebase configuration
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDoc, query, where, doc } from 'firebase/firestore';
import { storeData } from '../modules/storage';
import addTask from '../modules/addTask';
import { useNavigation } from '@react-navigation/native';
import getTask from '../modules/getTask';

export default function CreateTask({ route }) {
    const myContext = useContext(AppContext);
    const { projectId } = route.params;
    const navigation = useNavigation();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleUpload = async () => {
        try {
            await addTask({
                AuthorId: myContext.uid,
                Author: myContext.name,
                Description: description,
                Title: title,
                projectId: projectId,
            });
            const taskData = await getTask(projectId);
            // for (const project of myContext.projectData) {
            // if (projectId == project.id) {
            //     console.log('프로젝트' + project);
            //     const newData = [...myContext.projectData];
            //     let findIndex = newData.findIndex((item) => item.id == projectId);
            //     if (findIndex) {
            //         newData[findIndex] = {
            //             ...newData[findIndex],
            //             Task: taskData,
            //         };
            //     }
            //     myContext.setProjectData(newData);
            // }
            // }
            // navigation.navigate('Task', { projectId: projectId });
            // navigation.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>suffer.</Text>

            <TextInput
                style={styles.input}
                placeholder="제목"
                autoCapitalize="none"
                onChangeText={(title) => setTitle(title)}
                value={title}
            />
            <TextInput
                style={[styles.input, styles.textarea]}
                multiline={true}
                numberOfLines={1}
                placeholder="본문"
                autoCapitalize="none"
                // height={200}
                onChangeText={(description) => setDescription(description)}
                value={description}
            />
            <LongButton
                innerText={'게시하기'}
                customStyle={{ button: styles.login }}
                onPressEvent={handleUpload}
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
    textarea: {
        borderWidth: 1,
        height: 200,
        textAlignVertical: 'top',
    },
    login: {
        position: 'absolute',
        bottom: 50,
    },
});
