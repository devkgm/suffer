import { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AuthNavigation from './navigation/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './navigation/HomeNavigation';
import ProjectContext from './store/ProjectContext';
import getProject from './services/getProject';
import Loading from './screens/Loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebaseConfig';
import { getData } from './store/storage';
import AuthContext from './store/AuthContext';
export default App = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState('red');
    const myAuthContext = useContext(AuthContext);
    // onAuthStateChanged(auth, (user) => {
    //     console.log(user);
    //     if (user) {
    //         setIsLogin(true);
    //     } else {
    //         setIsLogin(false);
    //     }
    // });
    const auth = {
        user,
        isLogin,
        setUser,
        setIsLogin,
    };
    const value = {
        projects,
        setProjects,
        setBackgroundColor,
    };
    const loadProject = async () => {
        const project = await getProject('QyuJA1y5P9Zl1yIMTWKplHErAGi1');
        setProjects(project);
        setIsLoaded(true);
    };
    const checkLoginStatus = async () => {
        const user = await getData('user');
        if (user) {
            setUser(user);
            setIsLogin(true);
        }
    };
    useEffect(() => {
        checkLoginStatus();
        loadProject();
    }, []);

    return (
        <SafeAreaProvider>
            {/* <View
                style={[
                    styles.topBackground,
                    { backgroundColor: backgroundColor, paddingTop: topInset },
                ]}
            /> */}
            <AuthContext.Provider value={auth}>
                <NavigationContainer style={styles.container}>
                    {isLogin ? (
                        isLoaded ? (
                            <ProjectContext.Provider value={value}>
                                <HomeNavigation />
                            </ProjectContext.Provider>
                        ) : (
                            <Loading />
                        )
                    ) : (
                        <AuthNavigation />
                    )}
                </NavigationContainer>
            </AuthContext.Provider>

            {/* <View style={styles.bottomBackground} /> */}
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topBackground: {
        // position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 50,
        zIndex: -1,
    },

    bottomBackground: {
        position: 'absolute',
        backgroundColor: '#fff',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        zIndex: -1,
    },
});
