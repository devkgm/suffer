import React, { useState, useContext, useRef, useEffect } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Text,
    TouchableOpacity,
    Button,
} from 'react-native';
import CreateHead from '../components/Common/CreateHead';
import RedirectionButton from '../components/Common/RedirectionButton';
import addTask from '../services/addTask';
import AuthContext from '../store/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderContent from '../components/Task/OrderContent';
import TaskContent from '../components/Task/TaskContent';
import DescriptionContent from '../components/Task/DescriptionContent';

const TaskDetail = ({ route, navigation }) => {
    const inputRef1 = useRef(null);
    const [showIcons, setShowIcons] = useState(false);
    const { projectId } = route.params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState([]);
    const [selectedMember, setSelectedMember] = useState([]);

    const myAuthContext = useContext(AuthContext);
    const handleBlur = () => {
        inputRef1.current.blur();
    };
    useEffect(() => {
        console.log(route.params.description);
        if (route.params.fromScreen == 'TaskList') {
            setDescription(route.params.description.DESCRIPTION);
            setTitle(route.params.description.TITLE);
        }
    }, [route.params?.description]);

    const handleCancle = () => {
        navigation.goBack();
    };

    const handleUpload = async () => {
        await addTask({
            task: {
                title: title,
                members: selectedMember,
                description: JSON.stringify(description),
                owner_id: myAuthContext.user.id,
                project_id: projectId,
            },
            user: myAuthContext.user,
        });
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

                <Text style={styles.title}>{title}</Text>
                <View style={styles.addCharge}></View>

                <View>
                    {description.map((content, index) => {
                        if (content.type == 'order') {
                            return <OrderContent content={content} key={index} />;
                        }
                        if (content.type == 'description') {
                            return <DescriptionContent content={content} key={index} />;
                        }
                    })}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default TaskDetail;

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
        padding: 10,
        lineHeight: 30,
        fontSize: 24,
        fontWeight: 'bold',
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
    addButton: {
        position: 'absolute',
        right: 20,
        bottom: 40,
        width: 50,
        height: 50,
        backgroundColor: '#9A2AFF',
        alignItems: 'center',
        borderRadius: 16,
        padding: 10,
    },
    hideButton: {
        position: 'absolute',
        right: 20,
        bottom: 0,
        width: 50,
        backgroundColor: '#9A2AFF',
    },
    taskButton: {
        position: 'absolute',
        bottom: 160,
        width: 50,
        height: 50,
        backgroundColor: '#9A2AFF',
        alignItems: 'center',
        borderRadius: 16,
        padding: 10,
    },
    orderButton: {
        position: 'absolute',
        bottom: 100,
        width: 50,
        height: 50,
        backgroundColor: '#9A2AFF',
        alignItems: 'center',
        borderRadius: 16,
        padding: 10,
    },
});
