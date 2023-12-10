import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopNav from '../components/TopNav';
import LogOut from '../components/LogOut';

const Tap = createBottomTabNavigator();

export default function Addon() {
    return (
        <SafeAreaView style={styles.container}>
            <TopNav />
            <LogOut />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});
