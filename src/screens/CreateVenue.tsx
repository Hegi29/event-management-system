import { ScrollView } from 'react-native-gesture-handler';

import { CreateVenueBodyContainer, CreateVenueHeadContainer } from '../containers';

const CreateVenue: React.FunctionComponent<any> = () => {
  const isDraft = true; // true jika dari event draft

  return (
    <ScrollView>
      <CreateVenueHeadContainer />
      <CreateVenueBodyContainer isDraft={isDraft} />
    </ScrollView>
  );
};

export default CreateVenue;