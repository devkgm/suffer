import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { descriptionContent } from '../../model/descriptionContent';

export type Props = {
    content: descriptionContent;
};

const DescriptionContent = ({ content }: Props) => {
    const STATUS = ['요청', '완료'];

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>업무</Text>
            </View>
            <View style={styles.body}>
                <Text> {content.description}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 20,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    header: {
        backgroundColor: '#f9f9f9',
        padding: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        zIndex: 10,
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

export default DescriptionContent;
