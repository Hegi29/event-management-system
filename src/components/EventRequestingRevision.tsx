import { useState } from "react";
import { StyleSheet } from "react-native";

import { Button, Card, Icon, Image, ListItem, Text } from "@rneui/themed";

import { EVENT_LIST, TITLE_HOME_A } from "../constants";
import { DetailEventImage } from "../assets/images";

const EventRequestingRevision = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card containerStyle={styles.card}>
            <ListItem.Accordion
                style={{ paddingLeft: 0 }}
                containerStyle={{ borderRadius: 20, paddingLeft: 0 }}
                content={
                    <ListItem.Content>
                        <Text style={styles.title}><Icon name="event" type="material" size={24} color="#000" style={{ paddingRight: 5 }} />{TITLE_HOME_A}</Text>
                    </ListItem.Content>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded);
                }}
                icon={
                    <Icon
                        name='chevron-down'
                        type="material-community"
                        color='black'
                    />
                }
            >
                <ListItem containerStyle={{ paddingTop: 0 }}>
                    <ListItem.Content>
                        {EVENT_LIST.map((item) => (
                            <Card key={item.eventId} containerStyle={styles.eventCard}>
                                <Image source={{ uri: item.images[0] }} resizeMode='cover' style={styles.image} />
                                <Text style={styles.heading}>{item.title}</Text>
                                <Text style={styles.province}>{item.venueName}</Text>
                                <Text style={styles.date}>{item.date}</Text>
                                <Text style={styles.province}>{item.province}</Text>
                                <Text style={styles.province}>{item.status}</Text>
                                <Button title="View Details" icon={<Image source={DetailEventImage} style={styles.imageIconDetail}/>} buttonStyle={styles.buttonColor} containerStyle={styles.button} />
                                <Text style={styles.submitDate}>Submitted on {item.submit_date}</Text>
                            </Card>
                        ))}
                    </ListItem.Content>
                </ListItem>
            </ListItem.Accordion>
        </Card>
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
        borderRadius: 20,
        padding: 0
    },
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
    province: {
        color: '#636363',
        marginVertical: 10
    },
    submitDate: {
        textAlign: 'center',
        color: '#636363'
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 10,
        marginHorizontal: 15
    }
});

export default EventRequestingRevision;
