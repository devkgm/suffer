import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import TaskNavigation from './TaskNavigation';
import ProjectCreate from '../screens/ProjectCreate';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useContext, useState } from 'react';
import ProjectContext from '../store/ProjectContext';
import MainContext from '../store/MainContext';
import Attendance from '../screens/Attendance';
const Stack = createStackNavigator();

export default HomeNavigation = () => {
    const insets = useSafeAreaInsets();
    const topInset = insets.top;
    const myProjectContext = useContext(ProjectContext);
    const [bgColor, setBgColor] = useState('white');
    const value = {
        bgColor,
        setBgColor,
    };
    return (
        <MainContext.Provider value={value}>
            <View style={[{ paddingTop: topInset, backgroundColor: bgColor }]} />
            <Stack.Navigator
                initialRouteName="TabNavigation"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="TabNavigation" component={TabNavigation} />
                <Stack.Screen name="TaskNavigation" component={TaskNavigation} />
                <Stack.Screen name="ProjectCreate" component={ProjectCreate} />
                <Stack.Screen name="Attendance" component={Attendance} />
            </Stack.Navigator>
        </MainContext.Provider>
    );
};
