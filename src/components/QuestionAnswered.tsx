import { StyleSheet, View } from "react-native";

import { useSelector } from "react-redux";
import { Divider, Text } from "@rneui/themed";

import { selectAnsweredQuestionTotal, selectAnswerTab, selectQuestionTotal } from "../redux/reducers/answerSlice";
import getLengthProgress from "../utils/Progress";

const QuestionAnswered = () => {
    const answerTab = useSelector(selectAnswerTab);
    const totalQuestion = useSelector(selectQuestionTotal);
    const answeredTotal = useSelector(selectAnsweredQuestionTotal);

    return (
        <View style={{ padding: 10 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>Question Answered</Text>
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20, color: '#F79009' }}>{answeredTotal}/{totalQuestion}</Text>
            </View>
            <Divider />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Health Section</Text>
                    <Text style={{ marginTop: 5 }}>{answerTab.health.answered}/{answerTab.health.question} question answered</Text>
                </View>
                <View style={styles.progressBar}>
                    <View style={{ backgroundColor: "#1072BA", width: getLengthProgress(answerTab.health.answered, answerTab.health.question) as any }} />
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Security Section</Text>
                    <Text style={{ marginTop: 5 }}>{answerTab.security.answered}/{answerTab.security.question} question answered</Text>
                </View>
                <View style={styles.progressBar}>
                    <View style={{ backgroundColor: "#1072BA", width: getLengthProgress(answerTab.security.answered, answerTab.security.question) as any }} />
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Safety Section</Text>
                    <Text style={{ marginTop: 5 }}>{answerTab.safety.answered}/{answerTab.safety.question} question answered</Text>
                </View>
                <View style={styles.progressBar}>
                    <View style={{ backgroundColor: "#1072BA", width: getLengthProgress(answerTab.safety.answered, answerTab.safety.question) as any }} />
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Environment Section</Text>
                    <Text style={{ marginTop: 5 }}>{answerTab.environment.answered}/{answerTab.environment.question} question answered</Text>
                </View>
                <View style={styles.progressBar}>
                    <View style={{ backgroundColor: "#1072BA", width: getLengthProgress(answerTab.environment.answered, answerTab.environment.question) as any }} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBar: {
        width: '30%',
        height: 15,
        backgroundColor: '#EAECF0',
        borderRadius: 4,
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 5
    },
})

export default QuestionAnswered;