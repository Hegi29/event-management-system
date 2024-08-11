import { View } from "react-native";

import { Button, Text } from "@rneui/themed";
import Modal from "react-native-modal";

type ModalSaveProps = { isModalVisible: boolean, discard: any, save: any };

const ModalSave = ({ isModalVisible, discard, save }: ModalSaveProps) => {
    return (
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
    )
}

export default ModalSave;
