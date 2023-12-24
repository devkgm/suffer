import React, { useState, useContext, useRef, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableWithoutFeedback } from 'react-native';
import CreateHead from '../components/Common/CreateHead';
import AuthContext from '../store/AuthContext';
import Dropdown from '../components/Common/Dropdown';

export default function OrderCreate({ route, navigation }) {
    const inputRef1 = useRef(null);
    const { projectId } = route.params;
    const myAuthContext = useContext(AuthContext);
    const pickerRef = useRef();
    const [product, setProduct] = useState('');
    const [amount, setAmount] = useState('');

    const handleBlur = () => {
        // inputRef1.current.blur();
        pickerRef.current.blur();
    };

    const handleCancle = () => {
        navigation.goBack();
    };
    const handleUpload = async () => {
        // await addOrder(projectId, myAuthContext.name, myAuthContext.user.uid, product, amount);
        navigation.goBack();
    };

    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <View style={styles.head}>
                    <CreateHead
                        leftText="취소"
                        rightText="게시"
                        rightHandler={handleUpload}
                        leftHandler={handleCancle}
                    />
                </View>
                <View style={styles.selctContainer}>
                    <Text style={styles.selectionTitle}>품목</Text>
                    <Dropdown
                        options={['Option 1', 'Option 2', 'Option 3']}
                        defaultButtonText="품목을 선택하세요."
                        setState={setProduct}
                    />
                </View>
                <View style={styles.selctContainer}>
                    <Text style={styles.selectionTitle}>수량</Text>
                    <Dropdown
                        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        defaultButtonText="수량을 선택하세요."
                        setState={setAmount}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    head: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#9A2AFF',
        padding: 10,
    },
    selectionTitle: {
        margin: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdown: {},
    selctContainer: {
        margin: 20,
        alignItems: 'center',
    },
});
