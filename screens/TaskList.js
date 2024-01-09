import React, { useCallback, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RefreshControl } from 'react-native';
import TaskCard from '../components/Task/TaskCard';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import MainContext from '../store/MainContext';
import getTask from '../services/getTask';
import AuthContext from '../store/AuthContext';
import { Animated } from 'react-native';

export default TaskList = ({ route, navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    const { projectId, project } = route.params;
    const [tasks, setTasks] = useState([]);
    const myMainContext = useContext(MainContext);
    const myAuthContext = useContext(AuthContext);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // 데이터 새로고침 로직
        loadTasks(true).then(() => {
            setRefreshing(false);
        });
    }, []);
    const loadTasks = async () => {
        const { taskData, user } = await getTask(myAuthContext.user, projectId);
        setTasks(taskData);
        myAuthContext.setUser(user);
    };
    const handleAddButton = () => {
        // navigation.navigate('TaskCreate');
        navigation.navigate('OrderCreate');
    };
    useFocusEffect(
        useCallback(() => {
            myMainContext.setBgColor(project.CARD_COLOR);
            loadTasks();
        }, []),
    );
    return (
        <View style={styles.container}>
            <View style={[styles.header, { backgroundColor: project.CARD_COLOR }]}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{project.TITLE}</Text>
                <Text style={styles.headerTitle}>{project.DESCRIPTION}</Text>
            </View>
            <ScrollView
                style={styles.taskList}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {tasks.map((task, index) => {
                    return <TaskCard key={index} task={task} />;
                })}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.sendButton} onPress={() => handleAddButton()}>
                    <Ionicons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
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
