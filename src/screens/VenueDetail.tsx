import { ScrollView } from 'react-native-gesture-handler';

import { CreateEventBodyContainer, CreateEventHeadContainer } from '../containers';

const VenueDetail: React.FunctionComponent<any> = () => {
  const isDraft = true; // true jika dari event draft

  return (
    <ScrollView>
      <CreateEventHeadContainer />
      <CreateEventBodyContainer isDraft={isDraft} />
    </ScrollView>
  );
};

export default VenueDetail;