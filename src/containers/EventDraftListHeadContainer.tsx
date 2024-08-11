import { StyleSheet, View } from "react-native";

import { Button, Card, Icon, Image, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import { ExportImage } from "../assets/images";
import { SUBTITLE_EVENT, TITLE_EVENT_DRAFT } from "../constants";
import { useDispatch } from "react-redux";
import { setIsCreateNewEvent } from "../redux/reducers/urlParamSlice";

const ActionButton = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleNav = () => {
        navigation.navigate('CreateEvent' as never);
        dispatch(setIsCreateNewEvent(false));
    }
    return (
        <View style={styles.buttonWrapper}>
            <Button title="Export" type='outline' buttonStyle={styles.buttonExport} titleStyle={{ color: '#000' }} icon={<Image source={ExportImage} style={styles.image} />} />
            <Button title="Add New Event" type='solid' buttonStyle={styles.buttonAdd} onPress={handleNav} icon={<Icon name="add" size={24} color="#fff" />} />
        </View>
    )
}

const EventDraftListHeadContainer = () => {
    return (
        <Card containerStyle={styles.cardContainer}>
            <Text style={styles.title}>{TITLE_EVENT_DRAFT}</Text>
            <Text style={styles.subtitle}>{SUBTITLE_EVENT}</Text>
            <ActionButton />
        </Card>
    )
}

const styles = StyleSheet.create({
    buttonAdd: {
        width: 180,
        borderRadius: 10,
        borderColor: '#000',
        backgroundColor: '#0D5B95',
        height: 50
    },
    buttonExport: {
        width: 140,
        marginRight: 5,
        borderRadius: 10,
        borderColor: '#000',
        height: 50
    },
    buttonWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 0
    },
    cardContainer: {
        borderRadius: 10,
        paddingBottom: 20
    },
    image: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 5
    },
    subtitle: {
        fontSize: 15,
        marginHorizontal: 0,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10,
        marginHorizontal: 0,
        color: '#1a6fb2'
    }
});

export default EventDraftListHeadContainer;
