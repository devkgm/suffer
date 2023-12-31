import React, { useState, useContext, useRef } from 'react';
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Text } from 'react-native';
import CreateHead from '../components/Common/CreateHead';
import RedirectionButton from '../components/Common/RedirectionButton';
import addTask from '../services/addTask';
import AuthContext from '../store/AuthContext';

export default function TaskCreate({ route, navigation }) {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const { projectId } = route.params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const myAuthContext = useContext(AuthContext);
    const handleBlur = () => {
        inputRef1.current.blur();
    };

    const handleCancle = () => {
        navigation.goBack();
    };
    const handleUpload = async () => {
        await addTask(
            projectId,
            myAuthContext.name,
            myAuthContext.user.uid,
            (Charge = []),
            description,
            (Status = 0),
            title,
        );
        navigation.goBack();
    };

    return (
        <TouchableWithoutFeedback onPress={handleBlur}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <CreateHead
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
                    <RedirectionButton placeholder="담당자 추가" icon="user" />
                </View>
                <View style={styles.addCharge}>
                    <RedirectionButton
                        placeholder="업무에 대해 설명해주세요."
                        icon="pencil"
                        redirectPage="EditDescription"
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
