import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Avatar, Image, Text } from "@rneui/themed";
import { useSelector } from "react-redux";

import { LogoutImage } from "../../assets/images";
import { selectAccount } from "../../redux/reducers/accountSlice";

type BottomNavigationProps = { handleLogOut: () => void };

const BottomNavigation = ({ handleLogOut }: BottomNavigationProps) => {
    const accountData = useSelector(selectAccount);

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.avatarContainer}>
                    {accountData?.account.photo && <Avatar
                        containerStyle={styles.avatar}
                        size={40}
                        rounded
                        source={{ uri: accountData?.account.photo }}
                    />}
                    <Text style={styles.username}>{accountData?.account.fullname}</Text>
                    <Text style={styles.role}>{accountData?.account.rolename}</Text>
                </View>
                <TouchableOpacity onPress={handleLogOut}>
                    <Image source={LogoutImage} style={styles.logo} />
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
    container: {
        position: 'absolute',
        bottom: 0
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
