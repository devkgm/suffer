import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import AppContext from './AppContext';
import { LogBox } from 'react-native';
import { getData, storeData } from './modules/storage';
import getAllProjectData from './modules/getAllProjectData';
import DataLoad from './components/DataLoad';
import InitNavigation from './navigation/InitNavigation';
import HomeNavigation from './navigation/HomeNavigation';
LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.']);
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state.']);

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
            console.log('이름' + name);
        };
        if (uid) {
            loadProjectData();
            setIsLogined(true);
        }
    }, [uid]);

    return (
        <AppContext.Provider value={values} style={styles.container}>
            <NavigationContainer>
                {isLogined ? (
                    dataLoaded ? (
                        <HomeNavigation projectData={projectData} />
                    ) : (
                        <DataLoad />
                    )
                ) : (
                    <InitNavigation />
                )}
            </NavigationContainer>
        </AppContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: 'white' },
});
