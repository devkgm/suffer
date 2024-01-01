import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import TaskList from '../screens/TaskList';
import { useContext, useEffect, useState } from 'react';
import TaskCreate from '../screens/TaskCreate';
import EditDescription from '../screens/EditDescription';
import OrderCreate from '../screens/OrderCreate';

const Stack = createStackNavigator();

//ProjectCard 선택시 프로젝트 id와 함께 넘어옴
export default TaskNavigation = ({ route }) => {
    const { projectId, project } = route.params;

    return (
        <Stack.Navigator initialRouteName="TaskList" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="TaskList"
                component={TaskList}
                initialParams={{ projectId: projectId, project: project }}
            />
            <Stack.Screen
                name="TaskCreate"
                component={TaskCreate}
                initialParams={{ projectId: projectId }}
            />
            <Stack.Screen
                name="OrderCreate"
                component={OrderCreate}
                initialParams={{ projectId: projectId }}
            />
            <Stack.Screen name="EditDescription" component={EditDescription} />
        </Stack.Navigator>
    );
};
