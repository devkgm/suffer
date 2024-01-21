import { createStackNavigator } from '@react-navigation/stack';
import TaskList from '../screens/TaskList';
import TaskCreate from '../screens/TaskCreate';
import EditDescription from '../screens/EditDescription';
import OrderCreate from '../screens/OrderCreate';
import EditMember from '../screens/EditMember';
import ProjectSetting from '../screens/ProjectSetting';
import TaskDetail from '../screens/TaskDetail';
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
            <Stack.Screen name="EditMember" component={EditMember} />
            <Stack.Screen name="ProjectSetting" component={ProjectSetting} />
            <Stack.Screen name="TaskDetail" component={TaskDetail} />
        </Stack.Navigator>
    );
};
