import { ScrollView } from 'react-native-gesture-handler';

import useEffectEvent from '../hooks/useEffectEvent';

import { EventDraftListBodyContainer, EventDraftListHeadContainer } from '../containers';

const Event: React.FunctionComponent<any> = () => {
  const [isError, isModalVisible, handleOk, errorData, dataDashboard, data, isLoaded, setSelectedSearch, setSelectedStatus, totalItemRequest, handleShowMore] = useEffectEvent(true);

  return (
    <ScrollView>
      <EventDraftListHeadContainer />
      {isLoaded && <EventDraftListBodyContainer data={data} setSelectedSearch={setSelectedSearch} totalItemRequest={totalItemRequest} handleShowMore={handleShowMore}/>}
    </ScrollView>
  );
};

export default Event;