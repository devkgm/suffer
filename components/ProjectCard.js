import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ProjectCard = ({ project }) => {
    const screenWidth = Dimensions.get('window').width;
    const cardWidth = screenWidth * 0.5 - 20; // 화면 너비의 절반
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('TaskNavigation', { projectId: project.ID, project: project });
    };

    return (
        <TouchableOpacity
            activeOpacity={0.4}
            style={[styles.card, { width: cardWidth, borderLeftColor: project.CARD_COLOR }]}
            onPress={() => handlePress()}
        >
            <View style={styles.cardContent}>
                <Text style={styles.title}>{project.NAME}</Text>
                <View style={styles.userCount}>
                    <Icon name="users" size={16} color="#666" />
                    <Text style={styles.userCountText}>{project.member}</Text>
                </View>
                <TouchableOpacity style={styles.bookmark}>
                    {true ? (
                        <Icon name="star" size={24} color="#FFD700" /> // 별 아이콘 표시 (FontAwesome의 'star' 아이콘 사용)
                    ) : (
                        <Icon name="star-o" size={24} color="#FFD700" /> // 빈 별 아이콘 표시
                    )}
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        position: 'relative',
        borderLeftWidth: 10,
    },
    colorLine: {
        width: 10, // 컬러 줄의 너비
        backgroundColor: 'red',
    },
    cardContent: {
        margin: 20,
        height: 80,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        width: '80%',
        height: '70%',
    },
    userCount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        color: '#666',
    },
    userCountText: {
        marginLeft: 5,
        fontSize: 16,
    },
    bookmark: {
        position: 'absolute', // 절대 위치 설정
        top: 0, // 상단으로부터의 거리 조절
        right: 0, // 우측으로부터의 거리 조절
        color: '#007AFF',
    },
});
