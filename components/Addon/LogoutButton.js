import { TouchableOpacity, Text, View, Alert } from 'react-native';
import { getData, storeData } from '../../store/storage';
import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import AddonStyles from '../../styles/AddonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default LogoutButton = () => {
    const myAuthContext = useContext(AuthContext);
    const handleOnPress = () => {
        Alert.alert('로그아웃', '로그아웃 하시겠습니까?', [
            {
                text: '로그아웃',
                onPress: async () => {
                    await storeData('user', null);
                    myAuthContext.setUser(null);
                    myAuthContext.setIsLogin(false);
                },
            },
            { text: '취소', style: 'cancel' },
        ]);
    };
    return (
        <View style={AddonStyles.buttonContainer}>
            <TouchableOpacity style={AddonStyles.button} onPress={() => handleOnPress()}>
                <Icon name="sign-out" size={16} color="#666" />
                <Text style={AddonStyles.buttonText}>로그아웃</Text>
            </TouchableOpacity>
        </View>
    );
};
