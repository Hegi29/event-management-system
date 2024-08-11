import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Badge, Button, Card, Icon, Image, ListItem, Text } from "@rneui/themed";

import { EventRequestingRevisionImage } from "../assets/images";
import { TITLE_HOME_A } from "../constants";
import { EventListContainer } from "../containers";

const ListItemContentHeader = ({ totalItemRequest }: any) => {
    return (
        <>
            <Image source={EventRequestingRevisionImage} style={styles.imageIconTitle} />
            <Text style={styles.title}>
                {TITLE_HOME_A}
            </Text>
            <Badge value={totalItemRequest} badgeStyle={{ backgroundColor: '#FEE4E2' }} textStyle={{ color: '#D92D20', fontWeight: 'bold' }} containerStyle={{ marginTop: 22 }} />
        </>
    )
}

const ChevronIcon = () => {
    return (
        <Icon
            name='chevron-down'
            type="material-community"
            color='black'
        />
    )
}

const ListItemContentBody = ({ data, totalItemRequest, handleShowMoreEventRequest }: any) => {
    return (
        <View style={{ padding: 0, width: 350 }}>
            {data.length > 0 && <EventListContainer data={data} />}
            {data.length === 0 && <Text style={{ textAlign: 'center', fontWeight: 'semibold' }}>No Data</Text>}
            {totalItemRequest > data.length && <Button title='Show More' buttonStyle={{ borderRadius: 13, marginTop: 15, width: '50%' }} containerStyle={{ alignItems: 'center' }} onPress={handleShowMoreEventRequest} />}
        </View>
    )
}

const EventRequestingRevision = ({ data, totalItemRequest, handleShowMoreEventRequest }: any) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card containerStyle={styles.card}>
            <ListItem.Accordion
                containerStyle={styles.listItemAccordionContainer}
                content={
                    <ListItem.Content style={styles.listItemContentContainer}>
                        <ListItemContentHeader totalItemRequest={totalItemRequest} />
                    </ListItem.Content>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded);
                }}
                icon={<ChevronIcon />}
            >
                <ListItem containerStyle={styles.listItemBodyContainer}>
                    <ListItem.Content>
                        <ListItemContentBody data={data} totalItemRequest={totalItemRequest} handleShowMoreEventRequest={handleShowMoreEventRequest} />
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
    chipButton: {
        backgroundColor: '#ABEFC6',
        borderStyle: 'solid',
        borderColor: '#067647'
    },
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
    imageIconTitle: {
        height: 30,
        width: 30,
        marginTop: 15
    },
    listItemAccordionContainer: {
        borderRadius: 20,
        paddingLeft: 0
    },
    listItemBodyContainer: {
        paddingTop: 0,
        borderRadius: 20
    },
    listItemContentContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20
    },
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

export default EventRequestingRevision;
