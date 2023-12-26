import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome 아이콘 사용 예시

export default TopNav = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>suffer.</Text>
            <View style={styles.right}>
                <TouchableOpacity onPress={() => alert('검색 버튼 클릭')} style={styles.icon}>
                    <Icon name="search" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('메뉴 버튼 클릭')} style={styles.icon}>
                    <Icon name="bars" size={24} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingRight: 16,
    },

    logo: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 36,
        margin: 10,
    },
    icon: {
        marginLeft: 16,
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
