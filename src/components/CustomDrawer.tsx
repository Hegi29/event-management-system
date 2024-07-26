import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Icon, Image, Input, ListItem, Text } from "@rneui/themed";

import { APP_TITLE } from "../constants";

const CustomDrawerContent = ({ navigation, navigationRef: { isReady, getCurrentRoute } }: any) => {
    const [expanded, setExpanded] = useState(false);

    // const routeState = isReady ? getCurrentRoute() : '';

    // useEffect(() => {
    //     if(routeState.name !== 'EventDraft' && expanded) {
    //         setExpanded(false);
    //     }
    // }, [routeState.name, expanded])

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
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
                    containerStyle={{...styles.buttonContainer, backgroundColor: '#408EC9'}}
                ><Icon name="home" color="white" />Home</Button>
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
                                style={{ alignItems: 'flex-start', paddingLeft: 12 }}
                                type="clear"
                                onPress={() => {
                                    navigation.navigate('EventDraft');
                                }}
                            >Draft</Button>
                        </ListItem.Content>
                    </ListItem>
                </ListItem.Accordion>
                <Button
                    titleStyle={styles.buttonTitle}
                    style={{ alignItems: 'flex-start' }}
                    type="clear"
                    onPress={() => {
                        navigation.navigate('Venue');
                    }}
                    // containerStyle={{backgroundColor: routeState?.name !== 'Venue' ? '#408EC9' : '#408EF9'}}
                    containerStyle={{backgroundColor: '#408EC9'}}
                ><Icon name="apartment" color="white" />Venue</Button>
                <Button
                    titleStyle={styles.buttonTitle}
                    style={{ alignItems: 'flex-start' }}
                    type="clear"
                    onPress={() => {
                        navigation.navigate('Report');
                    }}
                    // containerStyle={{...styles.buttonContainer, backgroundColor: routeState?.name !== 'Report' ? '#408EC9' : '#408EF9'}}
                    containerStyle={{...styles.buttonContainer, backgroundColor: '#408EC9'}}
                ><Icon name="pie-chart" color="white" />Report</Button>
                <Button
                    titleStyle={styles.buttonTitle}
                    style={{ alignItems: 'flex-start' }}
                    type="clear"
                    onPress={() => {
                        navigation.navigate('Users');
                    }}
                    // containerStyle={{...styles.buttonContainer, backgroundColor: routeState?.name !== 'Users' ? '#408EC9' : '#408EF9'}}
                    containerStyle={{...styles.buttonContainer, backgroundColor: '#408EC9'}}
                ><Icon name="people" color="white" />Users</Button>

                <View style={{ position: 'relative', marginTop: 150 }}>
                    <Button
                        titleStyle={styles.buttonTitle}
                        style={{ alignItems: 'flex-start' }}
                        type="clear"
                        onPress={() => {
                            navigation.navigate('Support');
                        }}
                        // containerStyle={{...styles.buttonContainer, backgroundColor: routeState?.name !== 'Support' ? '#408EC9' : '#408EF9'}}
                        containerStyle={{...styles.buttonContainer, backgroundColor: '#408EC9'}}
                    ><Icon name="support" color="white" />Support</Button>
                    <Button
                        titleStyle={styles.buttonTitle}
                        style={{ alignItems: 'flex-start' }}
                        type="clear"
                        onPress={() => {
                            navigation.navigate('Setting');
                        }}
                        // containerStyle={{...styles.buttonContainer, backgroundColor: routeState?.name !== 'Setting' ? '#408EC9' : '#408EF9'}}
                        containerStyle={{...styles.buttonContainer, backgroundColor: '#408EC9'}}
                    ><Icon name="settings" color="white" />Setting</Button>
                </View>
            </View>
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
        marginTop: 20
    },
    buttonTitle: {
        color: 'white',
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    container: {
        marginTop: 60,
        backgroundColor: '#408EC9',
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