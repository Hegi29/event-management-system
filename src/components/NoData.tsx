import { StyleSheet } from "react-native";

import { Card, Text } from "@rneui/themed";

type NoDataProps = { data: any };

const NoData = ({ data }: NoDataProps) => {
    return (
        <>
            {data.length && <Card containerStyle={styles.eventCard}>
                <Text style={styles.textStyle}>No Data</Text>
            </Card>}
        </>
    )
}

const styles = StyleSheet.create({
    eventCard: {
        borderRadius: 13
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default NoData;
