import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Avatar, Card, Icon, ListItem, Text } from "@rneui/themed";

import { ACTIVITY_LIST, TITLE_HOME_D } from "../constants";

const ListActivity = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card containerStyle={styles.card}>
            <ListItem.Accordion
                containerStyle={styles.accordionContainer}
                content={
                    <ListItem.Content style={styles.listItemContentContainer}>
                        <Text style={styles.title}>
                            {TITLE_HOME_D}
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
                <ListItem containerStyle={styles.container}>
                    <ListItem.Content>
                        {ACTIVITY_LIST.map((item) => (
                            <View key={item.activityId}>
                                <Avatar containerStyle={styles.avatarContainer}
                                    size={32}
                                    rounded
                                    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                                />
                                <View style={styles.containerCreated}>
                                    <Text style={styles.username}>{item.userName}</Text>
                                    <Text>{item.createdAt}</Text>
                                </View>
                                <View style={{ ...styles.containerEvent, marginBottom: item.activity ? 0 : 20 }}>
                                    <Text>{item.type}</Text>
                                    <Text style={styles.eventName}>{item.eventName}</Text>
                                </View>
                                {item.activity && <Text style={styles.activity}>"{item.activity}"</Text>}
                            </View>
                        ))}
                    </ListItem.Content>
                </ListItem>
            </ListItem.Accordion>
        </Card>
    )
}

const styles = StyleSheet.create({
    accordionContainer: {
        borderRadius: 20,
        paddingLeft: 0
    },
    activity: {
        marginLeft: 40,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#EAECF0',
        marginTop: 5
    },
    avatarContainer: {
        position: 'absolute'
    },
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
    container: {
        paddingTop: 0
    },
    containerCreated: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 40
    },
    containerEvent: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginLeft: 40
    },
    date: {
        color: '#099057',
        fontWeight: 'bold',
        marginTop: 10
    },
    eventCard: {
        borderRadius: 13
    },
    eventName: {
        color: '#1072BA'
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
    listItemContentContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 10
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
    },
    username: {
        marginRight: 10,
        fontWeight: 'bold'
    }
});

export default ListActivity;
