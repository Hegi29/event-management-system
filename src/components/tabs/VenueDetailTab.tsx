import { useState } from 'react';
import { StyleSheet, View, } from 'react-native';

import { Divider, Input, Text, Button } from '@rneui/themed';
import Modal from 'react-native-modal';

import DividerTextMiddle from '../DividerTextMiddle';

type VenueDetailTabProps = { index: number, setIndex: any, isDraft?: boolean, tipe: string };

const VenueDetailTab = ({ setIndex, isDraft, tipe }: VenueDetailTabProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

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
                <Input inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <DividerTextMiddle title='Or' />
                <Text style={{ fontWeight: 'bold', marginVertical: 20 }}>Add New Venue</Text>
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama Venue</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input nama venue...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Alamat Venue</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input alamat venue..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Input placeholder='Input provinsi..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Input placeholder='Input kelurahan..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Input placeholder='Input kecamatan..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Input placeholder='Input RT/RW..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No Telepon</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input no telepon..' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input email...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Images</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>List Kontak Darurat</Text>
                <Divider />
                <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 18 }}>Rumah Sakit Terdekat</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input nama...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input email...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No.Telp / HP</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input email...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>Kantor Polisi Terdekat</Text>
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input Nama...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input email...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No.Telp / HP</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input no.telp/hp' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>Pemadam Kebakaran Terdekat</Text>
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Nama</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input nama...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input email...' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>No.Telp / HP</Text>
                    <Text style={{ marginTop: 20, color: 'red' }}>*</Text>
                </View>
                <Input placeholder='Input no.telp/hp' inputContainerStyle={styles.searchField} containerStyle={{ paddingHorizontal: 0 }} />
                <Divider />
            </View>

            {/* <View>
                <Text>Attachment</Text>
                <Divider />
                <Text>Status</Text>
                <Input inputContainerStyle={styles.searchField} />
                <Text>Section</Text>
                <Input inputContainerStyle={styles.searchField} />
            </View> */}

            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: 0
            }}>
                <Button type='outline' buttonStyle={{ width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' }} titleStyle={{ color: '#000' }}>Close</Button>
                {tipe !== "venue" && <Button type='outline' buttonStyle={{ width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' }} titleStyle={{ color: '#000' }} onPress={handlePrev}>Prev</Button>}
                {isDraft && <Button buttonStyle={{ width: 80, marginRight: 5, borderRadius: 10 }} onPress={handleSave}>Save</Button>}
                <Button buttonStyle={{ width: 80, borderRadius: 10 }} onPress={handleNext}>Next</Button>
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
        width: 40,
        height: 40,
        margin: 10,
        borderRadius: 10,
        marginBottom: 20
    },
    buttonContainer: {
        marginTop: 20
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
