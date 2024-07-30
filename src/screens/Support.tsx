import { StyleSheet, View } from 'react-native';

import { Text, Card } from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';

const Support: React.FunctionComponent<any> = () => {
  return (
    <ScrollView>
      <Card containerStyle={styles.container}>
        <Text style={styles.title}>Support</Text>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10, paddingBottom: 30
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
    marginHorizontal: 0,
    color: '#1a6fb2'
  }
});

export default Support;