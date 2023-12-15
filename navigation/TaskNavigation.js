import { createStackNavigator } from '@react-navigation/stack';
import CreateTask from '../views/CreateTask';
import TaskDescription from '../views/TaskDescription';
import Task from '../views/Task';
const Stack = createStackNavigator();

export default TaskNavigation = ({ route }) => {
    const { projectId, projectData, index } = route.params;
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Task"
                component={Task}
                initialParams={{ projectId: projectId, projectData: projectData, index: index }}
            />
            <Stack.Screen
                name="CreateTask"
                component={CreateTask}
                initialParams={{ projectId: projectId }}
            />
            <Stack.Screen name="TaskDescription" component={TaskDescription} />
        </Stack.Navigator>
    );
};
