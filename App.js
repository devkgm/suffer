import { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AuthNavigation from './navigation/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './navigation/HomeNavigation';
import ProjectContext from './store/ProjectContext';
import getProject from './services/getProject';
import Loading from './screens/Loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default App = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projects, setProjects] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState('red');

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
    useEffect(() => {
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
