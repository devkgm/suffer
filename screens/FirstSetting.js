import { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import AuthContext from '../store/AuthContext';
import checkCompany from '../services/checkCompany';
export default FirstSetting = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const user = auth.currentUser;
    const myAuthContext = useContext(AuthContext);
    const handleSubmit = async () => {
        // checkCompany(company);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>suffer.</Text>
            <TextInput
                style={styles.input}
                placeholder="이름"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput
                style={styles.input}
                placeholder="회사명"
                onChangeText={(text) => setCompany(text)}
                value={company}
            />

            <TouchableOpacity
                style={[styles.button, CommonStyles.longButton]}
                onPress={() => handleSubmit()}
            >
                <Text style={CommonStyles.longButtonText}>설정하기</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        fontSize: 60,
        position: 'absolute',
        top: 100,
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
        width: 300,
    },
    button: {
        margin: 10,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9A2AFF',
        position: 'absolute',
        bottom: 50,
    },
});
