import { ScrollView } from 'react-native-gesture-handler';

import { VenueListBodyContainer, VenueListHeadContainer } from '../containers';
import { ModalError } from '../components';
import { useEffectVenue } from '../hooks';

const Venue: React.FunctionComponent<any> = () => {
  const [isError, isModalVisible, handleOk, errorData, dashboardData, data, isLoaded, setSelectedSearch, setSelectedStatus, totalItemRequest, handleShowMore] = useEffectVenue();

  return (
    <ScrollView>
      {isError && <ModalError isModalVisible={isModalVisible} handleOk={handleOk} statusCode={errorData?.status} message={errorData?.message} />}
      <VenueListHeadContainer dashboardData={dashboardData} />
      {isLoaded && <VenueListBodyContainer data={data} setSelectedSearch={setSelectedSearch} setSelectedStatus={setSelectedStatus} totalItemRequest={totalItemRequest} handleShowMore={handleShowMore}/>}
    </ScrollView>
  );
};

export default Venue;