import { StyleSheet, View } from "react-native";

import { Image, Text } from "@rneui/themed";

import { LogomarkImage } from "../../assets/images";
import { APP_TITLE } from "../../constants";

const TopLeftNav = () => {
    return (
        <View style={styles.containerHeader}>
            <Image source={LogomarkImage} style={styles.logo} />
            <Text style={styles.title}>{APP_TITLE}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    logo: {
        marginLeft: 15,
        marginRight: 10,
        height: 40,
        width: 40
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        paddingTop: 8
    }
});

export default TopLeftNav;
