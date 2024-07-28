import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Card, Chip, Icon, Image, ListItem, Text } from "@rneui/themed";

import { CalendarImage, CheckedImage, PhoneImage, TopVenueImage } from "../assets/images";
import { TITLE_HOME_B, TOP_VENUE_LIST } from "../constants";

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
                        {TOP_VENUE_LIST.map((item) => (
                            <Card key={item.venueId} containerStyle={styles.eventCard}>
                                <Image source={{ uri: item.images[0] }} resizeMode='cover' style={styles.image} />
                                <Text style={styles.heading}>{item.venueName}</Text>
                                <Text style={styles.province}>{item.venueAddress}</Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                        <Image source={PhoneImage} style={{ height: 20, width: 20, marginRight: 5 }} />
                                        <Text style={styles.province}>{item.phoneNumber}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={CalendarImage} style={{ height: 20, width: 20, marginRight: 5 }} />
                                        <Text style={styles.province}>{item.totalUsed} total used</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                    <Image source={CheckedImage} style={{ height: 20, width: 20, marginRight: 5 }} />
                                    <Text style={styles.province}>Verified on {item.verifiedDate}</Text>
                                </View>

                                {item.badges.map((items) => (
                                    <Chip
                                        key={items}
                                        title={items}
                                        icon={{
                                            name: 'circle',
                                            type: 'font-awesome',
                                            size: 10,
                                            color: '#067647'
                                        }}
                                        type='outline'
                                        containerStyle={{ paddingHorizontal: 0, marginBottom: 10 }}
                                        titleStyle={{ color: '#067647' }}
                                        buttonStyle={styles.chipButton}
                                    />
                                ))}
                                <Chip
                                    title='10 events were held here'
                                    type='outline'
                                    containerStyle={{ paddingHorizontal: 0, marginBottom: 10, marginTop: 30 }}
                                    titleStyle={{ color: '#fff' }}
                                    buttonStyle={{backgroundColor: '#1072BA', borderStyle: 'solid'}}
                                />
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
    chipButton: { backgroundColor: '#ABEFC6', borderStyle: 'solid', borderColor: '#067647' },
    date: {
        color: '#099057',
        fontWeight: 'bold',
        marginTop: 10
    },
    eventCard: {
        borderRadius: 13,
        marginLeft: 0,
        width: '100%'
    },
    heading: {
        fontSize: 17,
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
        marginVertical: 5
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
