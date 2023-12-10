import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProjectCard from '../components/ProjectCard';
import TopNav from '../components/TopNav';
import { SafeAreaView } from 'react-native-safe-area-context';
import getUserProjects from '../modules/getUserProjects';
import { useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebaseConfig';

const Tap = createBottomTabNavigator();

export default function ProjectList() {
    const [projects, setProjects] = useState([]);
    const user = auth.currentUser;
    useEffect(() => {
        const loadProjects = async () => {
            const projectsData = await getUserProjects(db, user.uid);
            setProjects(projectsData);
            console.log(projectsData[0]);
        };
        loadProjects();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <TopNav />
            <Text style={styles.title}>소속된 프로젝트</Text>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.cardContainer}>
                    {projects.map((project) => (
                        <ProjectCard
                            title={project.Title}
                            userCount={project.Member}
                            isBookmarked={false}
                            cardColor={project.CardColor}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 10,
    },
    scrollContainer: {
        backgroundColor: '#777',
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
    },
});
