import { useEffect, useState } from 'react';
import { StyleSheet, View, } from 'react-native';

import { Divider, Input, Text, CheckBox, Button, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import MaskInput from 'react-native-mask-input';
import { useDispatch, useSelector } from 'react-redux';
import axios, { HttpStatusCode } from 'axios';

import { selectAccount } from '../../redux/reducers/accountSlice';
import { setEventID } from '../../redux/reducers/createEventSlice';
import { MASKING_PHONE_NO, MAX_LENGTH_CHAR, REGEX_EMAIL } from '../../constants';
import { PostEventDetail } from '../../services/EventDetail';

import ModalSave from '../ModalSave';
import ModalSuccess from '../ModalSuccess';
import DatepickerModal from '../DatepickerModal';
import { Controller, useForm } from 'react-hook-form';
import QuestionAnswered from '../QuestionAnswered';
import ListAttachment from '../ListAttachment';

const defaultValues = {
    functionName: '',
    activityName: '',
    activityDesc: '',
    activityType: "",
    eventOrganizer: "",
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

const contactsDataGenerator = (values: any) => {
    return [
        {
            name: values.namaPJ,
            email: values.emailPJ,
            phoneNumber: values.noTelpPJ,
            contactType: "Penanggung Jawab Kegiatan"
        },
        {
            name: values.namaKoordinator,
            email: values.emailKoordinator,
            phoneNumber: values.noTelpKoordinator,
            contactType: "Koordinator Acara"
        },
        {
            name: values.namaPIC,
            email: values.emailPIC,
            phoneNumber: values.noTelpPIC,
            contactType: "PIC Event Organizer"
        }
    ]
}

const EventDetailTab = ({ setIndex, isDraft, setSelectedSection, noTabValid, setNoTabValid, allEvidenceList }: any) => {
    const navigation = useNavigation();
    const accountData = useSelector(selectAccount);
    const dispatch = useDispatch();
    const {
        control,
        handleSubmit,
        setValue,
        clearErrors,
        formState: { errors }
    } = useForm({
        defaultValues,
        mode: 'onBlur'
    });

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalSuccessVisible, setIsModalSuccessVisible] = useState(false);
    const [isModalVisibleStartDatepicker, setIsModalVisibleStartDatepicker] = useState(false);
    const [isModalVisibleEndDatepicker, setIsModalVisibleEndDatepicker] = useState(false);
    const [tipeKegiatan, setTipeKegiatan] = useState('');
    const [, setDescKegiatan] = useState('');
    const [EO, setEO] = useState('');
    const [countCharacters, setCountCharacters] = useState(MAX_LENGTH_CHAR);
    const [singleStartDate, setSingleStartDate] = useState(null) as any;
    const [singleEndDate, setSingleEndDate] = useState(null) as any;
    const [, setIsValidForm] = useState(false);

    const email = accountData.account.actualemail;

    const handleClose = () => {
        navigation.navigate(isDraft ? 'EventDraft' as never : 'Event' as never);
    }

    useEffect(() => {
        if (errors) {
            setIsValidForm(false);
        } else {
            setIsValidForm(true);
        }
    }, [errors]);

    useEffect(() => {
        setValue('activityStartDate', singleStartDate?.formattedDate);
        setValue('activityEndDate', singleEndDate?.formattedDate);
        if (singleStartDate) {
            clearErrors('activityStartDate');
        }

        if (singleEndDate) {
            clearErrors('activityEndDate');
        }
    }, [singleStartDate, singleEndDate]);

    useEffect(() => {
        if (tipeKegiatan) {
            clearErrors('activityType');
        }
    }, [tipeKegiatan]);

    useEffect(() => {
        if (EO) {
            clearErrors('eventOrganizer');
        }
    }, [EO]);

    const handleNext = (values: any) => {
        const obj = {
            functionName: values.functionName,
            activityName: values.activityName,
            activityDesc: values.activityDesc,
            activityType: values.activityType,
            eventOrganizer: values.eventOrganizer,
            activityStartDate: singleStartDate?.actualDate,
            activityEndDate: singleEndDate?.actualDate,
            contacts: contactsDataGenerator(values),
            createdBy: email
        }

        handleOk(obj);
        console.log("🚀 ~ handleNext ~ obj:", obj);
        const validTab = [0, 1];
        setNoTabValid(validTab);
    }

    const handleOk = async (obj: any) => {
        let eventId = '';

        const response = await PostEventDetail(obj) as any;
        console.log("🚀 ~ handleOk ~ response:", response)
        if (response?.data?.status === HttpStatusCode.Ok) {
            eventId = response.logEventId;
            console.log("🚀 ~ handleOk ~ eventId:", eventId)

            // setor dulu ke redux + event id dari hit api
            dispatch(setEventID(eventId));//ga kesimpen perlu dicek

            // tampilin modal jika sukses
            setIsModalSuccessVisible(!isModalSuccessVisible);

            // next ke step selanjutnya
            // setIndex(1);
        }
    }

    const handleOkSuccess = () => {
        setIndex(1);
    }

    // ini jika draft
    const handleSave = () => {
        setIsModalVisible(!isModalVisible);
        // behaviour mirip cuman keluar modal yakin + balik ke event list
    }

    const save = () => {
        setIsModalVisible(!isModalVisible);
        // const data = getValues();
        // const obj = dataMapper(data);
        // //aksi ini hanya ada di event draft
        // //behaviour mirip dengan next, simpan data kembali
        // const response = await CreateVenue(obj) as any;
        // // console.log('response: ', response.data);
        // if (response?.data?.status === axios.HttpStatusCode.Ok) {
        //     // tampilin modal jika sukses
        //     setIsModalSuccessVisible(!isModalSuccessVisible);

        //     // keluar ke event draft list
        //     navigation.navigate('EventDraft' as never);
        // } else {
        //     // seharusnya pakai modal error
        //     setIsModalAlertVisible(!isModalAlertVisible);
        // }
    }

    const discard = () => {
        setIsModalVisible(!isModalVisible);
    }

    const handleChangeActivityDate = (tipe: string) => {
        if (tipe === 'start') {
            setIsModalVisibleStartDatepicker(!isModalVisibleStartDatepicker);
        } else if (tipe === 'end') {
            setIsModalVisibleEndDatepicker(!isModalVisibleEndDatepicker);
        }
    }

    const handleChangeDescKegiatan = (value: string) => {
        const charLength = value.length;
        setCountCharacters(MAX_LENGTH_CHAR - charLength); setDescKegiatan(value);
    }

    const toggleModalStartDatepicker = () => {
        setIsModalVisibleStartDatepicker(!isModalVisibleStartDatepicker);
    }

    const toggleModalEndDatepicker = () => {
        setIsModalVisibleEndDatepicker(!isModalVisibleEndDatepicker);
    }

    const handleSetTipeKegiatan = (value: string) => {
        setTipeKegiatan(value);
        setValue('activityType', value);
    }

    const handleSetEO = (value: string) => {
        setEO(value);
        setValue('eventOrganizer', value);
    }

    useEffect(() => {
        setSelectedSection('EventDetail');
    }, []);

    return (
        <>
            <DatepickerModal isModalVisible={isModalVisibleStartDatepicker} toggleModal={toggleModalStartDatepicker} tipe='event' setSelectedDate={setSingleStartDate} />
            <DatepickerModal isModalVisible={isModalVisibleEndDatepicker} toggleModal={toggleModalEndDatepicker} tipe='event' setSelectedDate={setSingleEndDate} />
            <ModalSave isModalVisible={isModalVisible} discard={discard} save={save} />
            <ModalSuccess isModalVisible={isModalSuccessVisible} handleOk={handleOkSuccess} message={'Data Saved Successfull'} />

            <>
                <View style={{ padding: 10 }}>
                    <Text h4 style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Event Detail</Text>
                    <Text style={{ marginBottom: 20 }}>Please fill in the required data</Text>
                    <Divider />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama Fungsi</Text>
                                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                                </View>
                                <Input
                                    placeholder='Input nama fungsi...'
                                    inputContainerStyle={{ ...styles.searchField, borderColor: errors.functionName ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.functionName ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{errors.functionName.message}</Text> : null}
                            </>
                        )}
                        name="functionName"
                    />

                    <Divider />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama Kegiatan</Text>
                                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                                </View>
                                <Input
                                    placeholder="Input nama kegiatan..."
                                    inputContainerStyle={{ ...styles.searchField, borderColor: errors.activityName ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.activityName ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{errors.activityName.message}</Text> : null}
                            </>
                        )}
                        name="activityName"
                    />

                    <Divider />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Tanggal Kegiatan</Text>
                                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                                </View>
                                <Input placeholder='Tanggal mulai kegiatan..'
                                    inputContainerStyle={{ ...styles.searchField, borderColor: errors.activityStartDate ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    rightIcon={<Icon name="calendar" type='material-community' size={20} onPress={() => handleChangeActivityDate('start')} />}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.activityStartDate ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 20 }}>{errors.activityStartDate.message}</Text> : null}
                            </>
                        )}
                        name="activityStartDate"
                    />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <Input
                                    placeholder='Tanggal akhir kegiatan..'
                                    inputContainerStyle={{ ...styles.searchField, borderColor: errors.activityEndDate ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0, marginTop: -20 }}
                                    rightIcon={<Icon name="calendar" type='material-community' size={20} onPress={() => handleChangeActivityDate('end')} />}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.activityEndDate ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 20 }}>{errors.activityEndDate.message}</Text> : null}
                            </>
                        )}
                        name="activityEndDate"
                    />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Tipe Kegiatan</Text>
                                    <Text style={{ color: 'red' }}>*</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    padding: 0,
                                    marginLeft: -20
                                }}>
                                    <CheckBox
                                        checked={tipeKegiatan === 'Indoor'}
                                        onPress={() => handleSetTipeKegiatan('Indoor')}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        title='Indoor'
                                    />
                                    <CheckBox
                                        checked={tipeKegiatan === 'Outdoor'}
                                        onPress={() => handleSetTipeKegiatan('Outdoor')}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        title='Outdoor'
                                    />
                                </View>
                                {errors.activityType ? <Text style={{ color: 'red', marginTop: -10, marginBottom: 10 }}>{errors.activityType.message}</Text> : null}
                            </>
                        )}
                        name="activityType"
                    />

                    <Divider />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 5 }}>
                                    <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Penjelasan Kegiatan</Text>
                                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                                </View>
                                <Text>Deskripsikan kegiatan secara singkat</Text>
                                <Input
                                    multiline
                                    numberOfLines={4}
                                    maxLength={MAX_LENGTH_CHAR}
                                    placeholder='Input penjelasan kegiatan..'
                                    inputContainerStyle={{ ...styles.searchField, borderColor: errors.activityDesc ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    onBlur={onBlur}
                                    onChangeText={(value) => {
                                        onChange(value);
                                        handleChangeDescKegiatan(value);
                                    }}
                                    value={value}
                                />
                                {errors.activityDesc ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 20 }}>{errors.activityDesc.message}</Text> : null}
                                <Text style={{ marginTop: -15 }}>{countCharacters} characters left</Text>
                            </>
                        )}
                        name="activityDesc"
                    />

                    <Divider style={{ marginVertical: 20 }} />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Event Organizer</Text>
                                    <Text style={{ color: 'red' }}>*</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    padding: 0,
                                    marginLeft: -20,
                                    marginBottom: -10
                                }}>
                                    <CheckBox
                                        checked={EO === 'Internal'}
                                        onPress={() => handleSetEO('Internal')}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        title='Internal fungsi'
                                    />
                                    <CheckBox
                                        checked={EO === 'External'}
                                        onPress={() => handleSetEO('External')}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        title='External fungsi'
                                    />
                                </View>
                                {errors.eventOrganizer ? <Text style={{ color: 'red' }}>{errors.eventOrganizer.message}</Text> : null}
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
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Nama</Text>
                                    <Text style={{ color: 'red' }}>*</Text>
                                </View>
                                <Input
                                    placeholder='Input nama...'
                                    inputContainerStyle={{ ...styles.searchField, borderColor: errors.namaPJ ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.namaPJ ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{errors.namaPJ.message}</Text> : null}
                            </>
                        )}
                        name="namaPJ"
                    />

                    <Divider style={{ marginBottom: 20 }} />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            },
                            pattern: {
                                value: REGEX_EMAIL,
                                message: 'Invalid email'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Email</Text>
                                    <Text style={{ color: 'red' }}>*</Text>
                                </View>
                                <Input
                                    placeholder='Alamat email...'
                                    inputContainerStyle={{ ...styles.searchField, borderColor: errors.emailPJ ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.emailPJ ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{errors.emailPJ.message}</Text> : null}
                            </>
                        )}
                        name="emailPJ"
                    />

                    <Divider style={{ marginBottom: 20 }} />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold' }}>No.Telp / Hp</Text>
                                    <Text style={{ color: 'red' }}>*</Text>
                                </View>
                                <MaskInput
                                    placeholder='No.Telp / HP'
                                    style={{ ...styles.searchField, borderColor: errors.noTelpPJ ? 'red' : '#D0D5DD' }}
                                    mask={MASKING_PHONE_NO}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.noTelpPJ ? <Text style={{ color: 'red', marginTop: 10 }}>{errors.noTelpPJ.message}</Text> : null}
                            </>
                        )}
                        name="noTelpPJ"
                    />

                    <Divider style={{ marginVertical: 20 }} />

                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Koordinator Acara</Text>
                    <Divider style={{ marginVertical: 20 }} />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Nama</Text>
                                    <Text style={{ color: 'red' }}>*</Text>
                                </View>
                                <Input
                                    placeholder='Input nama...'
                                    inputContainerStyle={{ ...styles.searchField, borderColor: errors.namaKoordinator ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.namaKoordinator ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{errors.namaKoordinator.message}</Text> : null}
                            </>
                        )}
                        name="namaKoordinator"
                    />

                    <Divider style={{ marginBottom: 20 }} />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            },
                            pattern: {
                                value: REGEX_EMAIL,
                                message: 'Invalid email'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Email</Text>
                                    <Text style={{ color: 'red' }}>*</Text>
                                </View>
                                <Input
                                    placeholder='Alamat email...'
                                    inputContainerStyle={{ ...styles.searchField, borderColor: errors.emailKoordinator ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.emailKoordinator ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{errors.emailKoordinator.message}</Text> : null}
                            </>
                        )}
                        name="emailKoordinator"
                    />

                    <Divider style={{ marginBottom: 20 }} />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold' }}>No.Telp / HP</Text>
                                    <Text style={{ color: 'red' }}>*</Text>
                                </View>
                                <MaskInput
                                    placeholder='No.Telp / HP'
                                    style={{ ...styles.searchField, borderColor: errors.noTelpKoordinator ? 'red' : '#D0D5DD' }}
                                    mask={MASKING_PHONE_NO}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.noTelpKoordinator ? <Text style={{ color: 'red', marginTop: 10 }}>{errors.noTelpKoordinator.message}</Text> : null}
                            </>
                        )}
                        name="noTelpKoordinator"
                    />

                    <Divider style={{ marginVertical: 20 }} />

                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>PIC Event Organizer</Text>
                    <Text style={{ fontSize: 15 }}>Lengkapi apabila menggunakan external EO</Text>
                    <Divider style={{ marginVertical: 20 }} />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Nama</Text>
                                    <Text style={{ color: 'red' }}>*</Text>
                                </View>
                                <Input
                                    placeholder='Input nama...'
                                    inputContainerStyle={{ ...styles.searchField, borderColor: errors.namaPIC ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.namaPIC
                                    ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{errors.namaPIC.message}</Text> : null}
                            </>
                        )}
                        name="namaPIC"
                    />

                    <Divider style={{ marginBottom: 20 }} />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            },
                            pattern: {
                                value: REGEX_EMAIL,
                                message: 'Invalid email'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Email</Text>
                                    <Text style={{ color: 'red' }}>*</Text>
                                </View>
                                <Input
                                    placeholder='Alamat email...'
                                    inputContainerStyle={{ ...styles.searchField, borderColor: errors.emailPIC ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.emailPIC ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{errors.emailPIC.message}</Text> : null}
                            </>
                        )}
                        name="emailPIC"
                    />

                    <Divider style={{ marginBottom: 20 }} />

                    <Controller
                        control={control}
                        rules={{
                            required:
                            {
                                value: true,
                                message: 'This is required.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold' }}>No.Telp / Hp</Text>
                                    <Text style={{ color: 'red' }}>*</Text>
                                </View>
                                <MaskInput
                                    placeholder='No.Telp / HP'
                                    style={{ ...styles.searchField, borderColor: errors.noTelpPIC ? 'red' : '#D0D5DD' }}
                                    mask={MASKING_PHONE_NO}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.noTelpPIC ? <Text style={{ color: 'red', marginTop: 10 }}>{errors.noTelpPIC.message}</Text> : null}
                            </>
                        )}
                        name="noTelpPIC"
                    />

                    <Divider style={{ marginTop: 30, marginBottom: -20 }} />
                </View>

                <QuestionAnswered />
                <ListAttachment allEvidenceList={allEvidenceList} />

                <View style={styles.buttonContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Button type='outline' buttonStyle={styles.buttonClose} titleStyle={{ color: '#000' }} onPress={handleClose}>Close</Button>
                        {isDraft && <Button type='outline' buttonStyle={styles.buttonSave} titleStyle={{ color: '#000' }} onPress={handleSave}>Save</Button>}
                    </View>
                    <Button buttonStyle={styles.buttonNext} onPress={handleSubmit(handleNext)}>Next</Button>
                </View>
            </>

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
    buttonClose: { width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 0,
        marginTop: 15, paddingHorizontal: 10
    },
    buttonNext: { width: 80, borderRadius: 10, backgroundColor: '#0D5B95' },
    buttonSave: { width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' },
    buttonTitle: {
        color: 'white',
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    card: {
        borderRadius: 20,
        marginBottom: 40,
        padding: 0,
        paddingBottom: 15
    },
    container: {
        marginTop: 60,
        backgroundColor: '#408EC9',
    },
    image: {
        width: 40,
        height: 40,
        margin: 10,
        borderRadius: 10,
        marginBottom: 20
    },
    searchField: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 15,
        borderStyle: 'solid',
        borderWidth: 1,
        paddingHorizontal: 10
    }
});

export default EventDetailTab;
