import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProjectList from '../views/ProjectList';
import Chatting from '../views/Chatting';
import Alram from '../views/Alram';
import Addon from '../views/Addon';
import MyTask from '../views/MyTask';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tap = createBottomTabNavigator();
export default TabNavigation = ({ projectData }) => {
    return (
        <Tap.Navigator
            initialRouteName="ProjectList"
            screenOptions={{
                tabBarStyle: {
                    marginBottom: 10,
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                },
                tabBarActiveTintColor: '#9A2AFF',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            }}
        >
            <Tap.Screen
                name="ProjectList"
                component={ProjectList}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="tasks" color={color} size={20} />,
                }}
                initialParams={{ projectData: projectData }}
            />
            <Tap.Screen
                name="MyTask"
                component={MyTask}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="tasks" color={color} size={20} />,
                }}
            />
            <Tap.Screen
                name="Chatting"
                component={Chatting}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="comment" color={color} size={20} />,
                }}
            />
            <Tap.Screen
                name="Alram"
                component={Alram}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="bell" color={color} size={20} />,
                }}
            />
            <Tap.Screen
                name="Addon"
                component={Addon}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="ellipsis-h" color={color} size={20} />,
                }}
            />
        </Tap.Navigator>
    );
};
