import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Icon, Image, Input, ListItem, Text } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";

import { APP_TITLE } from "../../constants";
import { storage } from "../../utils/Storage";

import ModalLogOut from "../ModalLogOut";
import BottomNavigation from "./BottomNavigation";

const CustomDrawerContent = ({ navigation, navigationRef: { isReady, getCurrentRoute } }: any) => {
    const [expanded, setExpanded] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const roleId = storage.getString('user.roleid');

    // const routeState = isReady ? getCurrentRoute() : '';

    // useEffect(() => {
    //     if(routeState.name !== 'EventDraft' && expanded) {
    //         setExpanded(false);
    //     }
    // }, [routeState.name, expanded])

    const handleLogOut = () => {
        setIsModalVisible(!isModalVisible);
        setTimeout(() => {
            storage.clearAll();
            navigation.navigate('Login');
        }, 2000);
    }

    const handleOkLogout = () => {
        storage.clearAll();
        handleLogOut();
    }

    return (
        <SafeAreaProvider>
            <ModalLogOut isModalVisible={isModalVisible} handleLogOut={handleLogOut} handleOkLogout={handleOkLogout} />
            <ScrollView style={styles.container}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Image source={{ uri: 'https://i.pinimg.com/736x/c6/82/73/c68273edeb333a7f3765c02ed509b55d.jpg' }} style={styles.image} />
                    <Text style={styles.appTitle}>{APP_TITLE}</Text>
                </View>
                <Input placeholder='Search' leftIcon={
                    <Icon
                        name='search'
                        size={24}
                        color='grey'
                        containerStyle={{
                            paddingLeft: 10
                        }}
                    />
                }
                    inputContainerStyle={styles.searchField}
                />
                <Button
                    titleStyle={styles.buttonTitle}
                    style={{ alignItems: 'flex-start' }}
                    type="clear"
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                    // containerStyle={{...styles.buttonContainer, backgroundColor: routeState?.name !== 'Home' ? '#408EC9' : '#408EF9'}}
                    containerStyle={{ ...styles.buttonContainer, backgroundColor: '#408EC9' }}
                ><Icon name="home" color="white" />Home</Button>
                {(roleId === '1' || roleId === '6') &&
                    <ListItem.Accordion
                        style={{ ...styles.buttonTitle, paddingLeft: 0, opacity: 10 }}
                        // containerStyle={{ backgroundColor: routeState?.name !== 'Event' ? '#408EC9' : '#408EF9', paddingLeft: 0 }}
                        containerStyle={{ backgroundColor: '#408EC8', paddingLeft: 0 }}
                        content={
                            <ListItem.Content>
                                <Button
                                    titleStyle={styles.buttonTitle}
                                    style={{ alignItems: 'flex-start' }}
                                    type="clear"
                                    onPress={() => {
                                        navigation.navigate('Event');
                                    }}
                                >
                                    <Icon name="today" color="white" />Event
                                </Button>
                            </ListItem.Content>
                        }
                        isExpanded={expanded}
                        onPress={() => {
                            setExpanded(!expanded);
                        }}
                        icon={
                            <Icon
                                name='chevron-down'
                                type="material-community"
                                color='white'
                            />
                        }
                    >
                        <ListItem containerStyle={{ backgroundColor: '#408EC9', paddingTop: 0 }}>
                            <ListItem.Content>
                                <Button
                                    titleStyle={styles.buttonTitle}
                                    style={{ alignItems: 'flex-start' }}
                                    containerStyle={{ marginLeft: 8 }}
                                    type="clear"
                                    onPress={() => {
                                        navigation.navigate('EventDraft');
                                    }}
                                >Draft</Button>
                            </ListItem.Content>
                        </ListItem>
                    </ListItem.Accordion>
                }
                {(roleId !== '1' && roleId !== '6') &&
                    <Button
                        titleStyle={styles.buttonTitle}
                        style={{ alignItems: 'flex-start' }}
                        type="clear"
                        onPress={() => {
                            navigation.navigate('Event');
                        }}
                        // containerStyle={{backgroundColor: routeState?.name !== 'Venue' ? '#408EC9' : '#408EF9'}}
                        containerStyle={{ ...styles.buttonContainerVenue, backgroundColor: '#408EC9', marginTop: 5 }}
                    ><Icon name="today" color="white" />Event</Button>
                }
                <Button
                    titleStyle={styles.buttonTitle}
                    style={{ alignItems: 'flex-start' }}
                    type="clear"
                    onPress={() => {
                        navigation.navigate('Venue');
                    }}
                    // containerStyle={{backgroundColor: routeState?.name !== 'Venue' ? '#408EC9' : '#408EF9'}}
                    containerStyle={{ ...styles.buttonContainerVenue, backgroundColor: '#408EC9', marginTop: roleId === '1' || roleId === '6' ? -10 : 5 }}
                ><Icon name="apartment" color="white" />Venue</Button>
                <Button
                    titleStyle={styles.buttonTitle}
                    style={{ alignItems: 'flex-start' }}
                    type="clear"
                    onPress={() => {
                        navigation.navigate('Report');
                    }}
                    // containerStyle={{...styles.buttonContainer, backgroundColor: routeState?.name !== 'Report' ? '#408EC9' : '#408EF9'}}
                    containerStyle={{ ...styles.buttonContainer, backgroundColor: '#408EC9', marginTop: 5 }}
                ><Icon name="pie-chart" color="white" />Report</Button>
                <Button
                    titleStyle={styles.buttonTitle}
                    style={{ alignItems: 'flex-start' }}
                    type="clear"
                    onPress={() => {
                        navigation.navigate('Users');
                    }}
                    // containerStyle={{...styles.buttonContainer, backgroundColor: routeState?.name !== 'Users' ? '#408EC9' : '#408EF9'}}
                    containerStyle={{ ...styles.buttonContainer, backgroundColor: '#408EC9', marginTop: 5 }}
                ><Icon name="people" color="white" />Users</Button>

                <View style={{ position: 'relative', marginTop: 100 }}>
                    <Button
                        titleStyle={styles.buttonTitle}
                        style={{ alignItems: 'flex-start' }}
                        type="clear"
                        onPress={() => {
                            navigation.navigate('Support');
                        }}
                        // containerStyle={{...styles.buttonContainer, backgroundColor: routeState?.name !== 'Support' ? '#408EC9' : '#408EF9'}}
                        containerStyle={{ ...styles.buttonContainer, backgroundColor: '#408EC9' }}
                    ><Icon name="support" color="white" />Support</Button>
                    <Button
                        titleStyle={styles.buttonTitle}
                        style={{ alignItems: 'flex-start' }}
                        type="clear"
                        onPress={() => {
                            navigation.navigate('Setting');
                        }}
                        // containerStyle={{...styles.buttonContainer, backgroundColor: routeState?.name !== 'Setting' ? '#408EC9' : '#408EF9'}}
                        containerStyle={{ ...styles.buttonContainer, backgroundColor: '#408EC9', marginTop: 5, marginBottom: 80 }}
                    >
                        <Icon name="settings" color="white" />Setting</Button>
                    <BottomNavigation handleLogOut={handleLogOut} />
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    appTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 20,
        color: 'white'
    },
    buttonContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    buttonContainerVenue: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    buttonTitle: {
        color: 'white',
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    container: {
        marginTop: 0,
        backgroundColor: '#408EC9'
    },
    image: {
        width: 40,
        height: 40,
        margin: 10,
        borderRadius: 10,
        marginBottom: 20
    },
    searchField: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 15
    }
})

export default CustomDrawerContent;