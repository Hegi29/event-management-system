import { Icon, Text } from "@rneui/themed";
import { View } from "react-native";

import { getBGColorStatus, getIconTitleColor } from "../utils/ChipStatus";

const ChipStatus = ({ status }: any) => {
    return (
        <View style={getBGColorStatus(status)}>
            <Text style={{ color: getIconTitleColor(status) }}><Icon name='circle' type="font-awesome" size={10} color={getIconTitleColor(status)} /> {status}</Text>
        </View>
    )
}

export default ChipStatus;