import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import image from '../../assets/icon.png';
import Icon from 'react-native-vector-icons/FontAwesome';

export default Profile = () => {
    const userName = '김경모';
    const userCompany = 'GM';
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.profileImage} />

                <TouchableOpacity style={styles.editIcon}>
                    <Icon name="pencil" size={16} color="#666" />
                </TouchableOpacity>
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>{userName}</Text>
                <Text style={styles.company}>{userCompany}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 5,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    imageContainer: {
        position: 'relative',
    },
    editIcon: {
        position: 'absolute',
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: -5,
        right: 5,
        borderRadius: 100,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 20,
        marginRight: 10,
        borderColor: '#9A2AFF',
        borderWidth: 2,
    },
    info: {},
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
    },
    company: {
        color: 'gray',
    },
});
