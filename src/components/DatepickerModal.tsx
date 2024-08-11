import { StyleSheet, View } from "react-native";

import Modal from "react-native-modal";

import Datepicker from "./Datepicker";

const DatepickerModal = ({ isModalVisible, toggleModal, setSelectedDate, isRange, tipe, setSingleDate }: any) => {
    return (
        <Modal isVisible={isModalVisible} style={{ height: 50 }}>
            <View style={styles.datepickerContainer}>
                <Datepicker toggleModal={() => toggleModal()} setSelectedDate={setSelectedDate} isRange={isRange} tipe={tipe} setSingleDate={setSingleDate} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    datepickerContainer: {
        marginTop: 100,
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: -20
    }
})

export default DatepickerModal;
