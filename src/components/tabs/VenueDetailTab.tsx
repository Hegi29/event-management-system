import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, } from 'react-native';

import { Divider, Input, Text, Button, Image } from '@rneui/themed';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import RNFS from 'react-native-fs';
import { Controller, useForm } from 'react-hook-form';
import MaskInput from 'react-native-mask-input';
import axios from 'axios';

//perlu dialiaskan supaya pathnya pendek
import { selectAccount } from '../../redux/reducers/accountSlice';
import { selectCreateEvent, setVenueID } from '../../redux/reducers/createEventSlice';
import { MASKING_PHONE_NO, REGEX_EMAIL } from '../../constants';
import { CreateVenue } from '../../services/VenueService';
import { ERR_MESSAGE_UPLOAD_VENUE_IMAGE } from '../../constants/message';

import DividerTextMiddle from '../DividerTextMiddle';
import ImageUpload from '../ImageUpload';
import SelectVenue from '../SelectVenue';
import ModalSave from '../ModalSave';
import ListAttachment from '../ListAttachment';
import QuestionAnswered from '../QuestionAnswered';
import ModalError from '../ModalError';
import ModalSuccess from '../ModalSuccess';
import { setIsCreateNewVenue } from '../../redux/reducers/urlParamSlice';

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


const VenueDetailTab = ({ index, dataVenue, setIndex, isDraft, tipe, setSelectedSearch, setSelectedVenueID, setSelectedSection, allEvidenceList, setNoTabValid }: any) => {
    const accountData = useSelector(selectAccount);
    const eventDetailData = useSelector(selectCreateEvent);
    console.log("🚀 ~ VenueDetailTab ~ eventDetailData:", eventDetailData)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        setValue,
        getValues,
        setError,
        clearErrors,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues,
        mode: 'onBlur'
    });

    const ref = useRef(null);
    useScrollToTop(ref);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalAlertVisible, setIsModalAlertVisible] = useState(false);
    const [isModalSuccessVisible, setIsModalSuccessVisible] = useState(false);
    const [isAlreadySelectVenue, setIsAlreadySelectVenue] = useState(false);
    const [currentVenue, setCurrentVenue] = useState(null) as any;
    const [uploadedImageVenue, setUploadedImageVenue] = useState(null) as any;
    const [errorImageVenue, setErrorImageVenue] = useState('');
    const [base64Image, setBase64Image] = useState('');

    const email = accountData.account.actualemail;
    const eventId = eventDetailData?.createEvent?.eventDetail?.eventId;

    const dataMapper = (values: any) => {
        const obj = {
            eventId,
            venueName: values.venueName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            address: {
                address: values.address,
                province: values.province,
                city: values.city,
                district: values.district,
                village: values.village,
            },
            contacts: [
                {
                    name: values.nameRS,
                    email: values.emailRS,
                    phoneNumber: values.phoneNumberRS,
                    contactType: "Rumah Sakit Terdekat"
                },
                {
                    name: values.namePolisi,
                    email: values.emailPolisi,
                    phoneNumber: values.phoneNumberPolisi,
                    contactType: "Kantor Polisi Terdekat"
                },
                {
                    name: values.nameDamkar,
                    email: values.emailDamkar,
                    phoneNumber: values.phoneNumberDamkar,
                    contactType: "Pemadam Kebakaran Terdekat"
                }
            ],
            images: [
                {
                    data: base64Image,
                    type: uploadedImageVenue[0].type
                }
            ],
            createdBy: email,
            baseUrl: ''
        }

        return obj;
    }

    const handleNext = (data: any) => {
        if (!currentVenue && !uploadedImageVenue) {
            setErrorImageVenue(ERR_MESSAGE_UPLOAD_VENUE_IMAGE);
            setIsModalAlertVisible(!isModalVisible);
            setError('images', { type: 'required', message: ERR_MESSAGE_UPLOAD_VENUE_IMAGE });
            return;
        }

        console.log("🚀 ~ handleNext ~ currentVenue:", currentVenue)

        if (!currentVenue) {
            dispatch(setIsCreateNewVenue(true));
        } else {
            dispatch(setIsCreateNewVenue(false));
            dispatch(setVenueID(currentVenue.venueId));
        }

        let obj = {};
        if (!currentVenue) {
            obj = dataMapper(data);
            // console.log("🚀 ~ handleNext ~ obj:", obj);
        }

        handleOkSuccess(currentVenue ? {} : obj);

        const validTab = [0, 1, 2];
        setNoTabValid(validTab);
    }

    const handleOkSuccess = async (obj: any) => {
        // disini tinggal HIT API dapetin event id
        let venueId = '';

        // const response = await CreateVenue(obj) as any;
        // if (response?.data?.status === axios.HttpStatusCode.Ok) {
        //     venueId = response.logVenueId;

        //     // setor dulu ke redux dari hit api
        //     dispatch(setVenueID(venueId));

        //     // tampilin modal jika sukses
        setIsModalSuccessVisible(!isModalSuccessVisible);

        //     // next ke step selanjutnya
        //     setIndex(tipe !== 'venue' ? 2 : 1);
        // }

        setIndex(tipe !== 'venue' ? 2 : 1);
    }

    const handleOkModal = () => {
        setIsModalAlertVisible(!isModalAlertVisible);
    }

    const handlePrev = () => {
        setIndex(0);
        // perlu flag menandakan perintah untuk get ulang data di event detail?
    }

    const handleSave = () => {
        setIsModalVisible(!isModalVisible);
    }

    const save = async () => {
        setIsModalVisible(!isModalVisible);
        const data = getValues();
        const obj = dataMapper(data);
        //aksi ini hanya ada di event draft
        //behaviour mirip dengan next, simpan data kembali
        const response = await CreateVenue(obj) as any;
        if (response?.data?.status === axios.HttpStatusCode.Ok) {
            // tampilin modal jika sukses
            setIsModalSuccessVisible(!isModalSuccessVisible);

            // keluar ke event draft list
            navigation.navigate('EventDraft' as never);
        } else {
            // seharusnya pakai modal error
            setIsModalAlertVisible(!isModalAlertVisible);
        }
    }

    const discard = () => {
        setIsModalVisible(!isModalVisible);
        // belum tau seperti apa behaviournya
    }

    const handleUploadFile = (value: any) => {
        if (!value) {
            setUploadedImageVenue(null);
            setBase64Image('');
            setError('images', { type: 'required', message: 'This is required.' });
            return;
        }

        const image = value.file;
        const URI = value.file[0].uri;

        setUploadedImageVenue(image);
        convertImageToBase64(URI);
    }

    const convertImageToBase64 = (URI: any) => {
        RNFS.readFile(URI, 'base64').then((res) => {
            setBase64Image(res);
            setValue('images', res);
            clearErrors('images');
        });
    }

    const extractEmergencyContactListsData = (contactType: string, key: string) => {
        const res = currentVenue.emergencyContactLists.find((x: any) => x.contactType === contactType);
        if (res) {
            return res[key];
        }

        return '';
    }

    useEffect(() => {
        if (!uploadedImageVenue) {
            setError('images', { type: 'required', message: ERR_MESSAGE_UPLOAD_VENUE_IMAGE });
        }
    }, [uploadedImageVenue]);

    useEffect(() => {
        setSelectedSection('VenueDetail');
    }, []);

    useEffect(() => {
        if (currentVenue) {
            setValue('venueName', currentVenue?.venueName);
            setValue('address', currentVenue?.venueName);
            setValue('province', currentVenue?.province);
            setValue('city', currentVenue?.subDistric);
            setValue('district', currentVenue?.urbanVillage);
            setValue('village', currentVenue?.neighbourhood);
            setValue('phoneNumber', currentVenue?.phoneNumber);
            setValue('email', currentVenue?.email);
            setValue('images', currentVenue?.images[0].data);
            setValue('nameRS', extractEmergencyContactListsData("Rumah Sakit Terdekat", "name"));
            setValue('emailRS', extractEmergencyContactListsData("Rumah Sakit Terdekat", "email"));
            setValue('phoneNumberRS', extractEmergencyContactListsData("Rumah Sakit Terdekat", "phoneNumber"));
            setValue('namePolisi', extractEmergencyContactListsData("Kantor Polisi Terdekat", "name"));
            setValue('emailPolisi', extractEmergencyContactListsData("Kantor Polisi Terdekat", "email"));
            setValue('phoneNumberPolisi', extractEmergencyContactListsData("Kantor Polisi Terdekat", "phoneNumber"));
            setValue('nameDamkar', extractEmergencyContactListsData("Pemadam Kebakaran Terdekat", "name"));
            setValue('emailDamkar', extractEmergencyContactListsData("Pemadam Kebakaran Terdekat", "email"));
            setValue('phoneNumberDamkar', extractEmergencyContactListsData("Pemadam Kebakaran Terdekat", "phoneNumber"));
        } else {
            reset();
        }
    }, [currentVenue]);

    return (
        <View ref={ref}>
            <ModalError isModalVisible={isModalAlertVisible} handleOk={handleOkModal} message={errorImageVenue} statusCode={400} />
            <ModalSave isModalVisible={isModalVisible} discard={discard} save={save} />
            <ModalSuccess isModalVisible={isModalSuccessVisible} handleOk={handleOkModal} message={'Data Saved Successfull'} />
            <View style={{ padding: 10 }}>
                <Text h4 style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Venue Detail</Text>
                <Text style={{ marginBottom: 20 }}>Please fill in the required data</Text>
                <Divider />
                <Text style={{ fontWeight: 'bold', marginVertical: 20 }}>Select Registered Venue</Text>
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Select Venue</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <SelectVenue dataVenue={dataVenue} setIsAlreadySelectVenue={setIsAlreadySelectVenue} setCurrentVenue={setCurrentVenue} setSelectedSearch={setSelectedSearch} setSelectedVenueID={setSelectedVenueID} />
                {!isAlreadySelectVenue && <DividerTextMiddle title='Or' />}
                {!isAlreadySelectVenue && <Text style={{ fontWeight: 'bold', marginVertical: 20 }}>Add New Venue</Text>}
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama Venue</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>

                <Controller
                    control={control}
                    defaultValue={currentVenue?.venueName}
                    rules={{ required: { value: true, message: 'This is required' } }}
                    render={({ field: { onChange, onBlur, value } }: any) => (
                        <Input
                            placeholder='Input nama venue...'
                            inputContainerStyle={{ ...styles.searchField, backgroundColor: currentVenue?.venueName ? '#F9FAFB' : '#fff', borderColor: errors.venueName ? 'red' : '#D0D5DD' }}
                            containerStyle={{ paddingHorizontal: 0 }}
                            disabled={currentVenue?.venueName}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="venueName"
                />
                {errors.venueName ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 20 }}>{errors.venueName.message}</Text> : null}

                <Divider />

                <Controller
                    control={control}
                    rules={{ required: { value: true, message: 'This is required' } }}
                    render={({ field: { onChange, onBlur, value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Alamat Venue</Text>
                                <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                            </View>
                            <Input
                                placeholder='Input alamat venue..'
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: currentVenue?.venueAddress ? '#F9FAFB' : '#fff', borderColor: errors.address ? 'red' : '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0, marginBottom: -20 }}
                                disabled={currentVenue?.venueAddress}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </>
                    )}
                    name="address"
                />
                {errors.address ? <Text style={{ color: 'red', marginTop: 0 }}>{errors.address.message}</Text> : null}

                <View style={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: -20
                }}>
                    <Controller
                        control={control}
                        rules={{ required: { value: true, message: 'This is required' } }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <View style={{ width: '49%' }}>
                                <Input
                                    placeholder='Input provinsi..'
                                    inputContainerStyle={{ ...styles.searchField, backgroundColor: currentVenue?.province ? '#F9FAFB' : '#fff', borderColor: errors.province ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    disabled={currentVenue?.province}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.province ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 20 }}>This is required.</Text> : null}
                            </View>
                        )}
                        name="province"
                    />

                    <Controller
                        control={control}
                        rules={{ required: { value: true, message: 'This is required' } }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <View style={{ width: '49%' }}>
                                <Input
                                    placeholder='Input kecamatan..'
                                    inputContainerStyle={{ ...styles.searchField, backgroundColor: currentVenue?.subDistric ? '#F9FAFB' : '#fff', borderColor: errors.city ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    disabled={currentVenue?.subDistric}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.city ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 20 }}>This is required.</Text> : null}
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
                        rules={{ required: { value: true, message: 'This is required' } }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <View style={{ width: '49%' }}>
                                <Input
                                    placeholder='Input kelurahan..'
                                    inputContainerStyle={{ ...styles.searchField, backgroundColor: currentVenue?.urbanVillage ? '#F9FAFB' : '#fff', borderColor: errors.district ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    disabled={currentVenue?.urbanVillage}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.district ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>This is required.</Text> : null}
                            </View>
                        )}
                        name="district"
                    />

                    <Controller
                        control={control}
                        rules={{ required: { value: true, message: 'This is required' } }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <View style={{ width: '49%' }}>
                                <Input
                                    placeholder='Input RT/RW..'
                                    inputContainerStyle={{ ...styles.searchField, backgroundColor: currentVenue?.neighbourhood ? '#F9FAFB' : '#fff', borderColor: errors.village ? 'red' : '#D0D5DD' }}
                                    containerStyle={{ paddingHorizontal: 0 }}
                                    disabled={currentVenue?.neighbourhood}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.village ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>This is required.</Text> : null}
                            </View>
                        )}
                        name="village"
                    />

                </View>
                <Divider />

                <Controller
                    control={control}
                    rules={{ required: { value: true, message: 'This is required' } }}
                    render={({ field: { onChange, onBlur, value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No Telepon</Text>
                                <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                            </View>
                            <MaskInput
                                placeholder='Input no telepon..'
                                editable={!currentVenue}
                                style={{ ...styles.searchField, marginBottom: 20, backgroundColor: currentVenue?.phoneNumber ? '#F9FAFB' : '#fff', borderColor: errors.phoneNumber ? 'red' : '#D0D5DD' }}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                mask={MASKING_PHONE_NO}
                            />
                            {errors.phoneNumber ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>This is required.</Text> : null}
                        </>
                    )}
                    name="phoneNumber"
                />

                <Divider />

                <Controller
                    control={control}
                    rules={{
                        required: { value: true, message: 'Required' },
                        pattern: { value: REGEX_EMAIL, message: 'Email invalid' }
                    }}
                    render={({ field: { onChange, onBlur, value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                                <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                            </View>
                            <Input
                                placeholder='Input email...'
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: currentVenue?.email ? '#F9FAFB' : '#fff', borderColor: errors.email ? 'red' : '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled={currentVenue?.email}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            {errors.email ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{errors.email.message}</Text> : null}
                        </>
                    )}
                    name="email"
                />

                <Divider />
                {!currentVenue &&
                    <Controller
                        control={control}
                        rules={{ required: { value: true, message: ERR_MESSAGE_UPLOAD_VENUE_IMAGE } }}
                        render={({ field: { onChange, onBlur, value } }: any) => (
                            <>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Images</Text>
                                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                                </View>
                                <ImageUpload tipe='venue image' handleUploadFile={handleUploadFile} />
                                {errors.images && <Text style={{ color: 'red', marginTop: -10, marginBottom: 10 }}>{errors.images.message}</Text>}
                            </>
                        )}
                        name="images"
                    />
                }
                <Divider />
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>List Kontak Darurat</Text>
                <Divider />
                <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 17 }}>Rumah Sakit Terdekat</Text>

                <Controller
                    control={control}
                    rules={{ required: { value: true, message: 'This is required' } }}
                    render={({ field: { onChange, onBlur, value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama</Text>
                                <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                            </View>
                            <Input
                                placeholder='Input nama...'
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: currentVenue?.emergencyContactLists[0].name ? '#F9FAFB' : '#fff', borderColor: errors.nameRS ? 'red' : '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled={currentVenue?.emergencyContactLists[0].name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            {errors.nameRS ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>This is required.</Text> : null}
                        </>
                    )}
                    name="nameRS"
                />

                <Divider />

                <Controller
                    control={control}
                    rules={{
                        required: { value: true, message: 'Required' },
                        pattern: { value: REGEX_EMAIL, message: 'Email invalid' }
                    }}
                    render={({ field: { onChange, onBlur, value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                                <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                            </View>
                            <Input
                                placeholder='Alamat email...'
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: currentVenue?.emergencyContactLists[0].email ? '#F9FAFB' : '#fff', borderColor: errors.emailRS ? 'red' : '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled={currentVenue?.emergencyContactLists[0].email}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            {errors.emailRS ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{errors.emailRS.message}</Text> : null}
                        </>
                    )}
                    name="emailRS"
                />

                <Divider />

                <Controller
                    control={control}
                    rules={{ required: { value: true, message: 'This is required' } }}
                    render={({ field: { onChange, onBlur, value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No.Telp / HP</Text>
                                <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                            </View>
                            <MaskInput
                                placeholder='No.Telp / HP...'
                                editable={!currentVenue}
                                style={{ ...styles.searchField, marginBottom: 20, backgroundColor: currentVenue?.emergencyContactLists[0].phoneNumber ? '#F9FAFB' : '#fff', borderColor: errors.phoneNumberRS ? 'red' : '#D0D5DD' }}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                mask={MASKING_PHONE_NO}
                            />
                            {errors.phoneNumberRS ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>This is required.</Text> : null}
                        </>
                    )}
                    name="phoneNumberRS"
                />

                <Divider />
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>Kantor Polisi Terdekat</Text>
                <Divider />

                <Controller
                    control={control}
                    rules={{ required: { value: true, message: 'This is required' } }}
                    render={({ field: { onChange, onBlur, value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama</Text>
                                <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                            </View>
                            <Input
                                placeholder='Input Nama...'
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: currentVenue?.emergencyContactLists[1].name ? '#F9FAFB' : '#fff', borderColor: errors.namePolisi ? 'red' : '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled={currentVenue?.emergencyContactLists[1].name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            {errors.namePolisi ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>This is required.</Text> : null}
                        </>
                    )}
                    name="namePolisi"
                />

                <Divider />

                <Controller
                    control={control}
                    rules={{
                        required: { value: true, message: 'Required' },
                        pattern: { value: REGEX_EMAIL, message: 'Email invalid' }
                    }}
                    render={({ field: { onChange, onBlur, value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                                <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                            </View>
                            <Input
                                placeholder='Alamat email...'
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: currentVenue?.emergencyContactLists[1].email ? '#F9FAFB' : '#fff', borderColor: errors.emailPolisi ? 'red' : '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled={currentVenue?.emergencyContactLists[1].email}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            {errors.emailPolisi ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{errors.emailPolisi.message}</Text> : null}
                        </>
                    )}
                    name="emailPolisi"
                />

                <Divider />

                <Controller
                    control={control}
                    rules={{ required: { value: true, message: 'This is required' } }}
                    render={({ field: { onChange, onBlur, value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No.Telp / HP</Text>
                                <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                            </View>
                            <MaskInput
                                placeholder='No.Telp / HP'
                                editable={!currentVenue}
                                style={{ ...styles.searchField, marginBottom: 20, backgroundColor: currentVenue?.emergencyContactLists[1].phoneNumber ? '#F9FAFB' : '#fff', borderColor: errors.phoneNumberPolisi ? 'red' : '#D0D5DD' }}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                mask={MASKING_PHONE_NO}
                            />
                            {errors.phoneNumberPolisi ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>This is required.</Text> : null}
                        </>
                    )}
                    name="phoneNumberPolisi"
                />

                <Divider />
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>Pemadam Kebakaran Terdekat</Text>
                <Divider />

                <Controller
                    control={control}
                    rules={{ required: { value: true, message: 'This is required' } }}
                    render={({ field: { onChange, onBlur, value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama</Text>
                                <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                            </View>
                            <Input
                                placeholder='Input nama...'
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: currentVenue?.emergencyContactLists[2].name ? '#F9FAFB' : '#fff', borderColor: errors.nameDamkar ? 'red' : '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled={currentVenue?.emergencyContactLists[2].name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            {errors.nameDamkar ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>This is required.</Text> : null}
                        </>
                    )}
                    name="nameDamkar"
                />

                <Divider />

                <Controller
                    control={control}
                    rules={{
                        required: { value: true, message: 'Required' },
                        pattern: { value: REGEX_EMAIL, message: 'Email invalid' }
                    }}
                    render={({ field: { onChange, onBlur, value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                                <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                            </View>
                            <Input
                                placeholder='Alamat email...'
                                inputContainerStyle={{ ...styles.searchField, backgroundColor: currentVenue?.emergencyContactLists[2].email ? '#F9FAFB' : '#fff', borderColor: errors.emailDamkar ? 'red' : '#D0D5DD' }}
                                containerStyle={{ paddingHorizontal: 0 }}
                                disabled={currentVenue?.emergencyContactLists[2].email}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            {errors.emailDamkar ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{errors.emailDamkar.message}</Text> : null}
                        </>
                    )}
                    name="emailDamkar"
                />

                <Divider />

                <Controller
                    control={control}
                    rules={{ required: { value: true, message: 'This is required' } }}
                    render={({ field: { onChange, onBlur, value } }: any) => (
                        <>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No.Telp / HP</Text>
                                <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                            </View>
                            <MaskInput
                                placeholder='No.Telp / HP'
                                editable={!currentVenue}
                                style={{ ...styles.searchField, marginBottom: 20, backgroundColor: currentVenue?.emergencyContactLists[2].phoneNumber ? '#F9FAFB' : '#fff', borderColor: errors.phoneNumberDamkar ? 'red' : '#D0D5DD' }}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                mask={MASKING_PHONE_NO}
                            />
                            {errors.phoneNumberDamkar ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>This is required.</Text> : null}
                        </>
                    )}
                    name="phoneNumberDamkar"
                />

                <Divider />
            </View>

            <QuestionAnswered />
            <ListAttachment allEvidenceList={allEvidenceList} />

            <View style={styles.buttonActionContainer}>
                <Button type='outline' buttonStyle={styles.buttonClose} titleStyle={{ color: '#000' }}>Close</Button>
                {isDraft && <Button type='outline' buttonStyle={styles.buttonSave} titleStyle={{ color: '#000' }} onPress={handleSave}>Save</Button>}
                {tipe !== 'venue' && <Button type='outline' buttonStyle={styles.buttonPrev} titleStyle={{ color: '#000' }} onPress={handlePrev}>Prev</Button>}
                <Button buttonStyle={styles.buttonNext} onPress={handleSubmit(handleNext)}>Next</Button>
            </View>
        </View>
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
        width: 35,
        height: 40,
        margin: 10
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
