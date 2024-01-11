import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RedirectionButton = ({ placeholder, redirectPage, icon, fromScreen, data }) => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate(redirectPage, { fromScreen: fromScreen, data: data });
    };
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={style.container}>
                <Icon style={style.icon} name={icon} size={16} color="#666" />
                <Text style={style.placeholder}>{placeholder}</Text>
                <Icon style={style.direction} name="chevron-right" size={16} color="#666" />
            </View>
        </TouchableWithoutFeedback>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: '100%',
    },
    icon: {
        marginRight: 20,
        marginLeft: 20,
    },
    placeholder: {
        color: '#777',
    },
    direction: {
        position: 'absolute',
        right: 20,
    },
});
export default RedirectionButton;
