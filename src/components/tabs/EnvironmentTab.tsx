import { useState } from "react";
import { View } from "react-native"

import Modal from "react-native-modal";
import { Button, Card, CheckBox, Divider, Icon, ListItem, Text } from "@rneui/themed";

const EnvironmentTab = ({ setIndex, isDraft, tipe }: any) => {
    const [expanded, setExpanded] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlePrev = () => {
        setIndex(tipe !== 'venue' ? 4 : 3);
    }

    const handleSubmit = () => {

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
            <Text h4 style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Environment Section</Text>
            <Text style={{ marginBottom: 20 }}>Please fill in the required data</Text>
            <Divider />
            <Card containerStyle={{ borderRadius: 10 }}>
                <ListItem.Accordion
                    style={{ paddingLeft: 0 }}
                    containerStyle={{ backgroundColor: '#fff', paddingLeft: 0 }}
                    content={
                        <Text>A1</Text>
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
                    <ListItem containerStyle={{ backgroundColor: '#fff', paddingTop: 0 }}>
                        <ListItem.Content>
                            <Text>
                                Apabila kegiatan membutuhkan aktivitas fisik berat (Misal: Outbond, Rafting, Jogging, kegiatan olahraga berat lainnya), Apakah terdapat standby ambulance dan petugas medis (dokter dan paramedis) di lokasi acara/venue?
                                (Silahkan mengisi N/A Apabila kegiatan tidak membutuhkan aktivitas fisik)
                            </Text>
                            <Text>
                                (Silahkan mengisi N/A Apabila kegiatan tidak membutuhkan aktivitas fisik)
                            </Text>
                            <CheckBox
                                checked={false}
                                onPress={() => setIndex(0)}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                            >Ya</CheckBox>
                            <CheckBox
                                checked={false}
                                onPress={() => setIndex(1)}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                            >Tidak</CheckBox>
                            <CheckBox
                                checked={false}
                                onPress={() => setIndex(1)}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                            >N/A</CheckBox>

                            {/* <Card>
                                <Card></Card>
                            </Card> */}
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
                <Button type='outline' buttonStyle={{ width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' }} titleStyle={{ color: '#000' }} onPress={handlePrev}>Prev</Button>
                {isDraft && <Button buttonStyle={{ width: 80, marginRight: 5, borderRadius: 10 }} onPress={handleSave}>Save</Button>}
                <Button buttonStyle={{ width: 80, borderRadius: 10 }} onPress={handleSubmit}>Submit</Button>
            </View>
        </View>
    )
}

export default EnvironmentTab;
