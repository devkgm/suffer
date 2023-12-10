import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Order from './Order';
import Comment from './Comment';
function TaskCard({
    author,
    taskTitle,
    taskDescription,
    onPress,
    taskStatus,
    taskId,
    taskTime,
    taskComment,
}) {
    const date = taskTime.toDate().toLocaleDateString('ko-KR');
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.header}>
                <View style={styles.info}>
                    <Text style={styles.author}>{author}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>

                <TouchableOpacity style={styles.status}>
                    <Text style={styles.statusFont}>{taskStatus}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text>{taskTitle}</Text>
                <Order />
            </View>
            <View style={styles.comment}>
                <Comment taskComment={taskComment} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#fff',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    info: {},
    status: {
        height: 30,
        width: 50,
        backgroundColor: 'blue',
        borderRadius: 20,
    },
    statusFont: {
        textAlign: 'center',
        lineHeight: 30,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    author: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 12,
        color: 'grey',
    },
    title: {},
    description: {},
    body: {
        margin: 10,
    },
    comment: {},
});

export default TaskCard;
