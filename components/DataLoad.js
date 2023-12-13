import { View, StyleSheet, Text } from 'react-native';

export default DataLoad = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>suffer.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 80,
    },
});
