import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default DrawerCard = ({ icon, name }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.6} style={styles.icon}>
                <Icon name={icon} size={25} color="#666" />
            </TouchableOpacity>
            <Text style={styles.text}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
    },
    icon: {
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
    },
    text: {
        margin: 3,
        fontSize: 14,
    },
});
