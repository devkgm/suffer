import React, { useEffect } from 'react';
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
    let date = new Date(taskTime.seconds * 1000).toLocaleString('ko-KR');

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
                <Text style={styles.title}>{taskTitle}</Text>

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
        paddingBottom: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
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
        marginBottom: 3,
    },
    date: {
        fontSize: 12,
        color: 'gray',
    },
    title: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {},
    body: {
        margin: 10,
    },
    comment: {},
});

export default TaskCard;
