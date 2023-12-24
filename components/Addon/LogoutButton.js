import { TouchableOpacity, Text, View } from 'react-native';
import { storeData } from '../../store/storage';
import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import logOut from '../../services/logOut';
import AddonStyles from '../../styles/AddonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default LogoutButton = () => {
    const myAuthContext = useContext(AuthContext);
    return (
        <View style={AddonStyles.buttonContainer}>
            <TouchableOpacity
                style={AddonStyles.button}
                onPress={() => {
                    logOut();
                    myAuthContext.setIsLogin(false);
                    myAuthContext.setUser(null);
                    storeData('user', null);
                }}
            >
                <Icon name="sign-out" size={16} color="#666" />
                <Text style={AddonStyles.buttonText}>로그아웃</Text>
            </TouchableOpacity>
        </View>
    );
};
