import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import image from '../../assets/icon.png';
import Icon from 'react-native-vector-icons/FontAwesome';

export default Profile = ({ size }) => {
    const userName = '김경모';
    const userCompany = 'GM';

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            flexDirection: 'row',
            backgroundColor: 'white',
        },
        imageContainer: {
            position: 'relative',
        },
        profileImage: {
            width: 70 * size,
            height: 70 * size,
            borderRadius: 30 * size,
            marginRight: 10 * size,
            borderColor: '#9A2AFF',
            borderWidth: 2,
        },
        info: {},
        name: {
            fontWeight: 'bold',
            fontSize: 30 * size,
            marginBottom: 5,
        },
        company: {
            color: 'gray',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.profileImage} />
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>{userName}</Text>
                <Text style={styles.company}>{userCompany}</Text>
            </View>
        </View>
    );
};
