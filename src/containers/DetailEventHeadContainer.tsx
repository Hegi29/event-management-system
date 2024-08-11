import { StyleSheet } from "react-native";

import { Card, Text } from "@rneui/themed";

const DetailEventHeadContainer = () => {
    return (
        <Card containerStyle={styles.card}>
            <Text style={styles.title}>Detail Event</Text>
            <Text style={styles.subtitle}>Track, manage and forecast your event</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        paddingBottom: 5
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
        marginHorizontal: 0,
        color: '#1a6fb2'
    },
    subtitle: {
        fontSize: 15,
        marginHorizontal: 0,
        marginBottom: 20
    }
});

export default DetailEventHeadContainer;
