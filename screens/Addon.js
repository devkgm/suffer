import { Text, TouchableOpacity, View } from 'react-native';
import TopNav from '../components/TopNav';
import logOut from '../services/logOut';
import { useContext } from 'react';
import AuthContext from '../store/AuthContext';
import { storeData } from '../store/storage';
export default Addon = () => {
    const myAuthContext = useContext(AuthContext);
    return (
        <View>
            <TopNav />
            <TouchableOpacity
                onPress={() => {
                    logOut();
                    myAuthContext.setIsLogin(false);
                    myAuthContext.setUser(null);
                    storeData('user', null);
                }}
            >
                <Text>LogOut</Text>
            </TouchableOpacity>
        </View>
    );
};
