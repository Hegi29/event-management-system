import { StyleSheet, View } from "react-native";

import { Icon, Text } from "@rneui/themed";
import SelectDropdown from "react-native-select-dropdown";

const listStatus = [
    { title: 'All Status' },
    { title: 'Submitted' },
    { title: 'Unsubmitted' }
];

const SelectStatus = ({ setSelectedStatus }: any) => {
    return (
        <SelectDropdown
            data={listStatus}
            onSelect={(selectedItem) => {
                setSelectedStatus(selectedItem.title);
            }}
            renderButton={(selectedItem, isOpened) => {
                return (
                    <View style={styles.dropdownButtonStyle}>
                        {selectedItem && (
                            <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
                        )}
                        <Text style={styles.dropdownButtonTxtStyle}>
                            {(selectedItem && selectedItem.title) || 'Status'}
                        </Text>
                        <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} type="material-community" style={styles.dropdownButtonArrowStyle} />
                    </View>
                );
            }}
            renderItem={(item, _, isSelected) => {
                return (
                    <View key={item} style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                        <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                    </View>
                );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
        />
    )
}

const styles = StyleSheet.create({
    dropdownButtonStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderColor: 'grey',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: -10
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: 'grey',
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
});

export default SelectStatus;
