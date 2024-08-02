import { StyleSheet } from "react-native";

import { Card, Text } from "@rneui/themed";

const NoData = ({ data }: any) => {
    return (
        <>
            {data.length === 0 && <Card containerStyle={styles.eventCard}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>No Data</Text>
            </Card>}
        </>
    )
}

const styles = StyleSheet.create({
    eventCard: {
        borderRadius: 13
    }
});

export default NoData;
