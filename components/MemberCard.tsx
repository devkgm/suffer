import { FlatList, StyleSheet, Text, View } from 'react-native';
import { User } from '../model/user';
import { useEffect, useState } from 'react';
import { CheckBox, Separator } from 'react-native-btr';

const MemberCard = (props) => {
    const { members, setSelectedMember } = props;
    const [data, setData] = useState([]);
    useEffect(() => {
        const memberData = members.map((member) => {
            return { title: member.NAME, color: '#08f', id: member.ID };
        });
        setData(memberData);
    }, [members]);
    useEffect(() => {
        const selectedMember = data
            .filter((value) => value.checked == true)
            .map((value) => value.id);
        console.log(selectedMember);
        setSelectedMember(selectedMember);
    }, [data]);

    function toggle(index: number) {
        const item = data[index];
        item.checked = !item.checked;
        setData([...data]);
    }

    const renderItem = ({ item, index }: any) => (
        <View style={styles.row}>
            <CheckBox
                checked={item.checked}
                color={item.color}
                disabled={item.disabled}
                onPress={() => toggle(index)}
            />
            <Text style={styles.label}>{item.title}</Text>
        </View>
    );
    const keyExtractor = (item: any, index: number) => item.title + index;
    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={() => <Separator />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 16,
    },
    label: {
        flex: 1,
        paddingHorizontal: 16,
    },
});

export default MemberCard;
