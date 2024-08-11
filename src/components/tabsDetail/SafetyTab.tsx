import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Button, Card, CheckBox, Chip, Divider, Icon, ListItem, Text } from "@rneui/themed";
import { Image } from "@rneui/base";

import { QuestionFileImage } from "../../assets/images";
import ImageUpload from "../ImageUpload";

import Comment from "../Comment";
import QuestionAnswered from "../QuestionAnswered";
import ListAttachment from "../ListAttachment";
import { useSelector } from "react-redux";
import { selectAccount } from "../../redux/reducers/accountSlice";
import Verify from "../../services/VerifyService";
import { HttpStatusCode } from "axios";

const HeadTab = () => {
    return (
        <View style={{ paddingHorizontal: 10 }}>
            <Text h4 style={styles.titleTab}>Safety Section</Text>
        </View>
    )
}

const ChipStatus = ({ status }: { status: string }) => {
    return (
        <Chip
            title={status}
            type='outline'
            containerStyle={{ ...styles.chipContainer, alignSelf: 'flex-end' }}
            titleStyle={styles.chipTitleStyle}
            buttonStyle={{ ...styles.chipButton, alignSelf: 'flex-end' }}
        />
    )
}

const IconExpand = () => {
    return (
        <Icon
            name='chevron-down'
            type="material-community"
            color='black'
        />
    )
}

const ListQuestions = ({ index, item, roleID, createComment, isRevise, handleApprove }: any) => {
    console.log("🚀 ~ ListQuestions ~ item:", item)
    const getAdditionalInfo = (answer: string) => {
        if (item) {
            const info = item.additionalInfo?.find((x: any) => x.option === item.myAnswer);
            if (info) {
                return info.message;
            }

            const found = item.additionalInfo?.find((x: any) => x.option === answer);
            if (found) {
                return found.message;
            }
        }

        const found = item.additionalInfo?.find((x: any) => x.option === answer);
        if (found) {
            return found.message;
        }

        const defaultInfo = item.additionalInfo?.find((y: any) => y.option === 'Default');
        if (defaultInfo) {
            return defaultInfo.message
        }

        return '';
    }

    return (
        <View key={item.questionId}>
            <Text>
                {item?.question}
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: -15 }}>
                <CheckBox
                    checked={item.answer === 'Ya'}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Ya'
                    disabled
                />
                <CheckBox
                    checked={item.answer === 'Tidak'}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Tidak'
                    disabled
                />
            </View>
            <View style={{ marginLeft: -15 }}>
                <CheckBox
                    checked={item.answer == 'N/A'}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='N/A'
                    disabled
                />
            </View>

            {/* disable kalo venue dan create event */}
            <Card containerStyle={{ ...styles.containerUploadComment, padding: 10, paddingBottom: 0, marginBottom: -10, width: 300 }}>
                {item.hasEvidence &&
                    <>
                        <View style={{ backgroundColor: '#0086C9', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 10, paddingBottom: 0, marginBottom: -20 }}>
                            {/* <Text style={{ marginBottom: 20, color: '#fff', marginTop: 7 }}>{getAdditionalInfo(index)}</Text> */}
                        </View>
                        <ImageUpload index={index} evidence={item.evidence} tipe='evidence' type={item.type} roleID={roleID} />
                    </>}
                <Comment item={item} createComment={createComment} handleApprove={handleApprove} />
            </Card>
        </View>
    )
}

