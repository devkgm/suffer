import { SafeAreaView, View, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import TaskCreateHead from '../components/Task/TaskCreateHead';

export default TaskDescription = ({ route, navigation }) => {
    const [description, setDescription] = useState('');
    const { setState, getState } = route.params;
    const rightHandler = () => {
        setState(description);
        navigation.goBack();
    };
    useEffect(() => {
        setDescription(getState);
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
                <TextInput
                    style={{ padding: 10, fontSize: 18 }}
                    placeholder="업무 내용을 입력해주세요."
                    value={description}
                    onChangeText={(value) => {
                        setDescription(value);
                    }}
                />
            </View>
        </SafeAreaView>
    );
};
