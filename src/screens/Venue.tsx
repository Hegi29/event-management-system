import { ScrollView } from 'react-native-gesture-handler';

import { VenueListBodyContainer, VenueListHeadContainer } from '../containers';

const Venue: React.FunctionComponent<any> = ({ navigation }) => {
  return (
    <ScrollView>
      <VenueListHeadContainer navigation={navigation} />
      <VenueListBodyContainer/>
    </ScrollView>
  );
};

export default Venue;