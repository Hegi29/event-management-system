import { ScrollView } from 'react-native-gesture-handler';

import { ReportBodyContainer, ReportHeadContainer } from '../containers';

const Report: React.FunctionComponent<any> = ({ navigation }) => {
  return (
    <ScrollView>
      <ReportHeadContainer navigation={navigation} />
      <ReportBodyContainer />
    </ScrollView>
  );
};

export default Report;