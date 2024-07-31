import { useEffect, useState } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { GetEventDetailList, GetEventDetailStatusList } from '../services/EventDetail';
import { EventListBodyContainer, EventListHeadContainer } from '../containers';
import axios from 'axios';

const Event: React.FunctionComponent<any> = () => {
  const [data, setData] = useState({}) as any;
  const [dataDashboard, setDataDashboard] = useState({}) as any;
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');

  const params = {
    isDraft: false,
    status: selectedStatus === 'All Status' ? '' : selectedStatus,
    pageNumber: 1,
    pageSize: 100,
    email: ''
  };

  const fetchEventDashboard = async () => {
    try {
      const response = await GetEventDetailStatusList('');
      if (response.status === axios.HttpStatusCode.Ok) {
        setDataDashboard(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const fetchEventList = async () => {
    try {
      const response = await GetEventDetailList(params);
      if (response.status === axios.HttpStatusCode.Ok) {
        setData(response.data);
        setIsLoaded(true);
      }
    } catch (error) {
      console.error(error);
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    fetchEventDashboard();
    fetchEventList();
  }, []);

  useEffect(() => {
    fetchEventDashboard();
    fetchEventList();
  }, [selectedStatus]);

  return (
    <ScrollView>
      <EventListHeadContainer dashboardData={dataDashboard} />
      {isLoaded && <EventListBodyContainer data={data} setSelectedStatus={setSelectedStatus} />}
    </ScrollView>
  );
};

export default Event;