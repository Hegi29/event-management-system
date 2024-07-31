import { StyleSheet } from "react-native";

import { Card } from "@rneui/themed";

import CreateEventTab from "../components/CreateEventTab";

const CreateEventBodyContainer = ({ isDraft }: any) => {
    return (
        <Card containerStyle={styles.card}>
            <CreateEventTab isDraft={isDraft} />
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        marginBottom: 40,
        padding: 0,
        paddingBottom: 15
    }
});

export default CreateEventBodyContainer