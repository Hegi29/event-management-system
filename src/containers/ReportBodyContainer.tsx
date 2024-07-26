import { StyleSheet } from "react-native";

import { Card, Icon, Input, Text } from "@rneui/themed";

const ReportBodyContainer = () => {
    return (
        <Card containerStyle={{ borderRadius: 15, padding: 0, paddingBottom: 15 }}>
            <Card containerStyle={{ borderRadius: 10, padding: 0, paddingTop: 10 }}>
                <Text style={{ marginBottom: 0, paddingLeft: 10, fontWeight: 'bold' }}>Search for report</Text>
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
                <Text style={{ marginBottom: 0, paddingLeft: 10, fontWeight: 'bold' }}>Status</Text>
                <Input placeholder='Status' leftIcon={
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
            </Card>
        </Card>
    )
}

const styles = StyleSheet.create({
    province: {
        color: '#636363',
        marginVertical: 10
    },
    button: {
        borderRadius: 8,
        marginVertical: 10
    },
    buttonColor: {
        backgroundColor: '#0c5b94'
    },
    buttonExport: {
        // color: '#636363'
    },
    card: {
        borderRadius: 20
    },
    date: {
        color: '#099057',
        fontWeight: 'bold',
        marginTop: 10
    },
    eventCard: {
        borderRadius: 13
    },
    heading: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    image: {
        width: '100%',
        height: 140,
        marginRight: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10,
        marginHorizontal: 0,
        color: '#1a6fb2'
    },
    searchField: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: -10
    },
    submitDate: {
        textAlign: 'center',
        color: '#636363'
    },
    subtitle: {
        fontSize: 15,
        marginHorizontal: 0,
        marginBottom: 20
    },
    cardWaiting: {
        backgroundColor: '#b1f1fd',
        borderRadius: 10,
        marginHorizontal: 0
    },
    cardReview: {
        backgroundColor: '#d6f9ff',
        borderRadius: 10,
        marginHorizontal: 0
    },
    cardRevision: {
        backgroundColor: '#e7fafe',
        borderRadius: 10,
        marginHorizontal: 0
    }
});

export default ReportBodyContainer;
