import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskCard from '../components/TaskCard';
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import getProjectTasks from '../modules/getProjectTasks';
import { useNavigation } from '@react-navigation/native';
const Project = ({ route }) => {
    const { projectId } = route.params;
    const [tasks, setTasks] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        const loadTasks = async () => {
            const taskData = await getProjectTasks(db, projectId);
            setTasks(taskData);
        };
        loadTasks();
    }, []);
    const handleAddButton = () => {
        navigation.navigate('업무추가', { projectId: projectId });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text style={styles.headerTitle}>Messages</Text>
            </View>
            <ScrollView style={styles.taskList}>
                {tasks.map((task, index) => (
                    <TaskCard
                        key={index}
                        author={task.Author}
                        taskTitle={task.Title}
                        taskDescription={task.Desctiption}
                        taskStatus={task.Status}
                        taskTime={task.Date}
                        taskComment={[
                            {
                                authorId: 0,
                                author: '김경모',
                                description: '이거 맞나요?',
                                date: '2023-12-09',
                            },
                        ]}
                    />
                ))}

                {/* You would map through your messages here */}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.sendButton} onPress={() => handleAddButton()}>
                    <Ionicons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'green',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 8,
    },
    taskList: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',

        padding: 8,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 16,
        padding: 8,
    },
    sendButton: {
        backgroundColor: 'blue',
        alignItems: 'center',
        marginLeft: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16,
    },
});

export default Project;
