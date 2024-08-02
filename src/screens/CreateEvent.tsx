import { useEffect, useState } from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import { CreateEventBodyContainer, CreateEventHeadContainer } from '../containers';
import { GetVenueList } from '../services/VenueService';
import { ModalError } from '../components';

const CreateEvent: React.FunctionComponent<any> = () => {
  const [dataVenue, setDataVenue] = useState([]) as any;

  const [isError, setIsError] = useState(false);
  const [errorData, setErrorData] = useState({}) as any;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isDraft = false; // true jika dari event draft

  const handleOk = () => {
    setIsModalVisible(false);
  }

  const params = {
    isDraft: false,
    status: 'Review Complete',
    pageNumber: 1,
    pageSize: 10
  };

  const fetchVenueList = async () => {
    const response = await GetVenueList(params);
    if (response?.status === axios.HttpStatusCode.Ok) {
      setDataVenue(response.data);
      setIsError(false);
      setErrorData({});
    } else {
      setIsError(true);
      setIsModalVisible(true);
      setErrorData(response);
    }
  }

  useEffect(() => {
    fetchVenueList();
  }, []);

  return (
    <ScrollView>
      {isError && <ModalError isModalVisible={isModalVisible} handleOk={handleOk} statusCode={errorData?.status} message={errorData?.message} />}
      <CreateEventHeadContainer />
      <CreateEventBodyContainer isDraft={isDraft} dataVenue={dataVenue}/>
    </ScrollView>
  );
};

export default CreateEvent;