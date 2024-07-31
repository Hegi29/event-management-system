import { StyleSheet, View } from "react-native";

import { Button, Card, Chip, Image, Text } from "@rneui/themed";

import { DetailEventImage } from "../assets/images";
import { formatEventDate } from "../utils/Date";
import { getIconOptions, getIconTitleColor, getButtonTitleStyle } from "../utils/ChipStatus";

const EventListContainer = ({ data }: any) => {
    const ChipStatus = ({ status }: any) => {
        return (
            <Chip
                title={status}
                icon={getIconOptions(status)}
                type='outline'
                containerStyle={{ paddingHorizontal: 0 }}
                titleStyle={{ color: getIconTitleColor(status) }}
                buttonStyle={getButtonTitleStyle(status)}
            />
        )
    }

    return (
        <View style={styles.container}>
            {data?.map((item: any) => (
                <Card key={item.eventId} containerStyle={styles.eventCard}>
                    <Image source={{ uri: item.venue?.images[0]?.data }} resizeMode='cover' style={styles.image} />
                    <Text style={styles.heading}>{item.activityName}</Text>
                    <Text style={styles.province}>{item.venue?.venueName}</Text>
                    <Text style={styles.date}>{formatEventDate(item.activityStartDate, item.activityEndDate)}</Text>
                    <Text style={styles.province}>{item.venue?.province}</Text>
                    <ChipStatus status={item.status} />
                    <Button title="View Details" icon={<Image source={DetailEventImage} style={styles.imageIconDetail} />} buttonStyle={styles.buttonColor} containerStyle={styles.button} />
                    <Text style={styles.submitDate}>{item.created}</Text>
                </Card>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        marginVertical: 10
    },
    buttonColor: {
        backgroundColor: '#0c5b94'
    },
    card: {
        borderRadius: 20
    },
    container: {
        marginVertical: 5
    },
    date: {
        color: '#099057',
        fontWeight: 'bold',
        marginTop: 10
    },
    eventCard: {
        borderRadius: 10
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    heading: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: 140,
        marginRight: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    imageIconDetail: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 5
    },
    province: {
        color: '#636363',
        marginVertical: 10
    },
    searchField: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: -10
    },
    submitDate: {
        textAlign: 'center',
        color: '#636363'
    },
    subtitle: {
        fontSize: 15,
        marginHorizontal: 0,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10,
        marginHorizontal: 0,
        color: '#1a6fb2'
    }
});

export default EventListContainer;
