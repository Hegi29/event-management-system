import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { CreateEventBodyContainer, CreateEventHeadContainer } from '../containers';
import { selectUrlParam } from '../redux/reducers/urlParamSlice';

const VenueDetail: React.FunctionComponent<any> = () => {
  const urlParamData = useSelector(selectUrlParam);
  const isDraft = urlParamData.isDraft;

  return (
    <ScrollView>
      <CreateEventHeadContainer />
      <CreateEventBodyContainer isDraft={isDraft} />
    </ScrollView>
  );
};

export default VenueDetail;