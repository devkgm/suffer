import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
LogBox.ignoreLogs(['Sending']);

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
    const user = auth.currentUser;
    const [isLogined, setIsLogined] = useState(user);
    console.log(user);
    const setLogin = () => {
        setIsLogined(true);
    };
    const values = {
        isLogined: isLogined,
        setLogin,
    };
    return (
        <AppContext.Provider value={values}>
            <NavigationContainer>
                {isLogined ? (
                    <Tap.Navigator
                        initialRouteName="Project"
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
                            name="프로젝트"
                            component={ProjectList}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Icon name="folder" color={color} size={20} />
                                ),
                            }}
                        />
                        <Tap.Screen
                            name="업무"
                            component={Work}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Icon name="tasks" color={color} size={20} />
                                ),
                            }}
                        />
                        <Tap.Screen
                            name="채팅"
                            component={Chatting}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Icon name="comment" color={color} size={20} />
                                ),
                            }}
                        />
                        <Tap.Screen
                            name="알림"
                            component={Alram}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Icon name="bell" color={color} size={20} />
                                ),
                            }}
                        />
                        <Tap.Screen
                            name="더보기"
                            component={Addon}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Icon name="ellipsis-h" color={color} size={20} />
                                ),
                            }}
                        />
                    </Tap.Navigator>
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
    container: {},
});
