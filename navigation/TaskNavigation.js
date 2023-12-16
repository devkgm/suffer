import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import TaskList from '../screens/TaskList';
import { useContext, useState } from 'react';
import ProjectContext from '../store/ProjectContext';
import TaskCreate from '../screens/TaskCreate';
import TaskDescription from '../screens/TaskDescription';

const Stack = createStackNavigator();

//ProjectCard 선택시 프로젝트 id와 함께 넘어옴
export default TaskNavigation = ({ route }) => {
    const { projectId } = route.params;

    const myProjectContext = useContext(ProjectContext);
    const project = myProjectContext.projects.filter((project) => project.id == projectId);

    return (
        <Stack.Navigator initialRouteName="TaskList" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="TaskList"
                component={TaskList}
                initialParams={{ project: project[0] }}
            />
            <Stack.Screen
                name="TaskCreate"
                component={TaskCreate}
                initialParams={{ projectId: projectId }}
            />
            <Stack.Screen name="TaskDescription" component={TaskDescription} />
        </Stack.Navigator>
    );
};
