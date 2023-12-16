import { useCallback, useContext, useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProjectCard from '../components/ProjectCard';
import TopNav from '../components/TopNav';
import ProjectContext from '../store/ProjectContext';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import MainContext from '../store/MainContext';

export default ProjectList = ({ navigation }) => {
    const [projects, setProjects] = useState([]);
    const myProjectContext = useContext(ProjectContext);
    const myMainContext = useContext(MainContext);
    const handleAddButton = () => {
        navigation.navigate('ProjectCreate');
    };
    useFocusEffect(
        useCallback(() => {
            myMainContext.setBgColor('white');
        }),
    );

    return (
        <View style={styles.container}>
            <TopNav />
            <Text style={styles.title}>소속된 프로젝트</Text>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.cardContainer}>
                    {myProjectContext.projects.map((project, index) => {
                        return <ProjectCard key={index} project={project} />;
                    })}
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.addButton} onPress={() => handleAddButton()}>
                <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    addButton: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        width: 50,
        height: 50,
        backgroundColor: '#9A2AFF',
        alignItems: 'center',
        borderRadius: 16,
        padding: 10,
    },
});