import { View } from "react-native";

import { Text } from "@rneui/themed";

type DividerTextMiddleProps = { title?: string };

const DividerTextMiddle = ({ title }: DividerTextMiddleProps) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#D0D5DD' }} />
            <View>
                <Text style={{ textAlign: 'center', paddingHorizontal: 8, color: '#98A2B3' }}>{title}</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: '#D0D5DD' }} />
        </View>
    )
}

export default DividerTextMiddle;
