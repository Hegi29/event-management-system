import { useEffect } from 'react';
import { StyleSheet, View, } from 'react-native';

import { Divider, Input, Text, CheckBox, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';

import { selectAccount } from '../../redux/reducers/accountSlice';

import QuestionAnswered from '../QuestionAnswered';
import ListAttachment from '../ListAttachment';
import { formatDateID } from '../../utils/Date';

const defaultValues = {
    functionName: '',
    activityName: '',
    activityDesc: '',
    activityType: '',
    eventOrganizer: '',
    activityStartDate: '',
    activityEndDate: '',
    namaPJ: '',
    emailPJ: '',
    noTelpPJ: '',
    namaKoordinator: '',
    emailKoordinator: '',
    noTelpKoordinator: '',
    namaPIC: '',
    emailPIC: '',
    noTelpPIC: ''
};

const EventDetailTab = ({ dataDetail, setIndex, setSelectedSection, setNoTabValid, allEvidenceList }: any) => {
    const navigation = useNavigation() as any;
    const accountData = useSelector(selectAccount);
    const {
        control,
        handleSubmit,
        setValue
    } = useForm({
        defaultValues,
        mode: 'onBlur'
    });

    const roleID = accountData.account.roleId;

    useEffect(() => {
        const rawStart = dataDetail?.activityStartDate;
        const start = new Date(rawStart);

        const rawEnd = dataDetail?.activityEndDate;
        const end = new Date(rawEnd);

        setValue('functionName', dataDetail?.functionName);
        setValue('activityName', dataDetail?.activityName);
        setValue('activityDesc', dataDetail?.activityDesc);
        setValue('activityType', dataDetail?.activityType);
        setValue('eventOrganizer', dataDetail?.eventOrganizer);
        setValue('activityStartDate', dataDetail?.activityStartDate && formatDateID(start));
        setValue('activityEndDate', dataDetail?.activityEndDate && formatDateID(end));
        setValue('namaPJ', dataDetail?.contacts.find((x: any) => x.contactType === 'Penanggung Jawab Kegiatan').name);
        setValue('emailPJ', dataDetail?.contacts.find((x: any) => x.contactType === 'Penanggung Jawab Kegiatan').email);
        setValue('noTelpPJ', dataDetail?.contacts.find((x: any) => x.contactType === 'Penanggung Jawab Kegiatan').phoneNumber);
        setValue('namaKoordinator', dataDetail?.contacts.find((x: any) => x.contactType === 'Koordinator Acara').name);
        setValue('emailKoordinator', dataDetail?.contacts.find((x: any) => x.contactType === 'Koordinator Acara').email);
        setValue('noTelpKoordinator', dataDetail?.contacts.find((x: any) => x.contactType === 'Koordinator Acara').phoneNumber);
        setValue('namaPIC', dataDetail?.contacts.find((x: any) => x.contactType === 'PIC Event Organizer').name);
        setValue('emailPIC', dataDetail?.contacts.find((x: any) => x.contactType === 'PIC Event Organizer').email);
        setValue('noTelpPIC', dataDetail?.contacts.find((x: any) => x.contactType === 'PIC Event Organizer').phoneNumber);
    }, [dataDetail]);

    const handleClose = () => {
        navigation.navigate('Event');
    }

    const handleNext = () => {
        let listTab = [0, 1];
        let noTab = 0;

        switch (roleID) {
            case '2':
                noTab = 2;
                listTab = [...listTab, 2];
                break;
            case '3':
                noTab = 3;
                listTab = [...listTab, 3];
                break;
            case '4':
                noTab = 4;
                listTab = [...listTab, 4];
                break;
            case '5':
                noTab = 5;
                listTab = [...listTab, 5];
                break;
        }

        setNoTabValid(listTab);
        setIndex(noTab);
    }

    useEffect(() => {
        setSelectedSection('EventDetail');
    }, []);

    return (
        <>
            <View style={{ padding: 10 }}>
                <Text h4 style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 20 }}>Event Detail</Text>
                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama Fungsi</Text>
                            </View>
                            <Input
                                inputContainerStyle={styles.searchField}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="functionName"
                />

                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama Kegiatan</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="activityName"
                />

                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Tanggal Kegiatan</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="activityStartDate"
                />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0, marginTop: -20 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="activityEndDate"
                />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold' }}>Tipe Kegiatan</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                padding: 0,
                                marginLeft: -20
                            }}>
                                <CheckBox
                                    checked={value === 'Indoor'}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    title='Indoor'
                                    disabled
                                    // checkedColor='gray'
                                />
                                <CheckBox
                                    checked={value === 'Outdoor'}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    title='Outdoor'
                                    disabled
                                    // checkedColor='gray'
                                />
                            </View>
                        </>
                    )}
                    name="activityType"
                />

                <Divider />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 5 }}>
                                <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Penjelasan Kegiatan</Text>
                            </View>
                            <Text>Deskripsikan kegiatan secara singkat</Text>
                            <Input
                                multiline
                                inputContainerStyle={{ ...styles.searchField, borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="activityDesc"
                />

                <Divider style={{ marginBottom: 20 }} />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold' }}>Event Organizer</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                padding: 0,
                                marginLeft: -20,
                                marginBottom: -10
                            }}>
                                <CheckBox
                                    checked={value === 'Internal'}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    title='Internal fungsi'
                                    disabled
                                    // checkedColor='gray'
                                />
                                <CheckBox
                                    checked={value === 'External'}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    title='External fungsi'
                                    disabled
                                    // checkedColor='gray'
                                />
                            </View>
                        </>
                    )}
                    name="eventOrganizer"
                />

                <Divider style={{ marginVertical: 20 }} />

                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>List Kontak Darurat</Text>
                <Divider style={{ marginVertical: 20 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 15 }}>Penanggung Jawab Kegiatan</Text>

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold' }}>Nama</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="namaPJ"
                />

                <Divider style={{ marginBottom: 20 }} />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold' }}>Email</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="emailPJ"
                />

                <Divider style={{ marginBottom: 20 }} />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold' }}>No.Telp / Hp</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="noTelpPJ"
                />

                <Divider style={{ marginBottom: 20 }} />

                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Koordinator Acara</Text>
                <Divider style={{ marginVertical: 20 }} />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold' }}>Nama</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="namaKoordinator"
                />

                <Divider style={{ marginBottom: 20 }} />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold' }}>Email</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="emailKoordinator"
                />

                <Divider style={{ marginBottom: 20 }} />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <View style={{ marginBottom: -20 }}>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold' }}>No.Telp / HP</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </View>
                    )}
                    name="noTelpKoordinator"
                />

                <Divider style={{ marginVertical: 20 }} />

                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>PIC Event Organizer</Text>
                <Text style={{ fontSize: 15 }}>Lengkapi apabila menggunakan external EO</Text>
                <Divider style={{ marginVertical: 20 }} />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold' }}>Nama</Text>
                            </View>
                            <Input
                                inputContainerStyle={{ ...styles.searchField, borderColor: '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="namaPIC"
                />

                <Divider style={{ marginBottom: 20 }} />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold' }}>Email</Text>
                            </View>
                            <Input
                                inputContainerStyle={styles.searchField}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </>
                    )}
                    name="emailPIC"
                />

                <Divider style={{ marginBottom: 20 }} />

                <Controller
                    control={control}
                    render={({ field: { value } }: any) => (
                        <View style={{ marginBottom: -30 }}>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold' }}>No.Telp / Hp</Text>
                            </View>
                            <Input
                                inputContainerStyle={styles.searchField}
                                containerStyle={{ paddingHorizontal: 0 }}
                                value={value}
                                disabled
                            />
                        </View>
                    )}
                    name="noTelpPIC"
                />

                <Divider style={{ marginTop: 30, marginBottom: 20 }} />
            </View>
{/* 
            <QuestionAnswered />
            <ListAttachment allEvidenceList={allEvidenceList} /> */}

            <View style={styles.buttonContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Button type='outline' buttonStyle={styles.buttonClose} titleStyle={{ color: '#000' }} onPress={handleClose}>Close</Button>
                </View>
                <Button buttonStyle={styles.buttonNext} onPress={handleSubmit(handleNext)}>Next</Button>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    buttonClose: {
        width: 80,
        marginRight: 5,
        borderRadius: 10,
        borderColor: '#000'
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 0,
        marginTop: 15,
        paddingHorizontal: 10
    },
    buttonNext: {
        width: 80,
        borderRadius: 10,
        backgroundColor: '#0D5B95'
    },
    searchField: {
        borderRadius: 10,
        marginTop: 15,
        borderStyle: 'solid',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: '#D0D5DD',
        backgroundColor: '#F9FAFB'
    }
});

export default EventDetailTab;
