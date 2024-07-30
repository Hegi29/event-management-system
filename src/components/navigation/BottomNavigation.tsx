import { Avatar, Image, Text } from "@rneui/themed";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { LogOutImage } from "../../assets/images";

const BottomNavigation = ({ handleLogOut }: any) => {
    return (
        <View style={{ ...styles.containerHeader, marginTop: 5 }}>
            <View style={styles.avatarContainer}>
                <Avatar
                    containerStyle={styles.avatar}
                    size={32}
                    rounded
                    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                />
                <Text style={styles.username}>Olivia Rhye</Text>
                <Text style={styles.role}>User</Text>
            </View>
            <TouchableOpacity style={styles.containerImage} onPress={handleLogOut}>
                <Image source={LogOutImage} style={{ ...styles.logo }} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        position: 'absolute'
    },
    avatarContainer: {
        marginLeft: 10
    },
    containerHeader: {
        flexDirection: 'row'
    },
    containerImage: {
        backgroundColor: '#fff',
        marginLeft: 50,
        padding: 5,
        borderRadius: 5
    },
    logo: {
        marginLeft: 15,
        marginRight: 10,
        height: 30,
        width: 30
    },
    username: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 45
    },
    role: {
        color: 'white',
        marginLeft: 45
    }
});

export default BottomNavigation;
