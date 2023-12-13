import React from 'react';
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

const MyTask = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text style={styles.headerTitle}>Messages</Text>
            </View>
            <ScrollView style={styles.taskList}>
                <TaskCard
                    taskTitle={'발주요청드립니다.'}
                    taskTime={'2023-12-01 16:01'}
                    author={'김경모'}
                    taskStatus={0}
                    description={'발주요청드립니다.'}
                    taskComment={[
                        {
                            authorId: 0,
                            author: '김경모',
                            description: '이거 맞나요?',
                            date: '2023-12-09',
                        },
                    ]}
                />
                {/* You would map through your messages here */}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Type a message" />
                <TouchableOpacity style={styles.sendButton}>
                    <Ionicons name="send" size={24} color="white" />
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
        justifyContent: 'center',
        marginLeft: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16,
    },
});

export default Task;
