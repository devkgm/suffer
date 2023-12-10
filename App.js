import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
import { Header } from 'react-native/Libraries/NewAppScreen';
import { LogBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Task from './views/Task';
import TaskCard from './components/TaskCard';
import Registration from './views/Registration';
import { auth } from './firebase/firebaseConfig';
import SetInfomation from './views/SetInfomation';
import { getData } from './modules/storage';
import CustomStack from './components/CustomStack';
import CustomTab from './components/CustomTab';
import Project from './views/Project';
import CreateTask from './views/CreateTask';
LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.']);

const Tap = createBottomTabNavigator();
const Stack = createStackNavigator();
function HomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
        </View>
    );
}

export default function App() {
    const [isLogined, setIsLogined] = useState(false);
    useEffect(() => {
        const checkLoginState = async () => {
            const userUID = await getData('UID');
            if (userUID) {
                setIsLogined(true);
            }
        };
        checkLoginState();
    }, []);
    const setLogin = () => {
        setIsLogined(true);
    };
    const values = {
        uid: 'QyuJA1y5P9Zl1yIMTWKplHErAGi1',
        name: '김경모',
        isLogined: isLogined,
        setLogin,
    };
    // const customTabs = CustomTab([
    //     <Tap.Screen
    //         name="프로젝트리스트"
    //         component={ProjectList}
    //         options={{
    //             headerShown: false,
    //             tabBarIcon: ({ color }) => <Icon name="folder" color={color} size={20} />,
    //         }}
    //     />,
    //     <Tap.Screen
    //         name="프로젝트"
    //         component={Project}
    //         options={{
    //             headerShown: false,
    //             tabBarIcon: ({ color }) => <Icon name="folder" color={color} size={20} />,
    //         }}
    //     />,
    // ]);
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
                    <Stack.Navigator initialRouteName="Tabnavigator">
                        <Stack.Screen
                            name="Main"
                            component={Tabnavigator}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="프로젝트"
                            component={Project}
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
                    <Stack.Navigator initialRouteName="First">
                        <Stack.Screen
                            name="첫화면"
                            component={First}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="로그인"
                            component={Login}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="회원가입"
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
