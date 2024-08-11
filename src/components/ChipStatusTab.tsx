import { StyleSheet } from "react-native";

import { Chip } from "@rneui/themed";

type ChipStatusTabProps = { status: string };

const ChipStatusTab = ({ status }: ChipStatusTabProps) => {
    return (
        <Chip
            title={status}
            type='outline'
            containerStyle={styles.containerStyle}
            titleStyle={styles.titleStyle}
            buttonStyle={styles.chipButton}
        />
    )
}

const styles = StyleSheet.create({
    chipButton: {
        backgroundColor: '#FEDF89',
        borderStyle: 'solid',
        borderColor: '#B54708',
        padding: 0,
        paddingRight: 20
    },
    containerStyle: {
        paddingHorizontal: 0,
        backgroundColor: '#FEDF89'
    },
    titleStyle: {
        color: '#B54708',
        fontSize: 18,
        paddingVertical: 7,
        paddingLeft: 5,
        paddingRight: 0
    }
});

export default ChipStatusTab;
