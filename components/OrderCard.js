import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Comment from '../Comment';

export default OrderCard = ({ order }) => {
    let date = new Date(order.Date.seconds * 1000).toLocaleString('ko-KR');
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.header}>
                <View style={styles.info}>
                    <Text style={styles.author}>{order.Author}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>

                <TouchableOpacity style={styles.status}>
                    <Text style={styles.statusFont}>{order.Status}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                {/* <Text style={styles.title}>{order.Title}</Text> */}

                <Text>품목 : {order.Product}</Text>
                <Text>수량 : {order.Amount}</Text>
            </View>
            <View style={styles.comment}>
                {order.Comment.map((comment, index) => {
                    return <Comment key={index} comment={comment} />;
                })}
            </View>
        </TouchableOpacity>
    );
};

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
