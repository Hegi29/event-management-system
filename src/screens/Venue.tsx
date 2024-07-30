import { useState, useEffect } from 'react';

import { ScrollView } from 'react-native-gesture-handler';

import { VenueListBodyContainer, VenueListHeadContainer } from '../containers';
import { GetVenueList } from '../services/VenueService';

const Venue: React.FunctionComponent<any> = ({ navigation }) => {
  const [data, setData] = useState({}) as any;
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');

  // const params = {
  //   isDraft: false,
  //   status: selectedStatus,
  //   // pageNumber: 1,
  //   pageSize: 10,
  //   email: ''
  // };

  const fetchVenueList = async () => {
    try {
      const response = await GetVenueList();
      if (response) {
        setData(response.data.data);
        setIsLoaded(true);
      }
    } catch (error) {
      console.error(error);
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    fetchVenueList();
  }, [selectedStatus]);

  return (
    <ScrollView>
      <VenueListHeadContainer navigation={navigation} />
      {isLoaded && <VenueListBodyContainer data={data} setSelectedStatus={setSelectedStatus}/>}
    </ScrollView>
  );
};

export default Venue;