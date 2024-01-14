import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InputBox = ({ title, data }) => {
    console.log(data);
    const [value, setValue] = useState(data);
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </View>

            <TextInput style={styles.input} value={value} onChangeText={() => setValue(value)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    titleText: {
        fontSize: 18,
    },
    input: {
        height: '100%',
        margin: 20,
    },
});

export default InputBox;
