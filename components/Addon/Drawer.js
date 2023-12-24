import { View, Text, StyleSheet } from 'react-native';
import DrawerCard from './DrawerCard';
import { useNavigation } from '@react-navigation/native';

export default Drawer = () => {
    const navigation = useNavigation();
    const handleOnPress = () => {
        navigation.navigate('Attendance');
    };
    return (
        <View style={styles.container}>
            <DrawerCard icon="clock-o" name="근태" onPress={handleOnPress} />
            <DrawerCard icon="clock-o" name="근태" />
            <DrawerCard icon="clock-o" name="근태" />
            <DrawerCard icon="clock-o" name="근태" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        marginBottom: 5,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
});
