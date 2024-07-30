import { ScrollView } from 'react-native-gesture-handler';

import { CreateVenueBodyContainer, CreateVenueHeadContainer } from '../containers';

const CreateVenue: React.FunctionComponent<any> = () => {
  return (
    <ScrollView>
      <CreateVenueHeadContainer />
      <CreateVenueBodyContainer />
    </ScrollView>
  );
};

export default CreateVenue;