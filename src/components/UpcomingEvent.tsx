import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Card, Icon, ListItem, Text } from "@rneui/themed";
import Modal from "react-native-modal";

import { COORDINATION_MEETING_LIST } from "../constants/mock";
import { getMonthName } from "../utils/Date";
import { TITLE_HOME_C } from "../constants";
import Datepicker from "./Datepicker";

const UpcomingEvent = () => {
    const [expanded, setExpanded] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState({ startDate: new Date(), endDate: new Date() }) as any;

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    }

    const RenderTitleDatepicker = () => {
        return (
            <Text style={styles.titleDatepicker}>{getMonthName(selectedDate.startDate)} {selectedDate.startDate?.getDate()}, {selectedDate.startDate?.getFullYear()} – {getMonthName(selectedDate.endDate)} {selectedDate.endDate?.getDate()}, {selectedDate.endDate?.getFullYear()}</Text>
        )
    }

    return (
        <>
            <Modal isVisible={isModalVisible} style={{ height: 50 }}>
                <View style={styles.datepickerContainer}>
                    <Datepicker toggleModal={toggleModal} setSelectedDate={setSelectedDate} />
                </View>
            </Modal>
            <Card containerStyle={styles.card}>
                <ListItem.Accordion
                    containerStyle={styles.accordionContainer}
                    content={
                        <ListItem.Content style={styles.listItemContentContainer}>
                            <Text style={styles.title}>
                                {TITLE_HOME_C}
                            </Text>
                            <TouchableOpacity onPress={toggleModal}>
                                <RenderTitleDatepicker />
                            </TouchableOpacity>
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
                    <ListItem>
                        <ListItem.Content>
                            {COORDINATION_MEETING_LIST.map((item) => (
                                <View key={item.eventId}>
                                    <Text style={styles.heading}>{item.eventDate}</Text>
                                    <Card key={item.eventId} containerStyle={styles.eventCard}>
                                        <Text style={styles.eventName}>{item.eventName}</Text>
                                        <Text style={styles.date}>{item.eventPlace}</Text>
                                    </Card>
                                </View>
                            ))}
                        </ListItem.Content>
                    </ListItem>
                </ListItem.Accordion>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    accordionContainer: {
        borderRadius: 20,
        paddingLeft: 0
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
    date: {
        marginTop: 10
    },
    datepickerContainer: {
        marginTop: 100,
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: -20
    },
    eventCard: {
        borderRadius: 13,
        marginLeft: 0,
        width: '100%',
        marginBottom: 30
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
    eventName: {
        fontWeight: 'bold'
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
    titleDatepicker: {
        fontSize: 17,
        marginBottom: 10,
        marginTop: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#D0D5DD'
    }
});

export default UpcomingEvent;
