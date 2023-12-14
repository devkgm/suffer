import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import First from './views/First';
import ProjectList from './views/ProjectList';
import Work from './views/Work';
import Chatting from './views/Chatting';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import AppContext from './AppContext';
import Addon from './views/Addon';
import Alram from './views/Alram';
import Login from './views/Login';
import { LogBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Registration from './views/Registration';
import SetInfomation from './views/SetInfomation';
import { getData, storeData } from './modules/storage';
import Task from './views/Task';
import CreateTask from './views/CreateTask';
import { db } from './firebase/firebaseConfig';
import getProject from './modules/getProject';
import getAllProjectData from './modules/getAllProjectData';
import getTask from './modules/getTask';
import DataLoad from './components/DataLoad';
LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.']);

const Tap = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
    const [isLogined, setIsLogined] = useState(false);
    const [uid, setUid] = useState(null);
    const [projectId, setProjectId] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [name, setName] = useState('');

    //context값
    const values = {
        isLogined: isLogined,
        projectId: projectId,
        projectData: projectData,
        uid: uid,
        name: name,
        setIsLogined,
        setUid,
        setName,
        setProjectData,
    };
    useEffect(() => {
        console.log('App Loaded');
        //로그인 확인
        const checkLogin = async () => {
            if (uid == null) {
                setUid(await getData('UID'));
            }
            if (uid) {
                setUid(uid);
                setIsLogined(true);
            }
            console.log(uid, isLogined);
        };

        checkLogin();
    }, []);
    useEffect(() => {
        //프로젝트 데이터 받아오기
        const loadProjectData = async () => {
            const data = await getAllProjectData(uid);
            setProjectData(data);
            setDataLoaded(true);
        };
        if (uid) {
            loadProjectData();
        }
    }, [uid]);

    const Tabnavigator = () => (
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
            }}
        >
            <Tap.Screen
                name="프로젝트리스트"
                component={ProjectList}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="tasks" color={color} size={20} />,
                }}
                initialParams={{ projectData: projectData }}
            />
            <Tap.Screen
                name="업무"
                component={Work}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="tasks" color={color} size={20} />,
                }}
            />
            <Tap.Screen
                name="채팅"
                component={Chatting}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="comment" color={color} size={20} />,
                }}
            />
            <Tap.Screen
                name="알림"
                component={Alram}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="bell" color={color} size={20} />,
                }}
            />
            <Tap.Screen
                name="더보기"
                component={Addon}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="ellipsis-h" color={color} size={20} />,
                }}
            />
        </Tap.Navigator>
    );

    return (
        <AppContext.Provider value={values} style={styles.container}>
            <NavigationContainer>
                {isLogined ? (
                    dataLoaded ? (
                        <Stack.Navigator initialRouteName="Tabnavigator">
                            <Stack.Screen
                                name="Main"
                                component={Tabnavigator}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="Task"
                                component={Task}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="업무추가"
                                component={CreateTask}
                                options={{
                                    headerShown: false,
                                }}
                            />
                        </Stack.Navigator>
                    ) : (
                        <DataLoad />
                    )
                ) : (
                    <Stack.Navigator initialRouteName="First">
                        <Stack.Screen
                            name="First"
                            component={First}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Registration"
                            component={Registration}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="회사설정"
                            component={SetInfomation}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                )}
            </NavigationContainer>
        </AppContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: 'white' },
});
