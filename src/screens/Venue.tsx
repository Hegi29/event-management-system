import { useState, useEffect } from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import { VenueListBodyContainer, VenueListHeadContainer } from '../containers';
import { GetVenueList, GetVenueStatusList } from '../services/VenueService';
import { ModalError } from '../components';

const Venue: React.FunctionComponent<any> = () => {
  const [data, setData] = useState([]) as any;
  const [dashboardData, setDashboardData] = useState([]) as any;
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedSearch, setSelectedSearch] = useState('');

  const [isError, setIsError] = useState(false);
  const [errorData, setErrorData] = useState({}) as any;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  }

  const params = {
    isDraft: false,
    status: selectedStatus === 'All Status' ? '' : (selectedStatus === 'Registered Venue' ? 'Review Complete' : selectedStatus),
    pageNumber: 1,
    pageSize: 100,
    keyword: selectedSearch,
    email: ''
  };

  const fetchVenueDashboard = async () => {
    try {
      const response = await GetVenueStatusList();
      if (response.status === axios.HttpStatusCode.Ok) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const fetchVenueList = async () => {
    const response = await GetVenueList(params);
    if (response?.status === axios.HttpStatusCode.Ok) {
      setData(response.data);
      setIsError(false);
      setErrorData({});
    } else {
      setIsError(true);
      setIsModalVisible(true);
      setErrorData(response);
    }
  }

  useEffect(() => {
    fetchVenueDashboard();
    fetchVenueList();
  }, []);

  useEffect(() => {
    fetchVenueDashboard();
    fetchVenueList();
  }, [selectedStatus, selectedSearch]);

  return (
    <ScrollView>
      {isError && <ModalError isModalVisible={isModalVisible} handleOk={handleOk} statusCode={errorData?.status} message={errorData?.message} />}
      <VenueListHeadContainer dashboardData={dashboardData} />
      <VenueListBodyContainer data={data} setSelectedSearch={setSelectedSearch} setSelectedStatus={setSelectedStatus} />
    </ScrollView>
  );
};

export default Venue;