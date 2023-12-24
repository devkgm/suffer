import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as Location from 'expo-location';
import { useEffect } from 'react';
import TopNav from '../components/TopNav';
import CommonStyles from '../styles/CommonStyles';
const askLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('위치권한허용', '출결체크를 위해 위치제공에 동의해주세요.');
        return;
    }
    getLocation();
};
const getLocation = async () => {
    const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Low,
    });
    const latitude = coords.latitude;
    const longitude = coords.longitude;
    console.log(latitude, longitude);
};

export default Attendance = ({ navigation }) => {
    // useEffect(() => {
    //     askLocationPermission();
    // }, []);
    const handleAttendance = async () => {
        await askLocationPermission();
        Alert.alert('출근확인', '출근확인 됐습니다.', [
            {
                style: 'default',
                onPress: () => navigation.goBack(),
            },
        ]);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={CommonStyles.longButton} onPress={() => handleAttendance()}>
                <Text style={CommonStyles.longButtonText}>출근</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
