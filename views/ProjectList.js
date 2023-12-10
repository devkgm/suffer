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
import { getData } from '../modules/storage';
const Tap = createBottomTabNavigator();

export default function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const loadProjects = async () => {
            const uid = await getData('UID');
            const projectsData = await getUserProjects(db, uid);
            setProjects(projectsData);
        };
        loadProjects();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <TopNav />
            <Text style={styles.title}>소속된 프로젝트</Text>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.cardContainer}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.Title}
                            userCount={project.Member}
                            isBookmarked={false}
                            cardColor={project.CardColor}
                            projectId={project.Id}
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
        backgroundColor: '#fff',
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
