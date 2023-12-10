import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function LongButton({ innerText, onPressEvent, customStyle = {} }) {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.button, customStyle.button]}
            onPress={onPressEvent}
        >
            <Text style={[styles.text, customStyle.text]}>{innerText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        width: 300,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9A2AFF',
    },
    text: {
        fontSize: 16,
        fontWeight: '900',
        color: '#fff',
    },
});
