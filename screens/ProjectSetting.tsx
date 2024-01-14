import { StyleSheet, TouchableOpacity, View, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InputBox from '../components/Common/InputBox';
import CommonStyles from '../styles/CommonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useContext } from 'react';
import AuthContext from '../store/AuthContext';
import deleteProject from '../services/deleteProject';

const ProjectSetting = ({ route, navigation }) => {
    const { projectId, project } = route.params;
    const myAuthContext = useContext(AuthContext);

    const handleSave = () => {};
    const handleDelete = () => {
        Alert.alert('프로젝트 삭제', '삭제하시겠습니까?', [
            {
                style: 'default',
                text: '삭제',
                onPress: async () => {
                    const result = await deleteProject(projectId, myAuthContext.user);
                    if (result) {
                        Alert.alert('삭제되었습니다.');
                        navigation.navigate('ProjectList');
                    }
                },
            },
            {
                style: 'cancel',
                text: '취소',
            },
        ]);
    };
    console.log(project.TITLE);
    return (
        <View>
            <View style={[styles.header, { backgroundColor: project.CARD_COLOR }]}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>뒤로가기</Text>
                <TouchableOpacity activeOpacity={1} onPress={() => handleSave()}>
                    <Text style={styles.headerTitle}>저장</Text>
                </TouchableOpacity>
            </View>
            <View>
                <InputBox title="프로젝트명" data={project.TITLE} />

                <TouchableOpacity style={CommonStyles.button} onPress={() => handleDelete()}>
                    <Text style={[CommonStyles.buttonText, { color: 'red' }]}>프로젝트 삭제</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 8,
    },
});

export default ProjectSetting;
