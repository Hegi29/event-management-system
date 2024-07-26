import { StyleSheet, View } from "react-native";

import { Card, Image, Text } from "@rneui/themed";

import { RequestRevisionImage, UnderReviewImage, WaitingReviewImage } from "../assets/images";

const VenueDashboard = () => {
    return (
        <View style={styles.cardContainer}>
            <Card containerStyle={styles.cardWaiting} wrapperStyle={styles.cardWrapper}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={WaitingReviewImage} />
                    <Text h3 style={{ ...styles.textCard, color: '#0BA5EC' }}>20</Text>
                </View>
                <Text style={{ fontWeight: 'bold' }}>Registered Venue</Text>
                <Text>Venue that have finished the review</Text>
            </Card>
            <Card containerStyle={styles.cardReview} wrapperStyle={styles.cardWrapper}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={UnderReviewImage} />
                    <Text h3 style={{ ...styles.textCard, color: '#DF4D52' }}>10</Text>
                </View>
                <Text style={{ fontWeight: 'bold' }}>Under Review Venue</Text>
                <Text>Venue are in the review process</Text>
            </Card>
            <Card containerStyle={styles.cardRevision} wrapperStyle={styles.cardWrapper}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={RequestRevisionImage} />
                    <Text h3 style={{ ...styles.textCard, color: '#F79009' }}>20</Text>
                </View>
                <Text style={{ fontWeight: 'bold' }}>Request Expired Venue</Text>
                <Text>Venue that have expired</Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 0
    },
    cardWrapper: { width: 130, height: 110 },
    cardWaiting: {
        backgroundColor: '#b1f1fd',
        borderRadius: 10,
        marginHorizontal: 0,
        marginRight: 5
    },
    cardReview: {
        backgroundColor: '#d6f9ff',
        borderRadius: 10,
        marginHorizontal: 0
    },
    cardRevision: {
        marginTop: 5,
        backgroundColor: '#e7fafe',
        borderRadius: 10,
        marginHorizontal: 0,
        marginRight: 5
    },
    cardComplete: {
        marginTop: 5,
        backgroundColor: '#f2fdff',
        borderRadius: 10,
        marginHorizontal: 0
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 10
    },
    imageWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    textCard: {
        fontWeight: 'bold', paddingBottom: 20
    }
});

export default VenueDashboard;