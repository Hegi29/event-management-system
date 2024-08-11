import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Button } from "@rneui/themed";
import CalendarPicker from "react-native-calendar-picker";
import { formatDateID } from "../utils/Date";

type DatepickerProps = { setSelectedDate?: any, toggleModal: any, isRange?: boolean, tipe?: string };

const minDate = new Date().setFullYear(new Date().getFullYear() - 1);
const minDateEvent = new Date().setDate(new Date().getDate() + 2);

const Datepicker = ({ setSelectedDate, toggleModal, isRange, tipe }: DatepickerProps) => {
    const [selectedStartDate, setSelectedStartDate] = useState(null) as any;
    const [selectedEndDate, setSelectedEndDate] = useState(null) as any;
    const [currentSingleDate, setCurrentSingleDate] = useState(null) as any;

    const onDateChange = (date: any, type: string) => {
        setCurrentSingleDate(date);

        if (tipe !== 'event') {
            if (type === "END_DATE") {
                setSelectedEndDate(date);
                return;
            }

            setSelectedStartDate(date);
        }
    }

    const handleOK = () => {
        toggleModal();
        if (tipe !== 'event') {
            if (selectedStartDate && selectedEndDate) {
                setSelectedDate({ startDate: selectedStartDate, endDate: selectedEndDate });
            }
        } else {
            setSelectedDate({ formattedDate: formatDateID(currentSingleDate), actualDate: currentSingleDate });
        }
    }

    return (
        <View style={styles.container}>
            <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={isRange}
                minDate={tipe !== 'event' ? minDate : minDateEvent}
                todayBackgroundColor="#f2e6ff"
                selectedDayColor="#7300e6"
                selectedDayTextColor="#FFFFFF"
                onDateChange={(e, f) => onDateChange(e, f)}
            />

            <View>
                <Button title="OK" onPress={handleOK} buttonStyle={styles.buttonStyle} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
    },
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10
    }
});

export default Datepicker;
