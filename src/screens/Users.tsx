import { ScrollView } from 'react-native-gesture-handler';

import { UsersBodyContainer, UsersHeadContainer } from '../containers';

const Users: React.FunctionComponent<any> = ({ navigation }) => {
  return (
    <ScrollView>
      <UsersHeadContainer navigation={navigation} />
      <UsersBodyContainer />
    </ScrollView>
  );
};

export default Users;