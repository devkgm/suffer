import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import TaskList from '../screens/TaskList';
import { useContext, useEffect, useState } from 'react';
import TaskCreate from '../screens/TaskCreate';
import EditDescription from '../screens/EditDescription';
import OrderCreate from '../screens/OrderCreate';
import ProjectCreate from '../screens/ProjectCreate';
import ProjectContext from '../store/ProjectContext';
import EditMember from '../screens/EditMember';

const Stack = createStackNavigator();

//ProjectCard 선택시 프로젝트 id와 함께 넘어옴
export default ProjectNavigation = ({ route }) => {
    const [member, setMember] = useState('');
    const [description, setDescription] = useState('');
    const [selectedMember, setSelectedMember] = useState([]);

    const value = {
        description,
        setDescription,
        member,
        setMember,
        selectedMember,
        setSelectedMember,
    };

    return (
        <ProjectContext.Provider value={value}>
            <Stack.Navigator
                initialRouteName="ProjectCreate"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="ProjectCreate" component={ProjectCreate} />
                <Stack.Screen name="EditDescription" component={EditDescription} />
                <Stack.Screen name="EditMember" component={EditMember} />
            </Stack.Navigator>
        </ProjectContext.Provider>
    );
};
