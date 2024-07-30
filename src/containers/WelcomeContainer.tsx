import { StyleSheet } from "react-native";

import { Button, Card, Icon, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const WelcomeContainer = () => {
    const navigation = useNavigation();

    return (
        <Card containerStyle={styles.cardContainer}>
            <Text style={styles.title}>Welcome back, Olivia</Text>
            <Text>Track, manage and forecast your event</Text>
            <Button title="Add New Event" type='solid' buttonStyle={styles.buttonAdd} onPress={() => navigation.navigate('CreateEvent' as never)} icon={<Icon name="add" size={24} color="#fff" />} />
        </Card>
    )
}

const styles = StyleSheet.create({
    buttonAdd: {
        borderRadius: 10,
        borderColor: '#000',
        backgroundColor: '#0D5B95',
        marginTop: 20
    },
    cardContainer: {
        borderRadius: 10,
        paddingBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1072BA',
        marginBottom: 5
    }
});

export default WelcomeContainer;
