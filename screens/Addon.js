import { Text, TouchableOpacity, View } from 'react-native';
import TopNav from '../components/TopNav';
import { useContext } from 'react';
import AuthContext from '../store/AuthContext';
import LogoutButton from '../components/Addon/LogoutButton';
import Profile from '../components/Common/Profile';
import Drawer from '../components/Addon/Drawer';

export default Addon = () => {
    const myAuthContext = useContext(AuthContext);
    return (
        <View>
            <TopNav />
            <Profile />
            <Drawer />
            <LogoutButton />
        </View>
    );
};
