import { useEffect, useState } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { GetEventDetailList } from '../services/EventDetail';
import { EventListBodyContainer, EventListHeadContainer } from '../containers';

const Event: React.FunctionComponent<any> = () => {
  const [data, setData] = useState({}) as any;
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');

  const params = {
    isDraft: false,
    status: selectedStatus,
    // pageNumber: 1,
    pageSize: 10,
    email: ''
  };

  const fetchEventList = async () => {
    try {
      const response = await GetEventDetailList(params);
      if (response) {
        setData(response);
        setIsLoaded(true);
      }
    } catch (error) {
      console.error(error);
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    fetchEventList();
  }, [selectedStatus]);

  return (
    <ScrollView>
      <EventListHeadContainer />
      {isLoaded && <EventListBodyContainer data={data} setSelectedStatus={setSelectedStatus} />}
    </ScrollView>
  );
};

export default Event;