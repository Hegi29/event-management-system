import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from '@rneui/themed';

import { CreateEvent, CreateVenue, Event, EventDraft, Home, Report, Setting, Support, Users, Venue } from '../screens';
import { APP_TITLE } from '../constants';
import CustomDrawerContent from './CustomDrawer';
import { useEffect } from 'react';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({navigationRef}: any) => {
// useEffect(() => {
//   console.log('x: ', props.navigationRef.getCurrentRoute());
// }, [props]);

  return (
    <Drawer.Navigator screenOptions={({ navigation }) => ({
      drawerStyle: {
        backgroundColor: '#408EC9'
      },
      drawerPosition: 'right',
      title: APP_TITLE,
      // header: () => <Image source={{ uri: 'https://i.pinimg.com/736x/c6/82/73/c68273edeb333a7f3765c02ed509b55d.jpg' }} style={styles.image} />,
      headerLeft: () => <></>,
      headerRight: () => <Icon name="menu" style={{ paddingRight: 15 }} onPress={navigation.toggleDrawer} />
    })}
      drawerContent={(props) => <CustomDrawerContent {...props} navigationRef={navigationRef} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Event" component={Event} />
      <Drawer.Screen name="EventDraft" component={EventDraft} />
      <Drawer.Screen name="CreateEvent" component={CreateEvent} />
      <Drawer.Screen name="Venue" component={Venue} />
      <Drawer.Screen name="CreateVenue" component={CreateVenue} />
      <Drawer.Screen name="Report" component={Report} />
      <Drawer.Screen name="Users" component={Users} />
      <Drawer.Screen name="Support" component={Support} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
}

// const styles = StyleSheet.create({
//   image: {
//       width: 40,
//       height: 40,
//       marginTop: 80,
//       borderRadius: 10,
//       // marginBottom: 20
//   }
// })

export default DrawerNavigation