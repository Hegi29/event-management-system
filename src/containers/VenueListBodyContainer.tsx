import { StyleSheet } from "react-native";

import { Card } from "@rneui/themed";

import SearchContainer from "./SearchContainer";
import VenueListContainer from "./VenueListContainer";

const VenueListBodyContainer = ({ data, setSelectedStatus, setSelectedSearch }: any) => {
    return (
        <Card containerStyle={styles.cardContainer}>
            <SearchContainer title='venue' setSelectedStatus={setSelectedStatus} setSelectedSearch={setSelectedSearch} />
            <VenueListContainer data={data} />
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 15,
        padding: 0,
        paddingBottom: 15
    }
});

export default VenueListBodyContainer;
