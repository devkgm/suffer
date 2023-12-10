import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function CustomStack({ Taps, TapsInfo }) {
    return (
        <Stack.Navigator>
            {Taps.map((screen) => (
                <Stack.Screen name={TapsInfo.name} component={TapsInfo.comp} />
            ))}
        </Stack.Navigator>
    );
}
