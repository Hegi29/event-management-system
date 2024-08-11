import { StyleSheet, View } from "react-native";

import { Button, Card, Chip, Icon, Image, Input, Text } from "@rneui/themed";
import Modal from "react-native-modal";
import { ScrollView } from "react-native-gesture-handler";

import { CalendarImage, CheckedImage, PhoneImage } from "../assets/images";

const iconOptions = {
    name: 'circle',
    type: 'font-awesome',
    size: 10,
    color: '#067647'
};

type ModalSelectVenueProps = { isModalVisible: boolean, handleOk: any, closeModal: any, dataVenue: any, setSelectedSearch: any };

const VenueItem = ({ item, handleOk }: any) => {
    return (
        <Card key={item.venueId} containerStyle={{ borderRadius: 13 }}>
            <Image source={{ uri: item.images[0].data }} resizeMode='cover' style={styles.image} />
            <Text style={styles.heading}>{item.venueName}</Text>
            <Text style={styles.province}>{item.subDistric}, {item.province}</Text>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                    <Image source={PhoneImage} style={{ height: 20, width: 20, marginRight: 5, marginTop: 5 }} />
                    <Text style={{ ...styles.province, paddingTop: 0 }}>{item.phoneNumber}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={CalendarImage} style={{ height: 20, width: 20, marginRight: 5, marginTop: 5 }} />
                    <Text style={styles.province}>{item?.totalUsed ?? 0} total used</Text>
                </View>
            </View>
            {item.verified &&
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Image source={CheckedImage} style={{ height: 20, width: 20, marginRight: 5, marginTop: 5 }} />
                    <Text style={styles.province}>Verified on {item.verified}</Text>
                </View>}
            {item?.badges?.map((items: any) => (
                <Chip
                    key={items}
                    title={items}
                    icon={iconOptions}
                    type='outline'
                    containerStyle={styles.iconContainer}
                    titleStyle={{ color: '#067647' }}
                    buttonStyle={styles.chipButton}
                />
            ))}
            <View style={styles.buttonSelectContainer}>
                <Button buttonStyle={styles.buttonSelect} onPress={() => handleOk(item)}>Select</Button>
            </View>
        </Card>
    )
}

const IconSearch = () => {
    return (
        <Icon
            name='search'
            size={24}
            color='grey'
            containerStyle={styles.iconContainer}
        />
    )
}

const ModalSelectVenue = ({ isModalVisible, handleOk, closeModal, dataVenue, setSelectedSearch }: ModalSelectVenueProps) => {
    const onChangeSearch = (value: string) => {
        setSelectedSearch(value);
    }

    return (
        <Modal isVisible={isModalVisible} style={{ height: 50 }}>
            <View>
                <Card containerStyle={styles.eventCard}>
                    <Input placeholder='Search' leftIcon={<IconSearch />}
                        inputContainerStyle={styles.searchField}
                        containerStyle={{ marginTop: 10, paddingBottom: 0, marginBottom: -10 }}
                        onChangeText={value => onChangeSearch(value)}
                    />
                    {dataVenue === null && <Card containerStyle={styles.eventCard}>
                        <Text style={styles.textStyle}>No Data</Text>
                    </Card>}
                    <Button onPress={() => closeModal()} title='Close' buttonStyle={{ borderRadius: 10, marginHorizontal: 10 }} />
                    <ScrollView>
                        {dataVenue?.length > 0 && dataVenue?.map((item: any) => (
                            <View key={item.venueId}>
                                <VenueItem handleOk={handleOk} item={item} />
                            </View>
                        ))}
                    </ScrollView>
                </Card>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        marginVertical: 5
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button: {
        borderRadius: 8,
        marginVertical: 10
    },
    buttonColor: {
        backgroundColor: '#0c5b94'
    },
    buttonSelect: {
        borderRadius: 10,
        padding: 10
    },
    buttonSelectContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    card: {
        borderRadius: 20
    },
    chipButton: {
        backgroundColor: '#FEE4E2',
        borderStyle: 'solid',
        borderColor: '#F04438',
        padding: 0,
        paddingRight: 20
    },
    containerList: {
        backgroundColor: '#fff',
        borderRadius: 10
    },
    date: {
        color: '#099057',
        fontWeight: 'bold',
        marginTop: 10
    },
    eventCard: {
        borderRadius: 13,
        padding: 0,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20
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
    iconContainer: {
        paddingHorizontal: 0,
        marginBottom: 10
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
        marginVertical: 5
    },
    searchField: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: -10
    },
    submitDate: {
        textAlign: 'center',
        color: '#636363'
    }
});

export default ModalSelectVenue;
