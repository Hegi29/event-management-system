import { StyleSheet } from "react-native";

import { Card } from "@rneui/themed";

import SearchContainer from "./SearchContainer";
import EventListContainer from "./EventListContainer";

const EventListBodyContainer = ({ data, setSelectedStatus, setSelectedSearch }: any) => {
  return (
    <Card containerStyle={styles.card}>
      {data.data &&
        <SearchContainer title='event' setSelectedStatus={setSelectedStatus} setSelectedSearch={setSelectedSearch} />
      }
      {data.data && <EventListContainer data={data.data} />}
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
