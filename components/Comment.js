import { StyleSheet, Text, View } from 'react-native';

export default Comment = ({ comment }) => {
    let date = new Date(comment.CREATE_DT.seconds * 1000).toLocaleString('ko-KR');
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.author}>{comment.USER_ID}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Text style={styles.description}>{comment.DESCRIPTION}</Text>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
    },
    head: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    authorIcon: {},
    author: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 10,
    },
    date: {
        fontSize: 12,
        color: 'gray',
    },
    description: {
        fontSize: 16,
    },
});
