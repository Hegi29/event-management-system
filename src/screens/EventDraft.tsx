import { useEffect, useState } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { EventDraftListBodyContainer, EventDraftListHeadContainer } from '../containers';
import { GetEventDetailList } from '../services/EventDetail';

const Event: React.FunctionComponent<any> = ({ navigation }) => {
  const [data, setData] = useState({}) as any;
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');

  const params = {
    isDraft: true,
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
      <EventDraftListHeadContainer navigation={navigation} />
      {isLoaded && <EventDraftListBodyContainer data={data} setSelectedStatus={setSelectedStatus} />}
    </ScrollView>
  );
};

export default Event;