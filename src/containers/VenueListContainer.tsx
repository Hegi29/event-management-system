import { StyleSheet, View } from "react-native";

import { Card, Chip, Image, Text } from "@rneui/themed";

import { CalendarImage, CheckedImage, PhoneImage } from "../assets/images";

const iconOptions = {
    name: 'circle',
    type: 'font-awesome',
    size: 10,
    color: '#067647'
};

const VenueListContainer = ({ data }: any) => {
    return (
        <View style={styles.viewContainer}>
            {data?.map((item: any) => (
                <Card key={item.venueId} containerStyle={styles.eventCard}>
                    <Image source={{ uri: item.images[0].data }} resizeMode='cover' style={styles.image} />
                    <Text style={styles.heading}>{item.venueName}</Text>
                    <Text style={styles.province}>{item.subDistric}, {item.province}</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', marginRight: 10 }}>
                            <Image source={PhoneImage} style={{ height: 20, width: 20, marginRight: 5, marginTop: 3 }} />
                            <Text style={{ ...styles.province, paddingTop: 0 }}>{item.phoneNumber}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={CalendarImage} style={{ height: 20, width: 20, marginRight: 5, marginTop: 3 }} />
                            <Text style={styles.province}>xx total used</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <Image source={CheckedImage} style={{ height: 20, width: 20, marginRight: 5 }} />
                        <Text style={styles.province}>Verified on {item.verifiedDate}</Text>
                    </View>
                    {item?.badges?.map((items: any) => (
                        <Chip
                            key={items}
                            title={items}
                            icon={iconOptions}
                            type='outline'
                            containerStyle={styles.iconContainer}
                            titleStyle={{ color: '#067647' }}
                            buttonStyle={styles.chipButton}
                        />
                    ))}
                </Card>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
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
        fontSize: 14,
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
