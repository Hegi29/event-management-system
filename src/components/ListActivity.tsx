import { useState } from "react";
import { StyleSheet } from "react-native";

import { Card, Icon, ListItem, Text } from "@rneui/themed";

import { TITLE_HOME_D } from "../constants";

const ListActivity = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card containerStyle={styles.card}>
            <ListItem.Accordion
                style={{ paddingLeft: 0 }}
                containerStyle={{ borderRadius: 20, paddingLeft: 0 }}
                content={
                    <ListItem.Content>
                        <Text style={styles.title}>{TITLE_HOME_D}</Text>
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

export default ListActivity;
