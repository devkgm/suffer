import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTask from '../screens/MyTask';
import Chatting from '../screens/Chatting';
import Alarm from '../screens/Alarm';
import Addon from '../screens/Addon';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProjectList from '../screens/ProjectList';
const Tab = createBottomTabNavigator();

export default TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="ProjectList"
            screenOptions={{
                tabBarStyle: {},
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                },
                tabBarActiveTintColor: '#9A2AFF',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="ProjectList"
                component={ProjectList}
                options={{
                    title: '프로젝트',
                    tabBarIcon: ({ color }) => <Icon name="archive" color={color} size={20} />,
                }}
            />
            <Tab.Screen
                name="MyTask"
                component={MyTask}
                options={{
                    title: '업무',
                    tabBarIcon: ({ color }) => <Icon name="tasks" color={color} size={20} />,
                }}
            />
            <Tab.Screen
                name="Chatting"
                component={Chatting}
                options={{
                    title: '채팅',
                    tabBarIcon: ({ color }) => <Icon name="comment-o" color={color} size={20} />,
                }}
            />
            <Tab.Screen
                name="Alarm"
                component={Alarm}
                options={{
                    title: '알림',
                    tabBarIcon: ({ color }) => <Icon name="bell-o" color={color} size={20} />,
                }}
            />
            <Tab.Screen
                name="Addon"
                component={Addon}
                options={{
                    title: '더보기',
                    tabBarIcon: ({ color }) => <Icon name="ellipsis-h" color={color} size={20} />,
                }}
            />
        </Tab.Navigator>
    );
};
