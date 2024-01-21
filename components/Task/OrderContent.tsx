import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { orderContent } from '../../model/orderContent';

export type Props = {
    content: orderContent;
};

const OrderContent = ({ content }: Props) => {
    const STATUS = ['요청', '완료'];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>발주</Text>
                <TouchableOpacity style={styles.status}>
                    <Text style={styles.statusFont}>{STATUS[content.status]}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text>품목: {content.product}</Text>
                <Text>수량: {content.amount}</Text>
            </View>
        </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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

export default OrderContent;
