import { useState, useEffect } from 'react';

import axios from 'axios';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

import { GetAllQuestion } from '../services/QuestionService';
import { GetVenueByKeyword } from '../services/VenueService';
import { selectUrlParam } from '../redux/reducers/urlParamSlice';

import { CreateVenueBodyContainer, CreateVenueHeadContainer } from '../containers';
import { ModalError } from '../components';

const CreateVenue: React.FunctionComponent<any> = () => {
  const [dataVenue, setDataVenue] = useState([]) as any;
  const [dataQuestions, setDataQuestions] = useState([]) as any;
  const [isError, setIsError] = useState(false);
  const [errorData, setErrorData] = useState({}) as any;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedVenueID, setSelectedVenueID] = useState('');

  const urlParamData = useSelector(selectUrlParam);
  const isDraft = urlParamData.isDraft;

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
    venueId: selectedVenueID,
    eventId: 'b8810064-a180-4693-a90e-96aa992447e7'
  }

  const fetchQuestionList = async () => {
    const response = await GetAllQuestion(paramQuestion);
    if (response?.status === axios.HttpStatusCode.Ok) {
      const filteredData = response.data.filter((x: any) => ['Venue', 'Both'].includes(x.type));
      setDataQuestions(filteredData);
      setIsError(false);
      setErrorData({});
    } else {
      setIsError(true);
      setIsModalVisible(true);
      setErrorData(response?.message);
    }
  }

  useEffect(() => {
    fetchVenueList();
  }, [selectedSearch]);

  useEffect(() => {
    if (selectedVenueID) {
      fetchQuestionList();
    }
  }, [selectedSection, selectedVenueID]);

  useEffect(() => {
    fetchQuestionList();
  }, [])

  return (
    <ScrollView>
      {isError && <ModalError isModalVisible={isModalVisible} handleOk={handleOk} statusCode={errorData?.status} message={errorData?.message} />}
      <CreateVenueHeadContainer />
      <CreateVenueBodyContainer isDraft={isDraft} dataVenue={dataVenue} setSelectedSearch={setSelectedSearch} setSelectedVenueID={setSelectedVenueID} setSelectedSection={setSelectedSection} dataQuestions={dataQuestions} />
    </ScrollView>
  );
};

export default CreateVenue;