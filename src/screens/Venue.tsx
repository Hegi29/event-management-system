import { useState, useEffect } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { VenueListBodyContainer, VenueListHeadContainer } from '../containers';
import { GetVenueList } from '../services/VenueService';
import { ModalError } from '../components';

const Venue: React.FunctionComponent<any> = () => {
  const [data, setData] = useState({}) as any;
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorData, setErrorData] = useState({}) as any;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  }

  // const params = {
  //   isDraft: false,
  //   status: selectedStatus,
  //   // pageNumber: 1,
  //   pageSize: 10,
  //   email: ''
  // };

  const fetchVenueList = async () => {
    const response = await GetVenueList();
    if (response?.status === 200) {
      setData(response.data);
      setIsLoaded(true);
      setIsError(false);
      setErrorData({});
    } else {
      setIsError(true);
      setIsModalVisible(true);
      setErrorData(response);
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    fetchVenueList();
  }, []);

  useEffect(() => {
    fetchVenueList();
  }, [selectedStatus]);

  return (
    <ScrollView>
      {isError && <ModalError isModalVisible={isModalVisible} handleOk={handleOk} statusCode={errorData.status} message={errorData.message} />}
      <VenueListHeadContainer />
      {isLoaded && <VenueListBodyContainer data={data} setSelectedStatus={setSelectedStatus} />}
    </ScrollView>
  );
};

export default Venue;