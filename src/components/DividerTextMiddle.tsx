import { StyleSheet, View } from "react-native";

import { Text } from "@rneui/themed";

type DividerTextMiddleProps = { title?: string };

const DividerTextMiddle = ({ title }: DividerTextMiddleProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.lineOne} />
            <View>
                <Text style={styles.textStyle}>{title}</Text>
            </View>
            <View style={styles.lineTwo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center' },
    lineOne: { flex: 1, height: 1, backgroundColor: '#D0D5DD' },
    lineTwo: { flex: 1, height: 1, backgroundColor: '#D0D5DD' },
    textStyle: { textAlign: 'center', paddingHorizontal: 8, color: '#98A2B3' }
})

export default DividerTextMiddle;
