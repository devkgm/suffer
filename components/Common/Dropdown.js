import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
export default Dropdown = ({ options, defaultButtonText, setState }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <SelectDropdown
            data={options}
            dropdownStyle={{ borderRadius: 10 }}
            buttonStyle={{
                borderRadius: 10,
                borderWidth: 2,
                borderColor: 'lightgray',
                backgroundColor: 'white',
            }}
            onSelect={(selectedItem, index) => {
                setState(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
                return item;
            }}
            renderCustomizedButtonChild={(selectedItem, index) => (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text style={{ marginRight: 8 }}>{selectedItem || defaultButtonText}</Text>
                    <Icon
                        name={isDropdownOpen ? 'angle-up' : 'angle-down'}
                        size={20}
                        color="black"
                    />
                </View>
            )}
            onFocus={() => {
                setIsDropdownOpen(true);
            }}
            onBlur={() => setIsDropdownOpen(false)}
        />
    );
};
