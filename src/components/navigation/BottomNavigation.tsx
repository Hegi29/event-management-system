import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Avatar, Image, Text } from "@rneui/themed";

import { LogoutImage } from "../../assets/images";
import { storage } from "../../utils/Storage";

const BottomNavigation = ({ handleLogOut }: any) => {
    const photoUser = storage.getString('user.photo')
    const fullName = storage.getString('user.fullname')
    const role = storage.getString('user.rolename')

    return (
        <View style={{position: 'absolute', bottom: 0}}>
            <View style={styles.containerHeader}>
                <View style={styles.avatarContainer}>
                    <Avatar
                        containerStyle={styles.avatar}
                        size={40}
                        rounded
                        source={{ uri: photoUser }}
                    />
                    <Text style={styles.username}>{fullName}</Text>
                    <Text style={styles.role}>{role}</Text>
                </View>
                <TouchableOpacity onPress={handleLogOut}>
                    <Image source={LogoutImage} style={{ ...styles.logo }} />
                </TouchableOpacity>
            </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    containerImage: {
        backgroundColor: '#fff',
        marginLeft: 50,
        paddingHorizontal: 0,
        paddingVertical: 8,
        borderRadius: 5,
        marginRight: 15
    },
    logo: {
        marginLeft: 15,
        marginRight: 15,
        height: 36,
        width: 36
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
