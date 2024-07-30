import { ScrollView } from 'react-native-gesture-handler';

import { UsersBodyContainer, UsersHeadContainer } from '../containers';

const Users: React.FunctionComponent<any> = () => {
  return (
    <ScrollView>
      <UsersHeadContainer />
      <UsersBodyContainer />
    </ScrollView>
  );
};

export default Users;