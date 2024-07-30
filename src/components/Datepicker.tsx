import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Button } from "@rneui/themed";
import CalendarPicker from "react-native-calendar-picker";

const Datepicker = ({ setSelectedDate, toggleModal }: any) => {
    const [selectedStartDate, setSelectedStartDate] = useState(null) as any;
    const [selectedEndDate, setSelectedEndDate] = useState(null) as any;

    const minDate = new Date().setFullYear(new Date().getFullYear() - 1);

    const onDateChange = (date: any, type: string) => {
        if (type === "END_DATE") {
            setSelectedEndDate(date);
            return;
        }

        setSelectedStartDate(date);
    }

    const handleOK = () => {
        toggleModal();
        if (selectedStartDate && selectedEndDate) {
            setSelectedDate({ startDate: selectedStartDate, endDate: selectedEndDate });
        }
    }

    return (
        <View style={styles.container}>
            <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                minDate={minDate}
                todayBackgroundColor="#f2e6ff"
                selectedDayColor="#7300e6"
                selectedDayTextColor="#FFFFFF"
                onDateChange={(e, f) => onDateChange(e, f)}
            />

            <View>
                <Button title="OK" onPress={handleOK} buttonStyle={{ borderBottomStartRadius: 10, borderBottomEndRadius: 10 }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10
    }
});

export default Datepicker;
