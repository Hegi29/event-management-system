import { View } from "react-native"

import { Button, Text } from "@rneui/themed"
import Modal from "react-native-modal"

const ModalError = ({ isModalVisible, handleOk, statusCode, message }: any) => {
    return (
        <Modal isVisible={isModalVisible} style={{ height: 50 }}>
            <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 17, marginBottom: 10, textAlign: 'center' }}>Error {statusCode}</Text>
                <Text style={{ textAlign: 'center' }}>{message}</Text>
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Button buttonStyle={{ borderRadius: 10, backgroundColor: '#0D5B95', width: 100, marginTop: 10 }} onPress={handleOk}>OK</Button>
                </View>
            </View>
        </Modal>
    )
}

export default ModalError;
