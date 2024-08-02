import { StyleSheet, View } from "react-native";

import { Card, Image, Text } from "@rneui/themed";

import { RequestRevisionImage, ReviewCompleteImage, UnderReviewImage, WaitingReviewImage } from "../assets/images";

const CardWaitingForReview = ({ waitingForReview }: any) => {
    return (
        <Card containerStyle={styles.cardWaiting} wrapperStyle={styles.cardWrapper}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={WaitingReviewImage} />
                <Text style={{ ...styles.textCard, color: '#0BA5EC' }}>{waitingForReview ?? 0}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Waiting For Review Venues</Text>
        </Card>
    )
}

const CardUnderReview = ({ underReview }: any) => {
    return (
        <Card containerStyle={styles.cardReview} wrapperStyle={styles.cardWrapper}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={UnderReviewImage} />
                <Text style={{ ...styles.textCard, color: '#DF4D52' }}>{underReview ?? 0}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Under Review Venues</Text>
        </Card>
    )
}

const CardRequestExpired = ({ requestExpired }: any) => {
    return (
        <Card containerStyle={styles.cardRevision} wrapperStyle={styles.cardWrapper}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={RequestRevisionImage} />
                <Text style={{ ...styles.textCard, color: '#F79009' }}>{requestExpired ?? 0}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Request Expired Venues</Text>
        </Card>
    )
}

const CardRegisteresVenues = ({ reviewComplete }: any) => {
    return (
        <Card containerStyle={styles.cardComplete} wrapperStyle={styles.cardWrapper}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={ReviewCompleteImage} />
                <Text style={{ ...styles.textCard, color: '#17B26A' }}>{reviewComplete ?? 0}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Registered Venues</Text>
        </Card>
    )
}

const VenueDashboard = ({ dashboardData }: any) => {
    return (
        <View style={styles.cardContainer}>
            <CardWaitingForReview waitingForReview={dashboardData?.waitingForReview} />
            <CardUnderReview underReview={dashboardData?.underReview} />
            <CardRequestExpired requestExpired={dashboardData?.requestExpired} />
            <CardRegisteresVenues reviewComplete={dashboardData?.reviewComplete} />
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
    cardWrapper: {
        width: 140,
        height: 125
    },
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
        width: 50,
        height: 50,
        marginRight: 5,
        borderRadius: 10
    },
    imageWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    textCard: {
        fontWeight: 'bold',
        fontSize: 35,
        paddingBottom: 20
    }
});

export default VenueDashboard;