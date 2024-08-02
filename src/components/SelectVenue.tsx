import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Button, Card, Chip, Image } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { CalendarImage, ChangeImage, CheckedImage, DeleteImage, PhoneImage, RingImage, SelectVenueImage } from '../assets/images';

import ModalSelectVenue from './ModalSelectVenue';

const iconOptions = {
    name: 'circle',
    type: 'font-awesome',
    size: 10,
    color: '#067647'
};

const SelectVenue = ({ dataVenue, setIsAlreadySelectVenue, setCurrentVenue }: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedVenue, setSelectedVenue] = useState(null) as any;

    const toggleSelectVenue = () => {
        setIsModalVisible(!isModalVisible);
    }

    const handleOk = (item: any) => {
        console.log('item: ', item);
        setSelectedVenue(item);
        setCurrentVenue(item);
        setIsModalVisible(!isModalVisible);
        setIsAlreadySelectVenue(true);
    }

    const handleDelete = () => {
        setSelectedVenue(null);
        setIsAlreadySelectVenue(false);
        setCurrentVenue(null);
    }

    const handleChange = () => {
        setSelectedVenue(null);
        setIsAlreadySelectVenue(false);
        toggleSelectVenue();
        setCurrentVenue(null);
    }

    return (
        <>
            <ModalSelectVenue isModalVisible={isModalVisible} handleOk={handleOk} dataVenue={dataVenue} />
            <View style={styles.mainBody}>
                {!selectedVenue &&
                    <Card containerStyle={{ borderRadius: 10, marginHorizontal: 0 }}>
                        <View>
                            <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                                <View style={{ padding: 10, borderWidth: 1, borderColor: '#EAECF0', borderRadius: 10, marginBottom: 10 }}>
                                    <Image source={SelectVenueImage} style={{ height: 35, width: 35 }} />
                                </View>
                            </View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginRight: 5, textAlign: 'center' }}>
                                Select Registered Venue
                            </Text>
                        </View>
                        <Text
                            style={{
                                fontSize: 15,
                                marginTop: 7,
                                textAlign: 'center',
                                color: '#475467'
                            }}>
                            Venues that are verified and meet the required standards
                        </Text>
                        <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                            <Button type='outline' buttonStyle={{ borderRadius: 10, marginTop: 10, borderColor: '#D0D5DD', borderWidth: 1 }} titleStyle={{ color: '#000', fontWeight: 'bold' }} onPress={toggleSelectVenue}>
                                <Image source={RingImage} style={{ height: 20, width: 20, marginRight: 7 }} />
                                Select Venue
                            </Button>
                        </View>
                    </Card>
                }
                {selectedVenue &&
                    <Card key={selectedVenue.venueId} containerStyle={styles.eventCard}>
                        <Image source={{ uri: selectedVenue.images[0].data }} resizeMode='cover' style={styles.image} />
                        <Text style={styles.heading}>{selectedVenue.venueName}</Text>
                        <Text style={styles.province}>{selectedVenue.subDistric}, {selectedVenue.province}</Text>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                <Image source={PhoneImage} style={{ height: 20, width: 20, marginRight: 5, marginTop: 3 }} />
                                <Text style={{ ...styles.province, paddingTop: 0 }}>{selectedVenue.phoneNumber}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={CalendarImage} style={{ height: 20, width: 20, marginRight: 5, marginTop: 3 }} />
                                <Text style={styles.province}>{selectedVenue?.totalUsed ?? 0} total used</Text>
                            </View>
                        </View>
                        {selectedVenue.verified &&
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <Image source={CheckedImage} style={{ height: 20, width: 20, marginRight: 5 }} />
                                <Text style={styles.province}>Verified on {selectedVenue.verified}</Text>
                            </View>}
                        {selectedVenue?.badges?.map((items: any) => (
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
                        <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <Button buttonStyle={{ borderRadius: 10, backgroundColor: '#0D5B95', width: '100%', marginTop: 10 }} onPress={handleChange}>
                                <Image source={ChangeImage} style={{ height: 20, width: 20, marginRight: 5 }} />Change Venue
                            </Button>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'center', marginTop: 20 }}>
                            <Image source={DeleteImage} style={{ height: 20, width: 20, marginRight: 5 }} />
                            <TouchableOpacity onPress={handleDelete}>
                                <Text style={{ color: '#636363', paddingTop: 2 }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 20
    },
    buttonStyle: {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 15,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        textAlign: 'center',
    },
    viewContainer: {
        marginVertical: 5
    },
    button: {
        borderRadius: 8,
        marginVertical: 10
    },
    buttonColor: {
        backgroundColor: '#0c5b94'
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
    submitDate: {
        textAlign: 'center',
        color: '#636363'
    }
});

export default SelectVenue;