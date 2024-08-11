import { Avatar, Button, Image, Input, Text } from "@rneui/themed"
import { StyleSheet, View } from "react-native"

import { SendImage } from "../assets/images"

import { MAX_LENGTH_COMMENT } from "../constants"
import { useEffect, useState } from "react"

const MOCK = [
    {
        "userId": "4c31c5a4-b5dd-4d38-b128-f7314ae54598",
        "userName": "cgreenshields1",
        "userEmail": "cgreenshields1@nymag.com",
        "userRole": "health verificator",
        "userPhotoProfileUrl": "",
        "comment": "test comment"
    }
];

const Comment = ({ item, createComment, handleApprove }: any) => {
    const [newComment, setNewComment] = useState('');
    const [isRevise, setIsRevise] = useState(false);
    const [error, setError] = useState(false);

    const handleRevise = () => {
        setIsRevise(!isRevise);
    };

    const submitComment = () => {
        if (newComment) {
            setError(true);
            return;
        }

        createComment(newComment);
    }

    return (
        <>
            {(item.status === null || item.status === 'Ask to Revise') &&
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Button title={'Ask to Revise'} buttonStyle={{ borderRadius: 10, backgroundColor: '#fff', borderColor: '#D0D5DD', borderWidth: 1 }} titleStyle={{ color: '#344054' }} containerStyle={{ marginBottom: 10, width: '48%', marginRight: 10 }} onPress={handleRevise} />
                    <Button title={'Approve'} buttonStyle={{ borderRadius: 10, backgroundColor: '#0D5B95' }} containerStyle={{ marginBottom: 10, width: '48%' }} />
                </View>
            }
            {item.status === 'Approved' &&
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Button title={'Ask to Revise'} buttonStyle={{ borderRadius: 10, backgroundColor: '#fff', borderColor: '#D0D5DD', borderWidth: 1 }} titleStyle={{ color: '#344054' }} containerStyle={{ marginBottom: 10, width: '48%', marginRight: 10 }} onPress={handleRevise} />
                </View>
            }
            {item.comments?.map((item: any) => {
                return (
                    <View style={styles.eventCard}>
                        <Avatar containerStyle={styles.avatarContainer}
                            size={32}
                            rounded
                            source={item.userPhotoProfileUrl}
                        />
                        <View style={styles.containerCreated}>
                            <Text style={styles.username}>{item.userName}</Text>
                            <Text>{item.pastTime}</Text>
                        </View>
                        <View style={{ ...styles.containerEvent, marginBottom: item.activityType === 'Commented in' ? 5 : 20 }}>
                            <Text>{item.activityType}</Text>
                            <Text>{item.comment}</Text>
                        </View>
                    </View>
                )
            })}
            {isRevise &&
                <View>
                    <Input
                        placeholder="Input komentar ..."
                        onChangeText={(e) => setNewComment(e)}
                        inputContainerStyle={{ ...styles.searchField, borderColor: error ? 'red' : '#D0D5DD' }}
                    // containerStyle={{ paddingHorizontal: 0 }}
                    />
                    <Button title={'Send'} buttonStyle={{ borderRadius: 10 }} containerStyle={{ marginBottom: 10 }} onPress={submitComment} />
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    imageIconTitle: {
        height: 20,
        width: 20,
        marginTop: 0
    },
    searchField: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 15,
        borderColor: '#D0D5DD',
        borderWidth: 1,
        marginHorizontal: -10,
        marginBottom: -12
    },
    activity: {
        marginLeft: 40,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#EAECF0',
        marginTop: 5
    },
    eventCard: {
        borderRadius: 13
    },
    avatarContainer: {
        position: 'absolute',
        marginTop: 5
    },
    containerCreated: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 40
    },
    username: {
        marginRight: 10,
        fontWeight: 'bold'
    },
    containerEvent: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginLeft: 40
    },
    appTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 20,
        color: 'white'
    },
    buttonActionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 0,
        marginTop: 40
    },
    buttonClose: { width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' },
    buttonPrev: { width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' },
    buttonNext: { width: 80, borderRadius: 10, backgroundColor: '#0D5B95' },
    buttonSave: { width: 80, marginRight: 5, borderRadius: 10, borderColor: '#000' },
    container: {
        marginTop: 60,
        backgroundColor: '#408EC9',
    },
    containerTitle: {
        display: 'flex',
        flexDirection: 'row'
    },
    containerUploadComment: { borderRadius: 10, backgroundColor: '#F2F4F7', width: '100%', marginLeft: 0 },
    image: {
        width: 35,
        height: 40,
        margin: 10
    },
    chipButton: {
        backgroundColor: '#FFFAEB',
        borderStyle: 'solid',
        borderColor: '#B54708',
        padding: 0,
        paddingRight: 20
    },
    chipTitleStyle: {
        color: '#B54708',
        fontSize: 18,
        paddingVertical: 7,
        paddingLeft: 5,
        paddingRight: 0
    },
    chipContainer: {
        paddingHorizontal: 0,
        backgroundColor: '#FEDF89'
    },
    listItemAccordionContainer: { backgroundColor: '#fff', paddingLeft: 0, marginLeft: -10, marginRight: -10 },
    listItemContainer: { backgroundColor: '#fff', paddingTop: 0, marginHorizontal: -10, marginTop: 10 },
    titleTab: {
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10
    },
    questionName: { marginTop: 10, fontWeight: 'bold', fontSize: 17, marginLeft: 10, marginRight: 20 }
});

export default Comment
