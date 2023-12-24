import React, { useCallback, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RefreshControl } from 'react-native';
import TaskCard from '../components/Task/TaskCard';
import ProjectContext from '../store/ProjectContext';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import MainContext from '../store/MainContext';

export default TaskList = ({ route, navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    const { project } = route.params;
    const myMainContext = useContext(MainContext);
    const myProjectContext = useContext(ProjectContext);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // 데이터 새로고침 로직
        loadTasks(true).then(() => {
            setRefreshing(false);
        });
    }, []);
    const loadTasks = async () => {
        console.log('loadTask');
        const taskData = await getTask(project.id);
        const newData = myProjectContext.projects;
        const index = newData.findIndex((item) => item.id == project.id);
        newData[index].Task = taskData;
        console.log(newData[index].Task);
        myProjectContext.setProjects(newData);
    };
    const handleAddButton = () => {
        // navigation.navigate('TaskCreate');
        navigation.navigate('OrderCreate');
    };
    useFocusEffect(
        useCallback(() => {
            console.log('hello@@@@@@@@@@@@@@@@@@');
            myMainContext.setBgColor(project.CardColor);
            loadTasks();
        }, []),
    );
    return (
        <View style={styles.container}>
            <View style={[styles.header, { backgroundColor: project.CardColor }]}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{project.Title}</Text>
            </View>
            <ScrollView
                style={styles.taskList}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {project.Task.map((task, index) => {
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
