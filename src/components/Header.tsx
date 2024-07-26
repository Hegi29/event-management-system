import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import { Header as HeaderRNE, Icon } from '@rneui/themed';

type HeaderComponentProps = {
  title: string;
  view?: string;
};

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {

  const docsNavigate = () => {
    // Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
  };

  const playgroundNavigate = () => {
    // Linking.openURL(`https://@rneui/themed.js.org/#/${props.view}`);
  };

  return (
    <HeaderRNE
      leftComponent={{
        text: props.title,
        style: styles.heading,
        icon: 'menu'
      }}
      leftContainerStyle={{
        paddingLeft: 10
      }}
      placement='left'
      /* TODO: kasih logo pertamina di leftComponent */
      // backgroundImage={{
      //   uri: BASE_URI,
      //   width: 1,
      //   height: 1
      // }}
      // centerComponent={{ text: props.title, style: styles.heading }}
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={docsNavigate}>
            <Icon name="notifications" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={playgroundNavigate}
          >
            <Icon name="menu" color="white" />
          </TouchableOpacity>
        </View>
      } />
  );
};

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
    paddingLeft: 30
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  }
});

export default Header;