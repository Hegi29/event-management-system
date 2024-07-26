import { ScrollView } from 'react-native-gesture-handler';

import { EventListBodyContainer, EventListHeadContainer } from '../containers';

const Event: React.FunctionComponent<any> = ({ navigation }) => {
  return (
    <ScrollView>
      <EventListHeadContainer navigation={navigation} />
      <EventListBodyContainer />
    </ScrollView>
  );
};

export default Event;