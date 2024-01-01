import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import TaskList from '../screens/TaskList';
import { useContext, useEffect, useState } from 'react';
import ProjectContext from '../store/ProjectContext';
import TaskCreate from '../screens/TaskCreate';
import TaskDescription from '../screens/TaskDescription';
import OrderCreate from '../screens/OrderCreate';

const Stack = createStackNavigator();

//ProjectCard 선택시 프로젝트 id와 함께 넘어옴
export default TaskNavigation = ({ route }) => {
    const { projectId, project } = route.params;
    const myProjectContext = useContext(ProjectContext);

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
            <Stack.Screen name="TaskDescription" component={TaskDescription} />
        </Stack.Navigator>
    );
};
