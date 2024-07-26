import { StyleSheet } from "react-native";
import { Card } from "@rneui/themed";

import { CreateVenueTab } from "../components";

type CreateVenueBodyContainerProps = { isDraft: boolean };

const CreateVenueBodyContainer = ({ isDraft }: CreateVenueBodyContainerProps) => {
    return (
        <Card containerStyle={styles.cardContainer}>
            <CreateVenueTab isDraft={isDraft} />
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20, marginBottom: 40, padding: 0, paddingBottom: 15
    }
})

export default CreateVenueBodyContainer;
