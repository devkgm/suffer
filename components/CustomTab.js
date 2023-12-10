import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function CustomTab(Screens) {
    return <Tab.Navigator>{Screens.map((screen) => ({ screen }))}</Tab.Navigator>;
}
