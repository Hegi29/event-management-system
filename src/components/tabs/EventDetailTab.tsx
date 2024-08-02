import { useState } from 'react';
import { StyleSheet, View, } from 'react-native';

import { Divider, Input, Text, CheckBox, Button, Icon } from '@rneui/themed';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

const MAX_LENGTH_CHAR = 275;

const EventDetailTab = ({ setIndex, isDraft }: any) => {
    const navigation = useNavigation();

    const [selectedIndexEvent, setIndexEvent] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [countCharacters, setCountCharacters] = useState(MAX_LENGTH_CHAR);

    const handleClose = () => {
        navigation.navigate(isDraft ? 'EventDraft' as never : 'Event' as never);
    }

    const handleNext = () => {
        setIndex(1);
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

    const toggleCalendar = () => {
        // open calendar
    }

    const handleChangeDescKegiatan = (value: string) => {
        const charLength = value.length;
        setCountCharacters(MAX_LENGTH_CHAR - charLength);
    }

    return (
        <>
            <View style={{ padding: 10 }}>
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
                <Text h4 style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Event Detail</Text>
                <Text style={{ marginBottom: 20 }}>Please fill in the required data</Text>
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama Fungsi</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input nama fungsi...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama Kegiatan</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder="Input nama kegiatan..." inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Tanggal Kegiatan</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Tanggal mulai kegiatan..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} rightIcon={<Icon name="calendar" type='material-community' size={20} onPress={toggleCalendar} />} />
                <Input placeholder='Tanggal akhir kegiatan..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0, marginTop: -20 }} rightIcon={<Icon name="calendar" type='material-community' size={20} onPress={toggleCalendar} />} />
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
                        checked={selectedIndexEvent === 0}
                        onPress={() => setIndexEvent(0)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        title='Indoor'
                    />
                    <CheckBox
                        checked={selectedIndexEvent === 1}
                        onPress={() => setIndexEvent(1)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        title='Outdoor'
                    />
                </View>
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 5 }}>
                    <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Penjelasan Kegiatan</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Text>Deskripsikan kegiatan secara singkat</Text>
                <Input multiline numberOfLines={4} placeholder='Input penjelasan kegiatan..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} onChangeText={(value) => handleChangeDescKegiatan(value)} />
                <Text style={{ marginTop: -15 }}>{countCharacters} characters left</Text>
                <Divider style={{ marginVertical: 20 }} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold' }}>Event Organizer</Text>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    // flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    padding: 0,
                    marginLeft: -20,
                    marginBottom: -10
                }}>
                    <CheckBox
                        checked={selectedIndexEvent === 0}
                        onPress={() => setIndexEvent(0)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        title='Internal fungsi'
                    />
                    <CheckBox
                        checked={selectedIndexEvent === 1}
                        onPress={() => setIndexEvent(1)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        title='External fungsi'
                    />
                </View>
                <Divider style={{ marginVertical: 20 }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>List Kontak Darurat</Text>
                <Divider style={{ marginVertical: 20 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 15 }}>Penanggung Jawab Kegiatan</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold' }}>Nama</Text>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input nama...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider style={{ marginBottom: 20 }} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold' }}>Email</Text>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Alamat email...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider style={{ marginBottom: 20 }} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold' }}>No.Telp / Hp</Text>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>
                <Input placeholder='No.Telp / Hp...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider style={{ marginBottom: 20 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Koordinator Acara</Text>
                <Divider style={{ marginVertical: 20 }} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold' }}>Nama</Text>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input nama...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider style={{ marginBottom: 20 }} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold' }}>Email</Text>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Alamat email...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider style={{ marginBottom: 20 }} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold' }}>No.Telp / HP</Text>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>
                <Input placeholder='No.Telp / HP' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider style={{ marginBottom: 20 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>PIC Event Organizer</Text>
                <Text style={{ fontSize: 15 }}>Lengkapi apabila menggunakan external EO</Text>
                <Divider style={{ marginVertical: 20 }} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold' }}>Nama</Text>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input nama...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider style={{ marginBottom: 20 }} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold' }}>Email</Text>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Alamat email...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider style={{ marginBottom: 20 }} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold' }}>No.Telp / Hp</Text>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>
                <Input placeholder='No.Telp / HP' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider style={{ marginVertical: -10 }} />
            </View>

            <View style={{ ...styles.buttonContainer, marginTop: 15, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Button type='outline' buttonStyle={{ width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' }} titleStyle={{ color: '#000' }} onPress={handleClose}>Close</Button>
                    {isDraft && <Button type='outline' buttonStyle={{ width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' }} titleStyle={{ color: '#000' }} onPress={handleSave}>Save</Button>}
                </View>
                <Button buttonStyle={{ width: 80, borderRadius: 10, backgroundColor: '#0D5B95' }} onPress={handleNext}>Next</Button>
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
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 0
    },
    image: {
        width: 40,
        height: 40,
        margin: 10,
        borderRadius: 10,
        marginBottom: 20
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

export default EventDetailTab;
