import { StyleSheet } from "react-native";

import { Card } from "@rneui/themed";

import { CreateVenueTab } from "../components";

const CreateVenueBodyContainer = () => {
    return (
        <Card containerStyle={styles.cardContainer}>
            <CreateVenueTab />
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20, 
        marginBottom: 40, 
        padding: 0, 
        paddingBottom: 15
    }
})

export default CreateVenueBodyContainer;
