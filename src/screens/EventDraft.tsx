import { ScrollView } from 'react-native-gesture-handler';

import { EventDraftListBodyContainer, EventDraftListHeadContainer } from '../containers';

const Event: React.FunctionComponent<any> = ({ navigation }) => {
  return (
    <ScrollView>
      <EventDraftListHeadContainer navigation={navigation} />
      <EventDraftListBodyContainer />
    </ScrollView>
  );
};

export default Event;