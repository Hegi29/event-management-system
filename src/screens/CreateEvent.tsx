import { useEffect, useState } from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setProgressEnvironment, setProgressHealth, setProgressSafety, setProgressSecurity, setTotalAnsweredQuestion, setTotalQuestion } from '../redux/reducers/answerSlice';
import { setHealthEvidenceList, setSafetyEvidenceList, setSecurityEvidenceList, setEnvironmentEvidenceList } from '../redux/reducers/evidenceSlice';
import { selectUrlParam } from '../redux/reducers/urlParamSlice';
import { selectCreateEvent } from '../redux/reducers/createEventSlice';
import { GetVenueByKeyword } from '../services/VenueService';
import { GetAllQuestion, GetAllQuestionEvidenceStatus, GetAllQuestionStatus } from '../services/QuestionService';

import { CreateEventBodyContainer, CreateEventHeadContainer } from '../containers';
import { ModalError } from '../components';

const CreateEvent: React.FunctionComponent<any> = () => {
  const urlParamData = useSelector(selectUrlParam);
  const dispatch = useDispatch();

  const isDraft = urlParamData.isDraft;

  const [dataVenue, setDataVenue] = useState([]) as any;
  const [dataQuestions, setDataQuestions] = useState([]) as any;
  const [isError, setIsError] = useState(false);
  const [errorData, setErrorData] = useState({}) as any;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedVenueID, setSelectedVenueID] = useState('');
  const [allEvidenceList, setAllEvidenceList] = useState([]) as any;

  const handleOk = () => {
    setIsModalVisible(false);
  }

  const fetchVenueList = async () => {
    const response = await GetVenueByKeyword(selectedSearch);
    if (response?.status === axios.HttpStatusCode.Ok) {
      setDataVenue(response.data);
      setIsError(false);
      setErrorData({});
    } else {
      setIsError(true);
      setIsModalVisible(true);
      setErrorData(response?.message);
    }
  }

  const paramQuestion = {
    sectionName: selectedSection,
    venueId: '243255c6-1119-4475-9607-0bf160d84dfc', //'c24d9e75-d9f2-45a7-8de9-ea466f3a88f6', //eventData.venueDetail.venueId,
    //eventId: 'aa5a1e13-910c-43a0-ae98-f9b18ad297ba'//eventData.eventDetail.eventId
    eventId: '96f14c32-0f75-419b-abb0-637cc3efe282',
  }

  const fetchQuestionList = async () => {
    if (selectedSection === 'EventDetail' || selectedSection === 'VenueDetail') {
      return;
    }

    const response = await GetAllQuestion(paramQuestion);
    if (response?.status === axios.HttpStatusCode.Ok) {
      setDataQuestions(response.data);
      setIsError(false);
      setErrorData({});
    }
  }

  const fetchQuestionEvidenceStatus = async () => {
    const response = await GetAllQuestionEvidenceStatus(paramQuestion);
    if (response?.status === axios.HttpStatusCode.Ok) {
      const healthEvidence = response.data.data.find((x: any) => x.section === 'Health');
      if (healthEvidence) {
        dispatch(setHealthEvidenceList(healthEvidence.evidenceList));
      }

      const safetyEvidence = response.data.data.find((x: any) => x.section === 'Safety');
      if (safetyEvidence) {
        dispatch(setSafetyEvidenceList(safetyEvidence.evidenceList));
      }

      const securityEvidence = response.data.data.find((x: any) => x.section === 'Security');
      if (securityEvidence) {
        dispatch(setSecurityEvidenceList(securityEvidence.evidenceList));
      }

      const environmentEvidence = response.data.data.find((x: any) => x.section === 'Environment');
      if (environmentEvidence) {
        dispatch(setEnvironmentEvidenceList(environmentEvidence.evidenceList));
      }

      const allData = [...healthEvidence.evidenceList, safetyEvidence.evidenceList, securityEvidence.evidenceList, environmentEvidence.evidenceList];
      const flattenData = ([] as string[]).concat(...allData);
      // dispatch(selectAllEvidenceList(flattenData));
      setAllEvidenceList(flattenData);
    }
  }

  const fetchQuestionStatus = async () => {
    const response = await GetAllQuestionStatus(paramQuestion);
    if (response?.status === axios.HttpStatusCode.Ok) {
      dispatch(setTotalQuestion(response.data.data.totalQuestion));
      dispatch(setTotalAnsweredQuestion(response.data.data.totalAnsweredQuestion));

      dispatch(setProgressHealth({ answered: response.data.data.health.answeredQuestion, question: response.data.data.health.totalQuestion }));
      dispatch(setProgressSecurity({ answered: response.data.data.security.answeredQuestion, question: response.data.data.security.totalQuestion }));
      dispatch(setProgressSafety({ answered: response.data.data.safety.answeredQuestion, question: response.data.data.safety.totalQuestion }));
      dispatch(setProgressEnvironment({ answered: response.data.data.environment.answeredQuestion, question: response.data.data.environment.totalQuestion }));
    }
  }

  useEffect(() => {
    fetchVenueList();
  }, [selectedSearch]);

  useEffect(() => {
    if (selectedSection !== 'EventDetail' && selectedSection !== 'VenueDetail') {
      fetchQuestionList();
      fetchQuestionStatus();
    }

    fetchQuestionEvidenceStatus();
  }, [selectedSection, selectedVenueID]);

  return (
    <ScrollView>
      {isError && <ModalError isModalVisible={isModalVisible} handleOk={handleOk} statusCode={errorData?.status} message={errorData?.message} />}
      <CreateEventHeadContainer />
      <CreateEventBodyContainer isDraft={isDraft} dataVenue={dataVenue} setSelectedSearch={setSelectedSearch} setSelectedVenueID={setSelectedVenueID} setSelectedSection={setSelectedSection} dataQuestions={dataQuestions} allEvidenceList={allEvidenceList} />
    </ScrollView>
  );
};

export default CreateEvent;