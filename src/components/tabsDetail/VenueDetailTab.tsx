import { useEffect } from 'react';
import { StyleSheet, View, } from 'react-native';

import { Divider, Input, Text, Button, Image } from '@rneui/themed';
import { Controller, useForm } from 'react-hook-form';

import ListAttachment from '../ListAttachment';
import QuestionAnswered from '../QuestionAnswered';

const defaultValues = {
    venueName: '',
    address: '',
    province: '',
    city: '',
    district: '',
    village: '',
    phoneNumber: '',
    email: '',
    images: '',
    nameRS: '',
    emailRS: '',
    phoneNumberRS: '',
    namePolisi: '',
    emailPolisi: '',
    phoneNumberPolisi: '',
    nameDamkar: '',
    emailDamkar: '',
    phoneNumberDamkar: ''
};

const VenueDetailTab = ({ dataDetail, setIndex, setSelectedSection, setNoTabValid, allEvidenceList }: any) => {
    const {
        control,
        handleSubmit,
        setValue
    } = useForm({
        defaultValues,
        mode: 'onBlur'
    });

    const handleNext = () => {
        const validTab = [0, 1, 2];
        setNoTabValid(validTab);
    }

    const handlePrev = () => {
        setIndex(0);
        // perlu flag menandakan perintah untuk get ulang data di event detail?
    }

    const extractEmergencyContactListsData = (contactType: string, key: string) => {
        const res = dataDetail?.venue?.emergencyContactLists?.find((x: any) => x.contactType === contactType);
        if (res) {
            return res[key];
        }

        return '';
    }

    useEffect(() => {
        setSelectedSection('VenueDetail');
    }, []);

    useEffect(() => {
        setValue('venueName', dataDetail?.venue?.venueName);
        setValue('address', dataDetail?.venue?.venueAddress);
        setValue('province', dataDetail?.venue?.province);
        setValue('city', dataDetail?.venue?.subDistric);
        setValue('district', dataDetail?.venue?.urbanVillage);
        setValue('village', dataDetail?.venue?.neighbourhood);
        setValue('phoneNumber', dataDetail?.venue?.phoneNumber);
        setValue('email', dataDetail?.venue?.email);
        setValue('images', dataDetail?.venue?.images[0]?.data);
        setValue('nameRS', extractEmergencyContactListsData("Rumah Sakit Terdekat", "name"));
        setValue('emailRS', extractEmergencyContactListsData("Rumah Sakit Terdekat", "email"));
        setValue('phoneNumberRS', extractEmergencyContactListsData("Rumah Sakit Terdekat", "phoneNumber"));
        setValue('namePolisi', extractEmergencyContactListsData("Kantor Polisi Terdekat", "name"));
        setValue('emailPolisi', extractEmergencyContactListsData("Kantor Polisi Terdekat", "email"));
        setValue('phoneNumberPolisi', extractEmergencyContactListsData("Kantor Polisi Terdekat", "phoneNumber"));
        setValue('nameDamkar', extractEmergencyContactListsData("Pemadam Kebakaran Terdekat", "name"));
        setValue('emailDamkar', extractEmergencyContactListsData("Pemadam Kebakaran Terdekat", "email"));
        setValue('phoneNumberDamkar', extractEmergencyContactListsData("Pemadam Kebakaran Terdekat", "phoneNumber"));
    }, [dataDetail]);

    return (
        <>
            <View style={{ padding: 10 }}>
                <Text h4 style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 20 }}>Venue Detail</Text>
                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama Venue</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled
                                value={value}
                            />
                        </>
                    )}
                    name="venueName"
                />

                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Alamat Venue</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0, marginBottom: -20 }}
                                disabled
                                value={value}
                            />
                        </>
                    )}
                    name="address"
                />

                <View style={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: -20
                }}>
                    <Controller
                        control={control}
                        render={({ field: { value } }: any) => (
                            <View style={{ width: '49%' }}>
                                <Input
                                    inputContainerStyle={{ ...styles.searchField, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    disabled
                                    value={value}
                                />
                            </View>
                        )}
                        name="province"
                    />

                    <Controller
                        control={control}
                        render={({ field: { value } }: any) => (
                            <View style={{ width: '49%' }}>
                                <Input
                                    inputContainerStyle={{ ...styles.searchField, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    value={value}
                                    disabled
                                />
                            </View>
                        )}
                        name="city"
                    />

                </View>

                <View style={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Controller
                        control={control}
                        render={({ field: { value } }: any) => (
                            <View style={{ width: '49%' }}>
                                <Input
                                    inputContainerStyle={{ ...styles.searchField, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    disabled
                                    value={value}
                                />
                            </View>
                        )}
                        name="district"
                    />

                    <Controller
                        control={control}
                        render={({ field: { value } }: any) => (
                            <View style={{ width: '49%' }}>
                                <Input
                                    inputContainerStyle={{ ...styles.searchField, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    disabled
                                    value={value}
                                />
                            </View>
                        )}
                        name="village"
                    />

                </View>
                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No.Telp / HP</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, marginBottom: 0, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="phoneNumber"
                />

                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled
                                value={value}
                            />
                        </>
                    )}
                    name="email"
                />
                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginVertical: 20 }}>Images</Text>
                            </View>
                            <Image source={{ uri: value }} resizeMode='cover' style={styles.image} />
                        </>
                    )}
                    name="images"
                />

                <Divider />
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>List Kontak Darurat</Text>
                <Divider />
                <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 17 }}>Rumah Sakit Terdekat</Text>

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled
                                value={value}
                            />
                        </>
                    )}
                    name="nameRS"
                />

                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled
                                value={value}
                            />
                        </>
                    )}
                    name="emailRS"
                />

                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No.Telp / HP</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, marginBottom: 0, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="phoneNumberRS"
                />

                <Divider />
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>Kantor Polisi Terdekat</Text>
                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled
                                value={value}
                            />
                        </>
                    )}
                    name="namePolisi"
                />

                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled
                                value={value}
                            />
                        </>
                    )}
                    name="emailPolisi"
                />

                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No.Telp / HP</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, marginBottom: 0, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="phoneNumberPolisi"
                />

                <Divider />
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>Pemadam Kebakaran Terdekat</Text>
                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled
                                value={value}
                            />
                        </>
                    )}
                    name="nameDamkar"
                />

                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled
                                value={value}
                            />
                        </>
                    )}
                    name="emailDamkar"
                />

                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No.Telp / HP</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, marginBottom: 0, backgroundColor: '#F9FAFB', borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="phoneNumberDamkar"
                />

                <Divider />
            </View>

            {/* <QuestionAnswered />
            <ListAttachment allEvidenceList={allEvidenceList} /> */}

            <View style={styles.buttonActionContainer}>
                <Button type='outline' buttonStyle={styles.buttonClose} titleStyle={{ color: '#000' }}>Close</Button>
                <Button type='outline' buttonStyle={styles.buttonPrev} titleStyle={{ color: '#000' }} onPress={handlePrev}>Prev</Button>
                <Button buttonStyle={styles.buttonNext} onPress={handleSubmit(handleNext)}>Next</Button>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    appTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 20,
        color: 'white'
    },
    container: {
        marginTop: 60,
        backgroundColor: '#408EC9',
    },
    image: {
        width: '100%',
        height: 140,
        marginRight: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    imageStatus: {
        width: 20,
        height: 20,
        marginTop: 22,
        marginRight: 10
    },
    buttonActionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 0,
        marginTop: 40
    },
    buttonClose: {
        width: 80,
        marginRight: 5,
        borderRadius: 10,
        borderColor: '#000'
    },
    buttonContainer: {
        marginTop: 20
    },
    buttonNext: {
        width: 80,
        borderRadius: 10,
        backgroundColor: '#0D5B95'
    },
    buttonPrev: {
        width: 80,
        marginRight: 5,
        borderRadius: 10,
        borderColor: '#000'
    },
    buttonSave: {
        width: 80,
        marginRight: 5,
        borderRadius: 10,
        borderColor: '#000'
    },
    buttonTitle: {
        color: 'white',
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    searchField: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 15,
        borderStyle: 'solid',
        borderColor: '#D0D5DD',
        borderWidth: 1,
        paddingHorizontal: 10
    }
});

export default VenueDetailTab;
