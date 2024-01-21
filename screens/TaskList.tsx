import React, { useCallback, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RefreshControl } from 'react-native';
import TaskCard from '../components/Task/TaskCard';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import MainContext from '../store/MainContext';
import getTask from '../services/getTask';
import AuthContext from '../store/AuthContext';
import { Animated } from 'react-native';
import { Separator } from 'react-native-btr';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskList = ({ route, navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    const { projectId, project } = route.params;
    const [tasks, setTasks] = useState([]);
    const myMainContext = useContext(MainContext);
    const myAuthContext = useContext(AuthContext);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // 데이터 새로고침 로직
        loadTasks().then(() => {
            setRefreshing(false);
        });
    }, []);
    const loadTasks = async () => {
        const { taskData, user } = await getTask(myAuthContext.user, projectId);
        setTasks(taskData);
        myAuthContext.setUser(user);
    };
    const handleAddButton = () => {
        navigation.navigate('TaskCreate');
        // navigation.navigate('OrderCreate');
    };
    useFocusEffect(
        useCallback(() => {
            myMainContext.setBgColor(project.CARD_COLOR);
            loadTasks();
        }, []),
    );
    const renderItem = ({ item, index }: any) => {
        const handleOnPress = () => {
            console.log('hello');
            navigation.navigate('TaskDetail', { fromScreen: 'TaskList', description: item });
        };
        return (
            <TouchableOpacity style={styles.container} onPress={() => handleOnPress()}>
                <TaskCard task={item} />
            </TouchableOpacity>
        );
    };

    const keyExtractor = (item: any, index: number) => {
        return item.ID + index + item.CREATE_DT;
    };

    return (
        <View style={styles.container}>
            <View style={[styles.header, { backgroundColor: project.CARD_COLOR }]}>
                <View style={styles.back}>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{project.TITLE}</Text>
                </View>

                <Text style={styles.headerTitle}>{project.DESCRIPTION}</Text>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() =>
                        navigation.navigate('ProjectSetting', {
                            fromScreen: 'TaskList',
                            project: project,
                            projectId: projectId,
                        })
                    }
                >
                    <Icon name="bars" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                onRefresh={onRefresh}
                refreshing={refreshing}
                ItemSeparatorComponent={() => <Separator />}
            />
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.sendButton} onPress={() => handleAddButton()}>
                    <Ionicons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default TaskList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 8,
    },
    back: {
        flexDirection: 'row',
        alignItems: 'center',
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
