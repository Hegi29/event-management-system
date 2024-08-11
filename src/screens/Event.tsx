import { ScrollView } from 'react-native-gesture-handler';

import { EventListBodyContainer, EventListHeadContainer } from '../containers';
import { useEffectEvent } from '../hooks';
import { ModalError } from '../components';

const Event: React.FunctionComponent<any> = () => {
  const [isError, isModalVisible, handleOk, errorData, dataDashboard, data, isLoaded, setSelectedSearch, setSelectedStatus, totalItemRequest, handleShowMore] = useEffectEvent(false);

  return (
    <ScrollView>
      {isError && <ModalError isModalVisible={isModalVisible} handleOk={handleOk} statusCode={errorData?.status} message={errorData?.message} />}
      <EventListHeadContainer dashboardData={dataDashboard} />
      {isLoaded && <EventListBodyContainer data={data} setSelectedSearch={setSelectedSearch} setSelectedStatus={setSelectedStatus} totalItemRequest={totalItemRequest} handleShowMore={handleShowMore} />}
    </ScrollView>
  );
};

export default Event;