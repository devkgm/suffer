import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InputBox = ({ title, data }) => {
    console.log(data);
    const [value, setValue] = useState(data);
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Icon name="spinner" size={24} color="black" />
                <Text>{title}</Text>
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
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    input: {
        flex: 1,
        height: '100%',
    },
});

export default InputBox;
