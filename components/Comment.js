import { StyleSheet, Text, View } from 'react-native';

export default Comment = ({ taskComment }) => {
    return taskComment.map((comment, index) => (
        <View key={index} style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.author}>{comment.author}</Text>
                <Text style={styles.date}>{comment.date}</Text>
            </View>
            <Text style={styles.description}>{comment.description}</Text>
        </View>
    ));
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
        color: 'graa',
    },
    description: {
        fontSize: 16,
    },
});
