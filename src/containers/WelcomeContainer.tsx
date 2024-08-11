import { StyleSheet } from "react-native";

import { Button, Card, Icon, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { selectAccount } from "../redux/reducers/accountSlice";

const AddIcon = () => {
    return (
        <Icon name="add" size={24} color="#fff" />
    )
}

const WelcomeContainer = () => {
    const navigation = useNavigation() as any;
    const accountData = useSelector(selectAccount);

    const handleNav = () => {
        navigation.navigate('CreateEvent', { isDraft: false });
    }

    return (
        <Card containerStyle={styles.cardContainer}>
            <Text style={styles.title}>Welcome back, {accountData.account.firstname}</Text>
            <Text>Track, manage and forecast your event</Text>
            {(accountData.account.roleId === '1' || accountData.account.roleId === '6') && <Button title="Add New Event" type='solid' buttonStyle={styles.buttonAdd} onPress={handleNav} icon={<AddIcon />} />}
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
