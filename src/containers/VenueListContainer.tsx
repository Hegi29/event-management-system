import { StyleSheet, View } from "react-native";

import { Button, Card, Icon, Image, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import { CalendarImage, CheckedImage, DetailEventImage, PhoneImage } from "../assets/images";

import { NoData } from "../components";

const VenueListData = ({ data }: any) => {
    const navigation = useNavigation() as any;

    return (
        <>
            {data.length > 0 && data?.map((item: any) => (
                <Card key={item.venueId} containerStyle={styles.eventCard}>
                    <Image source={{ uri: item.images[0].data }} resizeMode='cover' style={styles.image} />
                    <Text style={styles.heading}>{item.venueName}</Text>
                    <Text style={{ ...styles.province, fontWeight: '700' }}>{item.subDistric}, {item.province}</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', marginRight: 10 }}>
                            <Image source={PhoneImage} style={styles.phoneUsed} />
                            <Text style={{ ...styles.province, marginTop: 2 }}>{item.phoneNumber}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={CalendarImage} style={styles.phoneUsed} />
                            <Text style={{ ...styles.province, marginTop: 2 }}>{item?.totalUsed ?? 0} total used</Text>
                        </View>
                    </View>
                    {item.verified &&
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Image source={CheckedImage} style={styles.checkedImage} />
                            <Text style={{ ...styles.province, marginTop: -1 }}>Verified on {item.verified}</Text>
                        </View>
                    }

                    {item.status === 'Waiting for review' &&
                        <View style={styles.eventContainer}>
                            <Text style={{ color: '#026AA2' }}><Icon name='circle' type="font-awesome" size={10} color='#026AA2' /> {item.status}</Text>
                        </View>
                    }

                    {item.status === 'Request expired' &&
                        <View style={styles.expiredContainer}>
                            <Text style={{ color: '#B54708' }}><Icon name='circle' type="font-awesome" size={10} color='#B54708' /> {item.status}</Text>
                        </View>
                    }

                    {item.status === 'This venue is under review' &&
                        <View style={styles.reviewContainer}>
                            <Text style={{ color: '#F04438' }}><Icon name='circle' type="font-awesome" size={10} color='#F04438' /> {item.status}</Text>
                        </View>
                    }

                    {item.status === 'Review Complete' &&
                        <View style={styles.hsseContainer}>
                            <Text style={{ color: '#067647' }}><Icon name='circle' type="font-awesome" size={10} color='#067647' /> {item.status}</Text>
                        </View>
                    }

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.statusContainer}>
                            <Text style={{ color: '#067647' }}><Icon name='circle' type="font-awesome" size={10} color='#067647' /> Health {item.health}</Text>
                        </View>
                        <View style={styles.statusContainer}>
                            <Text style={{ color: '#067647' }}><Icon name='circle' type="font-awesome" size={10} color='#067647' /> Security {item.security}</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', paddingVertical: 10 }}>
                        <View style={styles.statusContainer}>
                            <Text style={{ color: '#067647' }}><Icon name='circle' type="font-awesome" size={10} color='#067647' /> Safety {item.safety}</Text>
                        </View>
                        <View style={styles.statusContainer}>
                            <Text style={{ color: '#067647' }}><Icon name='circle' type="font-awesome" size={10} color='#067647' /> Environment {item.environment}</Text>
                        </View>
                    </View>
                    <Button title="View Details" icon={<Image source={DetailEventImage} style={styles.imageIconDetail} />} buttonStyle={styles.buttonColor} containerStyle={styles.button} onPress={() => navigation.navigate('EventDetail')} />
                    <Text style={styles.updatedDate}>{item.created}</Text>
                </Card>
            ))}
            {(data === null || data?.length === 0) && <NoData data={data} />}
        </>
    )
}

const VenueListContainer = ({ data, totalItemRequest, handleShowMore }: any) => {
    return (
        <View style={styles.viewContainer}>
            <VenueListData data={data} />
            {totalItemRequest > data.length && <Button title='Show More' buttonStyle={{ borderRadius: 13, marginTop: 15, width: '50%' }} containerStyle={{ alignItems: 'center' }} onPress={handleShowMore} />}
        </View>
    )
}

const styles = StyleSheet.create({
    phoneUsed: {
        height: 20,
        width: 20,
        marginRight: 5,
        marginTop: 3
    },
    checkedImage: {
        height: 20,
        width: 20,
        marginRight: 5
    },
    hsseContainer: {
        backgroundColor: '#ABEFC6',
        borderStyle: 'solid',
        borderColor: '#067647',
        marginRight: 10,
        width: 146,
        marginBottom: 30,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 30
    },
    reviewContainer: {
        backgroundColor: '#FEF3F2',
        borderStyle: 'solid',
        borderColor: '#FEE4E2',
        marginRight: 10,
        width: 200,
        marginBottom: 30,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 30
    },
    expiredContainer: {
        backgroundColor: '#FFFAEB',
        borderStyle: 'solid',
        borderColor: '#FEDF89',
        marginRight: 10,
        width: 146,
        marginBottom: 30,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 30
    },
    eventContainer: {
        backgroundColor: '#F5FBFF',
        borderStyle: 'solid',
        borderColor: '#E0F2FE',
        marginRight: 10,
        width: 200,
        marginBottom: 30,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 30
    },
    statusContainer: {
        backgroundColor: '#ABEFC6',
        borderStyle: 'solid',
        borderColor: '#067647',
        marginRight: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 30
    },
    updatedDate: {
        textAlign: 'center',
        color: '#667085'
    },
    viewContainer: {
        marginVertical: 5
    },
    button: {
        borderRadius: 8,
        marginVertical: 10
    },
    buttonColor: {
        backgroundColor: '#0c5b94'
    },
    card: {
        borderRadius: 20
    },
    chipButton: {
        backgroundColor: '#FEE4E2',
        borderStyle: 'solid',
        borderColor: '#F04438',
        padding: 0,
        paddingRight: 20
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
        fontSize: 17,
        fontWeight: 'bold'
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    iconContainer: {
        paddingHorizontal: 0,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 140,
        marginRight: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    imageIconDetail: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 5
    },
    province: {
        color: '#636363',
        marginVertical: 5
    },
    submitDate: {
        textAlign: 'center',
        color: '#636363'
    }
});

export default VenueListContainer;
