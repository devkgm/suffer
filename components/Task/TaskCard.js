import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Comment from '../Comment';
import TaskContent from './TaskContent';
import OrderContent from './OrderContent';
import DescriptionContent from './DescriptionContent';

function TaskCard({ task }) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        setContent(task.DESCRIPTION);
    }, [task.DESCRIPTION]);
    let date = new Date(task.CREATE_DT).toLocaleString('ko-KR');
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.header}>
                <View style={styles.info}>
                    <Text style={styles.author}>{task.OWNER_ID}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
            <View style={styles.body}>
                {content.map((content) => {
                    if (content.type == 'order') {
                        return <OrderContent content={content} />;
                    }
                    if (content.type == 'description') {
                        return <DescriptionContent content={content} />;
                    }
                })}

                {/* <TaskContent content={task} /> */}
            </View>
            <View style={styles.comment}>
                {task.comments ? (
                    task.comments.map((comment, index) => {
                        return <Comment key={index} comment={comment} />;
                    })
                ) : (
                    <></>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 16,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
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
