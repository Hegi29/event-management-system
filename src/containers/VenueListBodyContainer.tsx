import { StyleSheet, View } from "react-native";

import { Button, Card, Chip, Image, Text } from "@rneui/themed";

import { DetailEventImage } from "../assets/images";
import { EVENT_LIST } from "../constants";
import SearchContainer from "./SearchContainer";

const VenueListBodyContainer = () => {
    return (
        <Card containerStyle={styles.cardContainer}>
            <SearchContainer title='venue' />
            <View style={styles.viewContainer}>
                {EVENT_LIST.map((item) => (
                    <Card key={item.eventId} containerStyle={styles.eventCard}>
                        <Image source={{ uri: item.images[0] }} resizeMode='cover' style={styles.image} />
                        <Text style={styles.heading}>{item.title}</Text>
                        <Text style={styles.province}>{item.venueName}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                        <Text style={styles.province}>{item.province}</Text>
                        <Chip
                            title={item.status}
                            icon={{
                                name: 'circle',
                                type: 'font-awesome',
                                size: 10,
                                color: '#F04438'
                            }}
                            type='outline'
                            containerStyle={{ paddingHorizontal: 0 }}
                            titleStyle={{ color: '#F04438' }}
                            buttonStyle={styles.chipButton}
                        />
                        <Button title="View Details" icon={<Image source={DetailEventImage} style={styles.imageIconDetail} />} buttonStyle={styles.buttonColor} containerStyle={styles.button} />
                        <Text style={styles.submitDate}>Submitted on {item.submit_date}</Text>
                    </Card>
                ))}
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: { borderRadius: 15, padding: 0, paddingBottom: 15 },
    viewContainer: { marginVertical: 5 },
    province: {
        color: '#636363',
        marginVertical: 10
    },
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
    chipButton: { backgroundColor: '#FEE4E2', borderStyle: 'solid', borderColor: '#F04438', padding: 0, paddingRight: 20 },
    date: {
        color: '#099057',
        fontWeight: 'bold',
        marginTop: 10
    },
    eventCard: {
        borderRadius: 13
    },
    heading: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
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
    submitDate: {
        textAlign: 'center',
        color: '#636363'
    }
});

export default VenueListBodyContainer;
