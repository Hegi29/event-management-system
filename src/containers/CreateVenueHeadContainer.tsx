import { StyleSheet } from "react-native";

import { Card, Text } from "@rneui/themed"

const CreateVenueHeadContainer = () => {
    return (
        <Card containerStyle={styles.cardContainer}>
            <Text style={styles.title}>Create New Venue</Text>
            <Text style={styles.subtitle}>Track, manage and forecast your event</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: { borderRadius: 15, paddingBottom: 5 },
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


export default CreateVenueHeadContainer;
