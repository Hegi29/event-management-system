import { View } from "react-native";

import { Button, Text } from "@rneui/themed";
import Modal from "react-native-modal";

const ModalLogOut = ({ isModalVisible, handleLogOut, handleOkLogout }: any) => {
    return (
        <Modal isVisible={isModalVisible} style={{ height: 50 }}>
            <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 17, marginBottom: 10 }}>Logout</Text>
                <Text>Are you sure want to logout?</Text>
                <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button buttonStyle={{ borderRadius: 10 }} type="outline" onPress={handleLogOut}>Cancel</Button>
                    <Button buttonStyle={{ borderRadius: 10, backgroundColor: '#0D5B95' }} containerStyle={{ marginLeft: 5 }} onPress={handleOkLogout}>Logout</Button>
                </View>
            </View>
        </Modal>
    )
}

export default ModalLogOut;
