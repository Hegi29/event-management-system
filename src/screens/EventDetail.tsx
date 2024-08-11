import { useEffect, useState } from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import axios, { HttpStatusCode } from 'axios';
import { useSelector } from 'react-redux';

import DetailEventHeadContainer from '../containers/DetailEventHeadContainer';
import DetailEventBodyContainer from '../containers/DetailEventBodyContainer';
import { selectAccount } from '../redux/reducers/accountSlice';
import { GetEventByID } from '../services/EventDetail';
import { GetAllQuestion, GetAllQuestionToVerify } from '../services/QuestionService';
import PostComment from '../services/CommentService';

const EventDetail: React.FunctionComponent<any> = ({ route }: any) => {
  const { eventId } = route.params;
  const { venueId } = route.params;

  const accountData = useSelector(selectAccount);

  const [dataDetail, setDataDetail] = useState(null);
  const [selectedSection, setSelectedSection] = useState('');
  const [dataQuestions, setDataQuestions] = useState([]) as any;
  const [allEvidenceList, setAllEvidenceList] = useState([]) as any;

  const isDraft = false;
  const roleID = accountData.account.roleid;

  const fetchEventDetail = async () => {
    const response = await GetEventByID(eventId);
    if (response?.status === axios.HttpStatusCode.Ok) {
      setDataDetail(response.data);
    }
  }

  const fetchQuestions = async () => {
    const param = { eventId, venueId, selectedSection };
    const response = await GetAllQuestion(param);
    if (response?.status === axios.HttpStatusCode.Ok) {
      setDataQuestions(response.data);
    }
  }

  const fetchQuestionsVerificator = async () => {
    let sectionName = '';

    switch (roleID) {
      case '2':
        sectionName = 'Health';
        break;
      case '3':
        sectionName = 'Security';
        break;
      case '4':
        sectionName = 'Safety';
        break;
      case '5':
        sectionName = 'Environment';
        break;
    }

    const param = { eventId, venueId, sectionName };
    const response = await GetAllQuestionToVerify(param);
    if (response?.status === axios.HttpStatusCode.Ok) {
      setDataQuestions(response.data.data);
    }
  }

  const createComment = async () => {
    const obj = {

    };

    const response = await PostComment(obj) as any;
    if (response?.status.code === HttpStatusCode.Ok) {
      // sukses bikin komen munculin modal sukses
    }
  }

  useEffect(() => {
    fetchEventDetail();
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (selectedSection === 'Health' || selectedSection === 'Security' || selectedSection === 'Safety' || selectedSection === 'Environment') {
      fetchQuestionsVerificator();
    }
  }, [selectedSection]);

  return (
    <ScrollView>
      <DetailEventHeadContainer />
      <DetailEventBodyContainer isDraft={isDraft} setSelectedSection={setSelectedSection} dataQuestions={dataQuestions} allEvidenceList={allEvidenceList} dataDetail={dataDetail} createComment={createComment} />
    </ScrollView>
  );
};

export default EventDetail;