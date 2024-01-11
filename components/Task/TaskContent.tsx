import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { taskContent } from '../../model/taskContent';

export type Props = {
    content: taskContent;
};

const TaskContent = ({ content }: Props) => {
    const STATUS = ['요청', '완료'];

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{content.TITLE}</Text>
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.status}>
                    <Text style={styles.statusFont}>{STATUS[content.STATUS]}</Text>
                </TouchableOpacity>
                <Text>{content.DESCRIPTION}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        elevation: 5, // 그림자 효과를 주기 위한 속성 (Android)
        shadowColor: 'black', // 그림자 색상
        shadowOffset: { width: 0, height: 2 }, // 그림자의 위치 (x, y)
        shadowOpacity: 0.2, // 그림자의 불투명도
        shadowRadius: 2, // 그림자의 크기
    },
    header: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    body: {
        backgroundColor: 'white',
        padding: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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
});

export default TaskContent;
