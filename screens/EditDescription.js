import { SafeAreaView, View, TextInput } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import TaskCreateHead from '../components/Common/CreateHead';
import { useNavigation } from '@react-navigation/native';

export default EditDescription = ({ route, navigation }) => {
    const [description, setDescription] = useState('');
    const rightHandler = () => {
        // navigation.goBack();
        console.log(description);
        navigation.navigate(route.params?.fromScreen, {
            fromScreen: 'EditDescription',
            description: description,
        });
    };
    useEffect(() => {
        setDescription(route.params?.data);
    }, [route.params?.data]);
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
