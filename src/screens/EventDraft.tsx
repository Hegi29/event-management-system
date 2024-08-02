import { useEffect, useState } from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import { EventDraftListBodyContainer, EventDraftListHeadContainer } from '../containers';
import { GetEventDetailList } from '../services/EventDetail';

const Event: React.FunctionComponent<any> = () => {
  const [data, setData] = useState({}) as any;
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedSearch, setSelectedSearch] = useState('');

  const params = {
    isDraft: true,
    status: selectedStatus,
    pageNumber: 1,
    pageSize: 100,
    keyword: selectedSearch
  };

  const fetchEventList = async (param: any) => {
    try {
      const response = await GetEventDetailList(param);
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
    fetchEventList(params);
  }, [selectedStatus, selectedSearch]);
  
  return (
    <ScrollView>
      <EventDraftListHeadContainer />
      {isLoaded && <EventDraftListBodyContainer data={data} setSelectedSearch={setSelectedSearch}  setSelectedStatus={setSelectedStatus} />}
    </ScrollView>
  );
};

export default Event;