import { createStackNavigator } from '@react-navigation/stack';
import First from '../views/First';
import Login from '../views/Login';
import Registration from '../views/Registration';
import SetInfomation from '../views/SetInfomation';

const Stack = createStackNavigator();

export default InitNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="First" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="First" component={First} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="SetInfomation" component={SetInfomation} />
        </Stack.Navigator>
    );
};
