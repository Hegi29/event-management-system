import { useState } from "react";
import { StyleSheet } from "react-native";

import { Button, Card, Icon, Image, ListItem, Text } from "@rneui/themed";

import { DetailEventImage, TopVenueImage } from "../assets/images";
import { EVENT_LIST, TITLE_HOME_B } from "../constants";

const TopVenue = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card containerStyle={styles.card}>
            <ListItem.Accordion
                containerStyle={styles.listItemAccordionContainer}
                content={
                    <ListItem.Content style={styles.listItemContentContainer}>
                        <Image source={TopVenueImage} style={styles.imageIconTitle} />
                        <Text style={styles.title}>
                            {TITLE_HOME_B}
                        </Text>
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
                                <Button title="View Details" icon={<Image source={DetailEventImage} style={styles.imageIconDetail} />} buttonStyle={styles.buttonColor} containerStyle={styles.button} />
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
    imageIconTitle: { height: 30, width: 30, marginTop: 15 },
    listItemAccordionContainer: { borderRadius: 20, paddingLeft: 0 },
    listItemContentContainer: { flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 20 },
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
        marginHorizontal: 15,
        paddingTop: 10, 
        paddingBottom: 0
    }
});

export default TopVenue;
