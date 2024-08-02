import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Modal from "react-native-modal";
import { Button, Card, CheckBox, Chip, Divider, Icon, ListItem, Text } from "@rneui/themed";
import { Image } from "@rneui/base";

import { QuestionFileImage } from "../../assets/images";

const ChipStatus = ({ status }: any) => {
    return (
        <Chip
            title={status}
            type='outline'
            containerStyle={{ paddingHorizontal: 0, backgroundColor: '#FEDF89' }}
            titleStyle={{ color: '#B54708', fontSize: 18, paddingVertical: 7, paddingLeft: 5, paddingRight: 0 }}
            buttonStyle={styles.chipButton}
        />
    )
}

const HealthTab = ({ setIndex, isDraft, tipe }: any) => {
    const [expanded, setExpanded] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [IDCheckbox, setIDCheckbox] = useState(0);

    const handleNext = () => {
        setIndex(tipe !== "venue" ? 3 : 2);
    }

    const handlePrev = () => {
        setIndex(tipe !== 'venue' ? 1 : 0);
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

            <View style={{ paddingVertical: 10 }}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text h4 style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Health Section</Text>
                    <Text style={{ marginBottom: 20 }}>Please fill in the required data</Text>
                </View>
                <Divider />
                <Card containerStyle={{ borderRadius: 10 }}>
                    <ListItem.Accordion
                        containerStyle={{ backgroundColor: '#fff', paddingLeft: 0, marginLeft: -10, marginRight: -10 }}
                        content={
                            <>
                                <Image source={QuestionFileImage} style={styles.image} />
                                <ListItem.Content>
                                    <ListItem.Title>
                                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 17, marginLeft: 10, marginRight: 20 }}>A1</Text>
                                            <ChipStatus status={'Venue'} />
                                        </View>
                                    </ListItem.Title>
                                </ListItem.Content>
                            </>
                        }
                        isExpanded={expanded}
                        onPress={() => {
                            setExpanded(!expanded);
                        }}
                        icon={
                            <Icon
                                name='chevron-down'
                                type="material-community"
                                color='black'
                            />
                        }
                    >
                        <ListItem containerStyle={{ backgroundColor: '#fff', paddingTop: 0, marginHorizontal: -10, marginTop: 10 }}>
                            <ListItem.Content>
                                <Text>
                                    Apabila kegiatan membutuhkan aktivitas fisik berat (Misal: Outbond, Rafting, Jogging, kegiatan olahraga berat lainnya), Apakah terdapat standby ambulance dan petugas medis (dokter dan paramedis) di lokasi acara/venue?
                                    (Silahkan mengisi N/A Apabila kegiatan tidak membutuhkan aktivitas fisik)
                                </Text>
                                <Text>
                                    (Silahkan mengisi N/A Apabila kegiatan tidak membutuhkan aktivitas fisik)
                                </Text>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: -15 }}>
                                    <CheckBox
                                        checked={IDCheckbox === 0}
                                        onPress={() => setIDCheckbox(0)}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        title='Ya'
                                    />
                                    <CheckBox
                                        checked={IDCheckbox === 1}
                                        onPress={() => setIDCheckbox(1)}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        title='Tidak'
                                    />
                                </View>
                                <View style={{ marginLeft: -15 }}>
                                    <CheckBox
                                        checked={IDCheckbox == 2}
                                        onPress={() => setIDCheckbox(2)}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        title='N/A'
                                    />
                                </View>
                            </ListItem.Content>
                        </ListItem>
                    </ListItem.Accordion>
                </Card>

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    padding: 0,
                    marginTop: 40
                }}>
                    <Button type='outline' buttonStyle={{ width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' }} titleStyle={{ color: '#000' }}>Close</Button>
                    {isDraft && <Button type='outline' buttonStyle={{ width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' }} titleStyle={{ color: '#000' }} onPress={handleSave}>Save</Button>}
                    <Button type='outline' buttonStyle={{ width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' }} titleStyle={{ color: '#000' }} onPress={handlePrev}>Prev</Button>
                    <Button buttonStyle={{ width: 80, borderRadius: 10, backgroundColor: '#0D5B95' }} onPress={handleNext}>Next</Button>
                </View>
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
    chipButton: {
        backgroundColor: '#FEDF89',
        borderStyle: 'solid',
        borderColor: '#B54708',
        padding: 0,
        paddingRight: 20
    }
});

export default HealthTab;
