import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Button, Card, CheckBox, Chip, Divider, Icon, ListItem, Text } from "@rneui/themed";
import { Image } from "@rneui/base";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { QuestionFileImage } from "../../assets/images";
import { selectCreateEvent } from "../../redux/reducers/createEventSlice";
import { selectAccount } from "../../redux/reducers/accountSlice";
import { setProgressHealth } from "../../redux/reducers/answerSlice";
import PostAnswer from "../../services/AnswerService";

import ModalSave from "../ModalSave";
import ImageUpload from "../ImageUpload";
import Comment from "../Comment";
import QuestionAnswered from "../QuestionAnswered";
import ListAttachment from "../ListAttachment";
import { selectUrlParam } from "../../redux/reducers/urlParamSlice";

const HeadTab = () => {
    return (
        <View style={{ paddingHorizontal: 10 }}>
            <Text h4 style={styles.titleTab}>Health Section</Text>
            <Text style={{ marginBottom: 20 }}>Please fill in the required data</Text>
        </View>
    )
}

const ChipStatus = ({ status }: { status: string }) => {
    return (
        <Chip
            title={status}
            type='outline'
            containerStyle={styles.chipContainer}
            titleStyle={styles.chipTitleStyle}
            buttonStyle={styles.chipButton}
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

const ListQuestions = ({ index, item, setAnswer, handleUploadFile, urlParamData }: any) => {
    // console.log("🚀 ~ ListQuestions ~ item:", item)
    const handleChange = (no: number, answer: string) => {
        setAnswer(no, answer);
        getAdditionalInfo(answer);
    }

    const getAdditionalInfo = (answer: string) => {
        if (item) {
            const info = item.additionalInfo.find((x: any) => x.option === item.myAnswer);
            if (info) {
                return info.message;
            }

            const found = item.additionalInfo.find((x: any) => x.option === answer);
            if (found) {
                return found.message;
            }
        }

        const found = item.additionalInfo.find((x: any) => x.option === answer);
        if (found) {
            return found.message;
        }

        const defaultInfo = item.additionalInfo.find((y: any) => y.option === 'Default');
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
                    onPress={() => handleChange(index, 'Ya')}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Ya'
                    disabled={!urlParamData.isCreateNewVenue && item.type === 'Venue'}
                />
                <CheckBox
                    checked={item.answer === 'Tidak'}
                    onPress={() => handleChange(index, 'Tidak')}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='Tidak'
                    disabled={!urlParamData.isCreateNewVenue && item.type === 'Venue'}
                />
            </View>
            <View style={{ marginLeft: -15 }}>
                <CheckBox
                    checked={item.answer == 'N/A'}
                    onPress={() => handleChange(index, 'N/A')}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title='N/A'
                    disabled={!urlParamData.isCreateNewVenue && item.type === 'Venue'}
                />
            </View>

            {/* disable kalo venue dan create event */}
            {(item.requiredEvidence) &&
                <Card containerStyle={{ ...styles.containerUploadComment, padding: 10, paddingBottom: 0, marginBottom: -10 }}>
                    <View style={{ backgroundColor: '#0086C9', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 10, paddingBottom: 0, marginBottom: -20 }}>
                        <Text style={{ marginBottom: 20, color: '#fff', marginTop: 7 }}>{getAdditionalInfo(index)}</Text>
                    </View>
                    <ImageUpload index={index} handleUploadFile={handleUploadFile} evidence={item.evidence} tipe='evidence' type={item.type} />
                    {/* <Comment item={item} /> */}
                </Card>
            }
        </View>
    )
}

const HealthTab = ({ setIndex, isDraft, tipe, setSelectedSection, dataQuestions, setNoTabValid, allEvidenceList }: any) => {
    const accountData = useSelector(selectAccount);
    const eventDetailData = useSelector(selectCreateEvent);
    const urlParamData = useSelector(selectUrlParam);
    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState([]) as any;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalSuccessVisible, setIsModalSuccessVisible] = useState(false);
    const [listQuestionAnswer, setListQuestionAnswer] = useState([]) as any;
    const [newDataQuestion, setNewDataQuestion] = useState([]) as any;

    const email = accountData.account.actualemail;
    const eventId = eventDetailData.eventDetail.eventId;
    const venueId = eventDetailData.venueDetail.venueId;

    const setProgressAnswer = (value: number) => {
        dispatch(setProgressHealth(value))
    }

    const handleUploadFile = (item: any) => {
        // const found = listQuestionAnswer[item.no];
        // if (found) {
        //     let newArr = [...listQuestionAnswer];
        //     newArr[item.no].file = item.file;
        //     setListQuestionAnswer(newArr);
        // } else {
        //     const obj = { index: item.no, questionId: item.questionId, answer: item.answer, file: item.file }
        //     setListQuestionAnswer((q: any) => ([...q, obj]));
        // }
    }

    const dataMapper = () => {
        let result = {
            eventId,
            venueId,
            isDraft: true,
            createdBy: email
        };

        listQuestionAnswer.forEach((item: any) => {
            result = { ...result, [`${item.questionId}.questionId`]: item.questionId }
            result = { ...result, [`${item.questionId}.answer`]: item.answer }
            if (item.file) {
                result = { ...result, [`${item.questionId}.file`]: item.file }
            }
        });

        return result;
    }

    const handleNext = (values: any) => {
        const obj = dataMapper();
        handleOkSuccess(obj);

        // let validTab = [0, 1, 2, 3];
        // setNoTabValid(validTab);
    }

    const handleOkSuccess = async (obj: any) => {
        // HIT API answer create
        // const response = await PostAnswer(obj);
        // if (response?.status === axios.HttpStatusCode.Ok) {
        // tampilin modal jika sukses
        setIsModalSuccessVisible(!isModalSuccessVisible);
        // set progress jawaban
        // setProgressAnswer(listQuestionAnswer.length);
        // }

        // next ke step selanjutnya, jika data saved sudah di klik OK
        setIndex(tipe !== "venue" ? 3 : 2);
    }

    const handlePrev = () => {
        setIndex(tipe !== 'venue' ? 1 : 0);
    }

    const handleSave = () => {
        setIsModalVisible(!isModalVisible);
    }

    const save = () => {
        setIsModalVisible(!isModalVisible);
    }

    const discard = () => {
        setIsModalVisible(!isModalVisible);
    }

    const handleChangeExpanded = (index: number) => {
        let newArr = [...newDataQuestion];
        newArr[index].expanded = !newArr[index].expanded;
        setExpanded(newArr);
    }

    useEffect(() => {
        setSelectedSection('Health');
        const arr = [...dataQuestions];
        let newArr: any[] = [];

        arr.forEach((el: any) => {
            const obj = { ...el, expanded: true };
            newArr.push(obj);
        });

        setNewDataQuestion(newArr);
    }, [dataQuestions]);

    useEffect(() => {
        setSelectedSection('Health');
    }, []);

    const setAnswer = (no: number, answer: string) => {
        let arr = [...newDataQuestion];
        arr[no].answer = answer;
        setNewDataQuestion(arr);
    }

    return (
        <>
            <ModalSave isModalVisible={isModalVisible} discard={discard} save={save} />
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
                                                <View style={styles.containerTitle}>
                                                    <Text style={styles.questionName}>{item.name}</Text>
                                                    <ChipStatus status={item.type} />
                                                </View>
                                            </ListItem.Title>
                                        </ListItem.Content>
                                    </>
                                }
                                isExpanded={newDataQuestion[index].expanded}
                                onPress={() => {
                                    handleChangeExpanded(index);
                                }}
                                icon={<IconExpand />}
                            >
                                <ListItem containerStyle={styles.listItemContainer}>
                                    <ListItem.Content>
                                        <ListQuestions item={item} index={index} setAnswer={setAnswer} handleUploadFile={handleUploadFile} urlParamData={urlParamData} />
                                    </ListItem.Content>
                                </ListItem>
                            </ListItem.Accordion>
                        </Card>
                    )
                })}

                <QuestionAnswered />
                <ListAttachment allEvidenceList={allEvidenceList} />

                <View style={styles.buttonActionContainer}>
                    <Button type='outline' buttonStyle={styles.buttonClose} titleStyle={{ color: '#000' }}>Close</Button>
                    {isDraft && <Button type='outline' buttonStyle={styles.buttonSave} titleStyle={{ color: '#000' }} onPress={handleSave}>Save</Button>}
                    <Button type='outline' buttonStyle={styles.buttonPrev} titleStyle={{ color: '#000' }} onPress={handlePrev}>Prev</Button>
                    <Button buttonStyle={styles.buttonNext} onPress={handleNext}>Next</Button>
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

export default HealthTab;
