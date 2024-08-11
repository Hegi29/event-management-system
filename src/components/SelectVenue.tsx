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
import { setIsCreateNewVenue } from '../redux/reducers/urlParamSlice';
import { useDispatch } from 'react-redux';

const iconOptions = {
    name: 'circle',
    type: 'font-awesome',
    size: 10,
    color: '#067647'
};

type SelectVenueProps = { dataVenue: any, setIsAlreadySelectVenue: any, setCurrentVenue: any, setSelectedSearch: any, setSelectedVenueID: any };

const SelectVenue = ({ dataVenue, setIsAlreadySelectVenue, setCurrentVenue, setSelectedSearch, setSelectedVenueID }: SelectVenueProps) => {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedVenue, setSelectedVenue] = useState(null) as any;

    const toggleSelectVenue = () => {
        setIsModalVisible(!isModalVisible);
    }

    const handleOk = (item: any) => {
        setSelectedVenue(item);
        setCurrentVenue(item);
        setSelectedVenueID(item.venueId);
        setIsModalVisible(!isModalVisible);
        setIsAlreadySelectVenue(true);
        dispatch(setIsCreateNewVenue(false));
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
        setSelectedSearch('');
    }

    const closeModal = () => {
        setIsModalVisible(false);
    }

    return (
        <>
            <ModalSelectVenue isModalVisible={isModalVisible} handleOk={handleOk} closeModal={closeModal} dataVenue={dataVenue} setSelectedSearch={setSelectedSearch} />
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
                            style={styles.venueDesc}>
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
                        <View style={styles.containerImageText}>
                            <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                <Image source={PhoneImage} style={{ height: 20, width: 20, marginRight: 5, marginTop: 5 }} />
                                <Text style={{ ...styles.province, paddingTop: 0 }}>{selectedVenue.phoneNumber}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={CalendarImage} style={{ height: 20, width: 20, marginRight: 5, marginTop: 5 }} />
                                <Text style={styles.province}>{selectedVenue?.totalUsed ?? 0} total used</Text>
                            </View>
                        </View>
                        {selectedVenue.verified &&
                            <View style={styles.containerImageText}>
                                <Image source={CheckedImage} style={styles.verifiedImage} />
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
                        <View style={styles.changeVenueContainer}>
                            <Button buttonStyle={styles.buttonChangeVenue} onPress={handleChange}>
                                <Image source={ChangeImage} style={styles.changeImage} />Change Venue
                            </Button>
                        </View>
                        <View style={styles.buttonDeleteContainer}>
                            <Image source={DeleteImage} style={styles.deleteImage} />
                            <TouchableOpacity onPress={handleDelete}>
                                <Text style={styles.titleButtonDelete}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    buttonChangeVenue: { borderRadius: 10, backgroundColor: '#0D5B95', width: '100%', marginTop: 10 },
    buttonDeleteContainer: { flexDirection: 'row', marginBottom: 10, justifyContent: 'center', marginTop: 20 },
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
    containerImageText: { flexDirection: 'row', marginBottom: 10 },
    changeImage: { height: 20, width: 20, marginRight: 5 },
    changeVenueContainer: { marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' },
    chipButton: {
        backgroundColor: '#FEE4E2',
        borderStyle: 'solid',
        borderColor: '#F04438',
        padding: 0,
        paddingRight: 20
    },
    deleteImage: { height: 25, width: 20, marginRight: 5 },
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
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 20
    },
    province: {
        color: '#636363',
        marginVertical: 5
    },
    submitDate: {
        textAlign: 'center',
        color: '#636363'
    },
    textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        textAlign: 'center',
    },
    titleButtonDelete: { color: '#636363', paddingTop: 3, fontWeight: 'bold' },
    venueDesc: {
        fontSize: 15,
        marginTop: 7,
        textAlign: 'center',
        color: '#475467'
    },
    verifiedImage: { height: 20, width: 20, marginRight: 5, marginTop: 5 },
    viewContainer: {
        marginVertical: 5
    },
});

export default SelectVenue;
