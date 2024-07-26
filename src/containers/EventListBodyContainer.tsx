import { StyleSheet } from "react-native";

import { Card } from "@rneui/themed";

import SearchContainer from "./SearchContainer";
import EventListContainer from "./EventListContainer";

const EventListBodyContainer = () => {
    return (
        <Card containerStyle={styles.card}>
            <SearchContainer title='event'/>
            <EventListContainer />
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 15,
      padding: 0,
      paddingBottom: 15,
      marginBottom: 40
    }
  });

export default EventListBodyContainer;
