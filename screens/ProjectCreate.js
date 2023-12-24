import React, { useState, useContext, useRef } from 'react';
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Text } from 'react-native';
import TaskCreateHead from '../components/Task/TaskCreateHead';
import TaskRedirectionButton from '../components/Task/TaskRedirectionButton';

export default function ProjectCreate({ route, navigation }) {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleBlur = () => {
        inputRef1.current.blur();
    };

    const handleCancle = () => {
        navigation.goBack();
    };
    const handleUpload = () => {};

    return (
        <TouchableWithoutFeedback onPress={handleBlur}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <TaskCreateHead
                        leftText="취소"
                        rightText="만들기"
                        rightHandler={handleUpload}
                        leftHandler={handleCancle}
                    />
                </View>

                <TextInput
                    style={[styles.input, styles.title]}
                    placeholder="프로젝트 이름을 입력하세요."
                    autoCapitalize="none"
                    onChangeText={(title) => setTitle(title)}
                    value={title}
                    ref={inputRef1}
                />
                <View style={styles.addCharge}>
                    <TaskRedirectionButton placeholder="팀원 추가" icon="user" />
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
