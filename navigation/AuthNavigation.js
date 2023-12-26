import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import FirstSetting from '../screens/FirstSetting';
import AuthMain from '../screens/AuthMain';

const Stack = createStackNavigator();

export default AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="AuthMain" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AuthMain" component={AuthMain} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="FirstSetting" component={FirstSetting} />
        </Stack.Navigator>
    );
};
