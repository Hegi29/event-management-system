import { ScrollView } from 'react-native-gesture-handler';

import { ReportBodyContainer, ReportHeadContainer } from '../containers';

const Report: React.FunctionComponent<any> = () => {
  return (
    <ScrollView>
      <ReportHeadContainer />
      <ReportBodyContainer />
    </ScrollView>
  );
};

export default Report;