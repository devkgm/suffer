import { SafeAreaView, View, TextInput } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import TaskCreateHead from '../components/Common/CreateHead';
import ProjectContext from '../store/ProjectContext';
import getMembers from '../services/getMembers';
import { storeData } from '../store/storage';
import AuthContext from '../store/AuthContext';
import MemberCard from '../components/MemberCard';

const EditMember = ({ route, navigation }) => {
    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState([]);
    const myContext = useContext(ProjectContext);
    const myAuthContext = useContext(AuthContext);
    const rightHandler = () => {
        myContext.setSelectedMember(selectedMember);
        navigation.goBack();
    };
    const loadMembers = async () => {
        const { memberData, user } = await getMembers(myAuthContext.user);
        setMembers(memberData);
        console.log(memberData);
        await storeData('user', user);
        myAuthContext.setUser(user);
    };
    useEffect(() => {
        loadMembers();
    }, []);
    const leftHandler = () => {
        navigation.goBack();
    };
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.head}>
                    <TaskCreateHead
                        leftText="취소"
                        rightText="저장"
                        rightHandler={rightHandler}
                        leftHandler={leftHandler}
                    />
                </View>
                <MemberCard members={members} setSelectedMember={setSelectedMember} />
            </View>
        </SafeAreaView>
    );
};

export default EditMember;
