import { useState } from "react";
import { StyleSheet } from "react-native";

import { Card, Icon, Image, ListItem, Text } from "@rneui/themed";

import { EventRequestingRevisionImage } from "../assets/images";
import { TITLE_HOME_A } from "../constants";
import { EventListContainer } from "../containers";

const ListItemContentHeader = () => {
    return (
        <>
            <Image source={EventRequestingRevisionImage} style={styles.imageIconTitle} />
            <Text style={styles.title}>
                {TITLE_HOME_A}
            </Text>
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

const ListItemContentBody = ({ data }: any) => {
    return (
        <>
            {data.length > 0 && <EventListContainer data={data} />}
            {data.length === 0 && <Text style={{ textAlign: 'center', fontWeight: 'semibold' }}>No Data</Text>}
        </>
    )
}

const EventRequestingRevision = ({ data }: any) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card containerStyle={styles.card}>
            <ListItem.Accordion
                containerStyle={styles.listItemAccordionContainer}
                content={
                    <ListItem.Content style={styles.listItemContentContainer}>
                        <ListItemContentHeader />
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
                        <ListItemContentBody data={data} />
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
        backgroundColor: '#FEE4E2',
        borderStyle: 'solid',
        borderColor: '#F04438',
        padding: 0,
        paddingRight: 20
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
        paddingTop: 0
    },
    listItemContentContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20
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
        marginHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 0
    }
});

export default EventRequestingRevision;
