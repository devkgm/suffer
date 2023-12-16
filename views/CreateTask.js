import React, { useState, useContext, useRef } from 'react';
import AppContext from '../AppContext';
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Text } from 'react-native';
import addTask from '../modules/addTask';
import getTask from '../modules/getTask';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskRedirectionButton from '../components/TaskRedirectionButton';
import CreateTaskHead from '../components/CreateTaskHead';

export default function CreateTask({ route, navigation }) {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const myContext = useContext(AppContext);
    const { projectId } = route.params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleBlur = () => {
        inputRef1.current.blur();
    };
    const handleUpload = async () => {
        try {
            const taskRef = await addTask({
                AuthorId: myContext.uid,
                Author: myContext.name,
                Description: description,
                Title: title,
                projectId: projectId,
            });
            const taskData = await getTask(projectId);
            console.log('taskData');
            const newData = [...myContext.projectData];
            let findIndex = newData.findIndex((item) => item.id == projectId);
            newData[findIndex].data = {
                ...newData[findIndex].data,
                Task: taskData,
            };
            myContext.setProjectData(newData);
            navigation.goBack();
        } catch (err) {
            console.log(err);
        }
    };
    const handleCancle = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={handleBlur}>
                <View style={styles.container}>
                    <View style={styles.head}>
                        <CreateTaskHead
                            leftText="취소"
                            rightText="게시"
                            rightHandler={handleUpload}
                            leftHandler={handleCancle}
                        />
                    </View>

                    <TextInput
                        style={[styles.input, styles.title]}
                        placeholder="업무명을 입력하세요."
                        autoCapitalize="none"
                        onChangeText={(title) => setTitle(title)}
                        value={title}
                        ref={inputRef1}
                    />
                    <View style={styles.addCharge}>
                        <TaskRedirectionButton placeholder="담당자 추가" icon="user" />
                    </View>
                    <View style={styles.addCharge}>
                        <TaskRedirectionButton
                            placeholder="업무에 대해 설명해주세요."
                            icon="pencil"
                            redirectPage="TaskDescription"
                            setState={setDescription}
                            getState={description}
                        />
                    </View>
                    <View>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    head: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#9A2AFF',
        padding: 10,
    },
    logo: {
        fontSize: 32,
        color: 'white',
    },
    goBack: {
        fontSize: 16,
        color: 'white',
    },
    submit: {
        fontSize: 16,
        color: 'white',
    },
    addCharge: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
    },
    input: {
        height: 50,
        padding: 12,
        width: '100%',
    },
    title: {
        fontSize: 18,
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
    description: {
        fontSize: 18,
        padding: 10,
    },
});
