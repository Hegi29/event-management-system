import { useState } from 'react';
import { StyleSheet, View, } from 'react-native';

import { Divider, Input, Text, Button, Image } from '@rneui/themed';
import Modal from 'react-native-modal';

import { CheckedImage, ExcelFileImage, ImageFileImage, WarningFileImage } from '../../assets/images';
import getLengthProgress from '../../utils/Progress';

import DividerTextMiddle from '../DividerTextMiddle';
import SelectSection from '../SelectSection';
import SelectStatus from '../SelectStatus';
import ImageUpload from '../ImageUpload';
import SelectVenue from '../SelectVenue';

type VenueDetailTabProps = { index: number, setIndex: any, isDraft?: boolean, dataVenue: any, tipe: string };

const VenueDetailTab = ({ setIndex, isDraft, dataVenue, tipe }: VenueDetailTabProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isAlreadySelectVenue, setIsAlreadySelectVenue] = useState(false);
    const [currentVenue, setCurrentVenue] = useState(null) as any;

    const handleNext = () => {
        setIndex(tipe !== 'venue' ? 2 : 1);
    }

    const handlePrev = () => {
        setIndex(0);
    }

    const handleSave = () => {
        setIsModalVisible(!isModalVisible);
    }

    const save = () => {
        setIsModalVisible(!isModalVisible);
    }

    const discard = () => {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <View>
            <Modal isVisible={isModalVisible} style={{ height: 50 }}>
                <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginBottom: 10 }}>Unsaved changes</Text>
                    <Text>Do you want to save or discard changes?</Text>
                    <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Button buttonStyle={{ borderRadius: 10 }} type="outline" onPress={discard}>Discard</Button>
                        <Button buttonStyle={{ borderRadius: 10, backgroundColor: '#0D5B95' }} containerStyle={{ marginLeft: 5 }} onPress={save}>Save changes</Button>
                    </View>
                </View>
            </Modal>
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
                <SelectVenue dataVenue={dataVenue} setIsAlreadySelectVenue={setIsAlreadySelectVenue} setCurrentVenue={setCurrentVenue} />
                {!isAlreadySelectVenue && <DividerTextMiddle title='Or' />}
                {!isAlreadySelectVenue && <Text style={{ fontWeight: 'bold', marginVertical: 20 }}>Add New Venue</Text>}
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama Venue</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input nama venue...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.venueName} disabled={currentVenue?.venueName} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Alamat Venue</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input alamat venue..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0, marginBottom: -20 }} value={currentVenue?.venueAddress} disabled={currentVenue?.venueAddress} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                <View style={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: -20
                }}>
                    <View style={{ width: '49%' }}>
                        <Input placeholder='Input provinsi..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.province} disabled={currentVenue?.province} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                    </View>
                    <View style={{ width: '49%' }}>
                        <Input placeholder='Input kecamatan..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.subDistric} disabled={currentVenue?.subDistric} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                    </View>
                </View>

                <View style={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{ width: '49%' }}>
                        <Input placeholder='Input kelurahan..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.urbanVillage} disabled={currentVenue?.urbanVillage} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                    </View>
                    <View style={{ width: '49%' }}>
                        <Input placeholder='Input RT/RW..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.neighbourhood} disabled={currentVenue?.neighbourhood} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                    </View>
                </View>

                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No Telepon</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input no telepon..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.phoneNumber} disabled={currentVenue?.phoneNumber} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input email...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.email} disabled={currentVenue?.email} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Images</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>

                <ImageUpload />

                <Divider />
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>List Kontak Darurat</Text>
                <Divider />
                <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 17 }}>Rumah Sakit Terdekat</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input nama...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.emergencyContactLists[0].name} disabled={currentVenue?.emergencyContactLists[0].name} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Alamat email...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.emergencyContactLists[0].email} disabled={currentVenue?.emergencyContactLists[0].email} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No.Telp / HP</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='No.Telp / HP...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.emergencyContactLists[0].phoneNumber} disabled={currentVenue?.emergencyContactLists[0].phoneNumber} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                <Divider />
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>Kantor Polisi Terdekat</Text>
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input Nama...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.emergencyContactLists[0].name} disabled={currentVenue?.emergencyContactLists[1].name} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Alamat email...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.emergencyContactLists[1].email} disabled={currentVenue?.emergencyContactLists[1].email} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No.Telp / HP</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='No.Telp / HP' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.emergencyContactLists[1].phoneNumber} disabled={currentVenue?.emergencyContactLists[1].phoneNumber} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                <Divider />
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>Pemadam Kebakaran Terdekat</Text>
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input nama...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.emergencyContactLists[2].name} disabled={currentVenue?.emergencyContactLists[2].name} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Alamat email...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.emergencyContactLists[2].email} disabled={currentVenue?.emergencyContactLists[2].email} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No.Telp / HP</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='No.Telp / HP' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} value={currentVenue?.emergencyContactLists[2].phoneNumber} disabled={currentVenue?.emergencyContactLists[2].phoneNumber} disabledInputStyle={{ backgroundColor: '#D0D5DD' }} />
                <Divider />
            </View>

            <View style={{ padding: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>Question Answered</Text>
                    <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20, color: '#F79009' }}>95/105</Text>
                </View>
                <Divider />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Health Section</Text>
                        <Text style={{ marginTop: 5 }}>30/40 question answered</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <View style={{ backgroundColor: "#1072BA", width: getLengthProgress(30, 40) as any }} />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Security Section</Text>
                        <Text style={{ marginTop: 5 }}>10/20 question answered</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <View style={{ backgroundColor: "#1072BA", width: getLengthProgress(10, 20) as any }} />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Safety Section</Text>
                        <Text style={{ marginTop: 5 }}>25/30 question answered</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <View style={{ backgroundColor: "#1072BA", width: getLengthProgress(25, 30) as any }} />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Environment Section</Text>
                        <Text style={{ marginTop: 5 }}>25/25 question answered</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <View style={{ backgroundColor: "#1072BA", width: getLengthProgress(25, 25) as any }} />
                    </View>
                </View>
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>Attachment</Text>
                <Divider />
                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Status</Text>
                <SelectStatus />
                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Section</Text>
                <SelectSection />
            </View>

            <View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image source={ExcelFileImage} style={styles.image} />
                        <Text style={{ marginTop: 22, fontWeight: 'bold' }}>A1 - Daftar peserta</Text>
                    </View>
                    <Image source={CheckedImage} style={styles.imageStatus} />
                </View>
                <Divider style={{ marginHorizontal: 10 }} />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image source={ImageFileImage} style={styles.image} />
                        <Text style={{ marginTop: 22, fontWeight: 'bold' }}>A2 - Foto area akses</Text>
                    </View>
                    <Image source={WarningFileImage} style={styles.imageStatus} />
                </View>
                <Divider style={{ marginHorizontal: 10 }} />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image source={ExcelFileImage} style={styles.image} />
                        <Text style={{ marginTop: 22, fontWeight: 'bold' }}>A1 - Daftar peserta</Text>
                    </View>
                    <Image source={CheckedImage} style={styles.imageStatus} />
                </View>
                <Divider style={{ marginHorizontal: 10 }} />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image source={ImageFileImage} style={styles.image} />
                        <Text style={{ marginTop: 22, fontWeight: 'bold' }}>A2 - Foto area akses</Text>
                    </View>
                    <Image source={WarningFileImage} style={styles.imageStatus} />
                </View>
                <Divider style={{ marginHorizontal: 10 }} />
            </View>

            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: 0,
                marginTop: 40
            }}>
                <Button type='outline' buttonStyle={{ width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' }} titleStyle={{ color: '#000' }}>Close</Button>
                {isDraft && <Button type='outline' buttonStyle={{ width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' }} titleStyle={{ color: '#000' }} onPress={handleSave}>Save</Button>}
                {tipe !== 'venue' && <Button type='outline' buttonStyle={{ width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' }} titleStyle={{ color: '#000' }} onPress={handlePrev}>Prev</Button>}
                <Button buttonStyle={{ width: 80, borderRadius: 10, backgroundColor: '#0D5B95' }} onPress={handleNext}>Next</Button>
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
    buttonContainer: {
        marginTop: 20
    },
    buttonTitle: {
        color: 'white',
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    progressBar: {
        width: '30%',
        height: 15,
        backgroundColor: '#EAECF0',
        borderRadius: 4,
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 5
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
