import { StyleSheet, Text, View } from 'react-native';

export default Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>suffer.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        fontSize: 100,
    },
});
