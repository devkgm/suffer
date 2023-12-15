import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';

export default CreateTaskHead = ({ leftText, rightText, rightHandler, leftHandler }) => {
    return (
        <View style={styles.head}>
            <TouchableWithoutFeedback onPress={() => leftHandler()}>
                <Text style={styles.goBack}>{leftText}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.logo}>suffer.</Text>
            <TouchableWithoutFeedback onPress={() => rightHandler()}>
                <Text style={styles.submit}>{rightText}</Text>
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
    goBack: {
        fontSize: 16,
        color: 'white',
    },
    submit: {
        fontSize: 16,
        color: 'white',
    },
});
