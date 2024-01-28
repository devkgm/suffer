import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import AuthNavigation from './navigation/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './navigation/HomeNavigation';
import Loading from './screens/Loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getData } from './store/storage';
import AuthContext from './store/AuthContext';
import { User } from './model/user';

export type Props = {
    name: string;
    baseEnthusiasmLevel?: number;
};

const App = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [user, setUser] = useState<User>(null);
    const [name, setName] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState('red');
    const myAuthContext = useContext(AuthContext);

    const auth = {
        user,
        isLogin,
        name,
        setUser,
        setIsLogin,
        setName,
        isLoaded,
        setIsLoaded,
    };

    const checkLoginStatus = async () => {
        const userDate = await getData('user');
        console.log('update', userDate);
        if (userDate == null) {
            // setIsLoaded(false);
            setIsLogin(false);
        } else {
            setUser(userDate);
            setIsLogin(true);
            setIsLoaded(true);
        }
    };
    useEffect(() => {
        checkLoginStatus();
    }, [isLogin]);

    return (
        <SafeAreaProvider>
            <AuthContext.Provider value={auth}>
                <NavigationContainer>
                    {isLogin ? isLoaded ? <HomeNavigation /> : <Loading /> : <AuthNavigation />}
                </NavigationContainer>
            </AuthContext.Provider>
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
        // height: 50,
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

export default App;
