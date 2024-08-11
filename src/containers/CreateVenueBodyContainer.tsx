import { StyleSheet } from "react-native";

import { Card } from "@rneui/themed";

import { CreateVenueTab } from "../components";

const CreateVenueBodyContainer = ({ isDraft, dataVenue, setSelectedSearch, setSelectedVenueID, setSelectedSection, dataQuestions }: any) => {
    return (
        <Card containerStyle={styles.cardContainer}>
            <CreateVenueTab dataVenue={dataVenue} isDraft={isDraft} setSelectedSearch={setSelectedSearch} setSelectedVenueID={setSelectedVenueID} setSelectedSection={setSelectedSection} dataQuestions={dataQuestions} />
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
