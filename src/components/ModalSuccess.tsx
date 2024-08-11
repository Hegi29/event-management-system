import { View } from "react-native";

import { Button, Text } from "@rneui/themed";
import Modal from "react-native-modal";

type ActionButtonProps = { handleOk: any };
type ModalErrorProps = { isModalVisible: boolean, handleOk: any, statusCode?: number, message?: string };

const ActionButton = ({ handleOk }: ActionButtonProps) => {
    return (
        <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Button buttonStyle={{ borderRadius: 10, backgroundColor: '#0D5B95', width: 100, marginTop: 10 }} onPress={handleOk}>OK</Button>
        </View>
    )
}

const ModalSuccess = ({ isModalVisible, handleOk, statusCode, message }: ModalErrorProps) => {
    return (
        <Modal isVisible={isModalVisible} style={{ height: 50 }}>
            <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 17, marginBottom: 10, textAlign: 'center' }}>Data Saved</Text>
                <Text style={{ textAlign: 'center' }}>{message}</Text>
                <ActionButton handleOk={handleOk} />
            </View>
        </Modal>
    )
}

export default ModalSuccess;
