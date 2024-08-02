import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Card, Icon, ListItem, Text } from "@rneui/themed";
import Modal from "react-native-modal";

import { COORDINATION_MEETING_LIST } from "../constants/mock";
import { getMonthName } from "../utils/Date";
import { TITLE_HOME_C } from "../constants";

import Datepicker from "./Datepicker";

const RenderTitleDatepicker = ({ selectedDate }: any) => {
    return (
        <Text style={styles.titleDatepicker}>{getMonthName(selectedDate.startDate).slice(0, 4)} {selectedDate.startDate?.getDate()}, {selectedDate.startDate?.getFullYear()} – {getMonthName(selectedDate.endDate).slice(0, 4)} {selectedDate.endDate?.getDate()}, {selectedDate.endDate?.getFullYear()}</Text>
    )
}

const DatepickerModal = ({ isModalVisible, toggleModal, setSelectedDate }: any) => {
    return (
        <Modal isVisible={isModalVisible} style={{ height: 50 }}>
            <View style={styles.datepickerContainer}>
                <Datepicker toggleModal={toggleModal} setSelectedDate={setSelectedDate} />
            </View>
        </Modal>
    )
}

const ListItemHeaderContent = ({ toggleModal, selectedDate }: any) => {
    return (
        <>
            <Text style={styles.title}>
                {TITLE_HOME_C}
            </Text>
            <TouchableOpacity onPress={toggleModal}>
                <RenderTitleDatepicker selectedDate={selectedDate} />
            </TouchableOpacity>
        </>
    )
}

const IconChevron = () => {
    return (
        <Icon
            name='chevron-down'
            type="material-community"
            color='black'
        />
    )
}

const ListItemBodyContent = () => {
    return (
        <>
            {COORDINATION_MEETING_LIST.map((item) => (
                <View key={item.eventId} style={styles.eventCard}>
                    <Text style={styles.heading}>{item.eventDate}</Text>
                    <Card key={item.eventId} containerStyle={styles.eventCard}>
                        <Text style={styles.eventName}>{item.eventName}</Text>
                        <Text style={styles.date}>{item.eventPlace}</Text>
                    </Card>
                </View>
            ))}
        </>
    )
}

const UpcomingEvent = ({ dataEventByDate, setSelectedDate, selectedDate }: any) => {
    const [expanded, setExpanded] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <>
            <DatepickerModal isModalVisible={isModalVisible} toggleModal={toggleModal} setSelectedDate={setSelectedDate} />
            <Card containerStyle={styles.card}>
                <ListItem.Accordion
                    containerStyle={styles.accordionContainer}
                    content={
                        <ListItem.Content style={styles.listItemContentContainer}>
                            <ListItemHeaderContent toggleModal={toggleModal} selectedDate={selectedDate} />
                        </ListItem.Content>
                    }
                    isExpanded={expanded}
                    onPress={() => {
                        setExpanded(!expanded);
                    }}
                    icon={<IconChevron />}
                >
                    <ListItem containerStyle={styles.listItemBodyContainer}>
                        <ListItem.Content>
                            <ListItemBodyContent />
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
        marginBottom: 15,
        marginLeft: 0,
        width: '100%'
    },
    heading: {
        marginLeft: 15,
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
    listItemBodyContainer: {
        paddingTop: 0,
        borderRadius: 20
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
