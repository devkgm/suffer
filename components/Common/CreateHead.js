import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';

export default CreateHead = ({ leftText, rightText, leftHandler, rightHandler }) => {
    return (
        <View style={styles.head}>
            <TouchableWithoutFeedback onPress={() => leftHandler()}>
                <Text style={styles.leftText}>{leftText}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.logo}>suffer.</Text>
            <TouchableWithoutFeedback onPress={() => rightHandler()}>
                <Text style={styles.rightText}>{rightText}</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    head: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#9A2AFF',
        padding: 10,
    },
    logo: {
        fontSize: 32,
        color: 'white',
    },
    leftText: {
        fontSize: 16,
        color: 'white',
    },
    rightText: {
        fontSize: 16,
        color: 'white',
    },
});
