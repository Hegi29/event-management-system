import { StyleSheet, View } from "react-native";

import { Image } from "@rneui/themed";

import { MenuImage, NotificationImage } from "../../assets/images";

const TopRightNav = ({ navigation }: any) => {
    return (
        <View style={{ ...styles.containerHeader, marginRight: 15 }}>
            <View style={{ ...styles.containerImage, marginRight: 10 }}>
                <Image source={NotificationImage} style={styles.imageRight} />
            </View>
            <View style={styles.containerImage}>
                <Image source={MenuImage} onPress={navigation.toggleDrawer} style={styles.imageRight} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    containerImage: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 5
    },
    imageRight: {
        height: 20,
        width: 20
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

export default TopRightNav;
