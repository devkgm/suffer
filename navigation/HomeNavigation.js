import { createStackNavigator } from '@react-navigation/stack';
import TaskNavigation from './TaskNavigation';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

export default HomeNavigation = ({ projectData }) => {
    return (
        <Stack.Navigator initialRouteName="TabNavigation" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
            <Stack.Screen
                name="TaskNavigation"
                component={TaskNavigation}
                initialParams={{ projectData: projectData }}
            />
        </Stack.Navigator>
    );
};
