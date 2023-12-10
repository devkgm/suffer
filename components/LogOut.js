import { View, Text } from 'react-native';
import { useContext } from 'react';
import AppContext from '../AppContext';
import { clearData, getData, removeData, storeData } from '../modules/storage';
import { useNavigation } from '@react-navigation/native';

export default LogOut = () => {
    const myContext = useContext(AppContext);
    const navigation = useNavigation();
    const handleLogOut = async () => {
        myContext.LogOut();
        await clearData();
        navigation.navigate('First');
    };
    return (
        <View>
            <Text onPress={() => handleLogOut()}>Logout</Text>
        </View>
    );
};