const SafetyTab = ({ dataQuestions, setIndex, setSelectedSection, allEvidenceList, createComment }: any) => {
    console.log("🚀 ~ SafetyTab ~ dataQuestions:", dataQuestions)
    const [newDataQuestion, setNewDataQuestion] = useState([]) as any;
    // const [isRevise, setIsRevise] = useState(false);

    const accountData = useSelector(selectAccount);
    const roleID = accountData.account.roleid;
    const userID = accountData.account.id;
    const email = accountData.account.email;

    const handlePrev = () => {
        setIndex(1);
    }

    const handleApprove = async (item: any) => {
        // const param = {
        //     questionId: item.questionId,
        //     eventId: item.eventId,
        //     venueId: item.venueId,
        //     userId: userID,
        //     isApproved: true,
        //     createdBy: email
        // }

        // const response = await Verify(param);
        // if (response.status === HttpStatusCode.Ok) {
        //     // keluarin modal sukses
        // }
    }

    // const handleRevise = (item: any) => {
    //     console.log("🚀 ~ handleRevise ~ item:", item)
    //     setIsRevise(!isRevise);

    //     // const param = {
    //     //     questionId: item.questionId,
    //     //     eventId: item.eventId,
    //     //     venueId: item.venueId,
    //     //     userId: userID,
    //     //     isApproved: false,
    //     //     createdBy: email
    //     // }

    //     // const response = await Verify(param);
    //     // if (response.status === HttpStatusCode.Ok) {
    //     //     //keluarin modal sukses

    //     // }
    // }

    useEffect(() => {
        setSelectedSection('Safety');
        const arr = [...dataQuestions];
        let newArr: any[] = [];

        arr.forEach((el: any) => {
            const obj = { ...el, expanded: true };
            newArr.push(obj);
        });

        setNewDataQuestion(newArr);
    }, [dataQuestions]);

    useEffect(() => {
        setSelectedSection('Safety');
    }, []);

    const getMyQuestion = (name: string) => {
        if (name.length > 15) {
            return name?.slice(0, 12) + ' ...'
        }

        return name;
    }

    return (
        <>
            <View style={{ paddingVertical: 10 }}>
                <HeadTab />
                <Divider />
                {newDataQuestion?.map((item: any, index: number) => {
                    return (
                        <Card containerStyle={{ borderRadius: 10 }} key={item.name}>
                            <ListItem.Accordion
                                containerStyle={styles.listItemAccordionContainer}
                                content={
                                    <>
                                        <Image source={QuestionFileImage} style={styles.image} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                <>
                                                    <View style={styles.containerTitle}>
                                                        <Text style={styles.questionName}>{getMyQuestion(item.name)}</Text>
                                                        <ChipStatus status={item.type} />
                                                        <Text>{item.status}</Text>
                                                    </View>
                                                </>
                                            </ListItem.Title>
                                        </ListItem.Content>
                                    </>
                                }
                                isExpanded={true}
                                onPress={() => {
                                    // handleChangeExpanded(index);
                                }}
                                icon={<IconExpand />}
                            >
                                <ListItem containerStyle={styles.listItemContainer}>
                                    <ListItem.Content>
                                        <ListQuestions item={item} index={index} roleID={roleID} createComment={createComment} handleApprove={handleApprove} />
                                    </ListItem.Content>
                                </ListItem>
                            </ListItem.Accordion>
                        </Card>
                    )
                })}

                {/* <QuestionAnswered />
                <ListAttachment allEvidenceList={allEvidenceList} /> */}

                <View style={styles.buttonActionContainer}>
                    <Button type='outline' buttonStyle={styles.buttonClose} titleStyle={{ color: '#000' }}>Close</Button>
                    <Button type='outline' buttonStyle={styles.buttonPrev} titleStyle={{ color: '#000' }} onPress={handlePrev}>Prev</Button>
                </View>
            </View>
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
    buttonClose: {
        width: 80,
        marginRight: 5,
        borderRadius: 10,
        borderColor: '#000'
    },
    buttonPrev: {
        width: 80,
        marginRight: 5,
        borderRadius: 10,
        borderColor: '#000'
    },
    buttonNext: {
        width: 80,
        borderRadius: 10,
        backgroundColor: '#0D5B95'
    },
    buttonSave: {
        width: 80,
        marginRight: 5,
        borderRadius: 10,
        borderColor: '#000'
    },
    container: {
        marginTop: 60,
        backgroundColor: '#408EC9',
    },
    containerTitle: {
        display: 'flex',
        flexDirection: 'row'
    },
    containerUploadComment: {
        borderRadius: 10,
        backgroundColor: '#F2F4F7',
        width: '100%',
        marginLeft: 0
    },
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
    listItemAccordionContainer: {
        backgroundColor: '#fff',
        paddingLeft: 0,
        marginLeft: -10,
        marginRight: -10
    },
    listItemContainer: {
        backgroundColor: '#fff',
        paddingTop: 0,
        marginHorizontal: -10,
        marginTop: 10
    },
    titleTab: {
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10
    },
    questionName: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 10,
        marginRight: 20
    }
});

export default SafetyTab;
