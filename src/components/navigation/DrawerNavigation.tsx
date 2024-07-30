import { StyleSheet } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { CreateEvent, CreateVenue, Event, EventDraft, Home, Report, Setting, Support, Users, Venue } from '../../screens';

import CustomDrawerContent from './CustomDrawer';
import TopLeftNav from './TopLeftNav';
import TopRightNav from './TopRightNav';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigationRef }: any) => {
  return (
    <Drawer.Navigator screenOptions={({ navigation }) => ({
      drawerStyle: styles.drawerBackground,
      drawerPosition: 'right',
      title: "",
      headerStyle: styles.headerBackground,
      headerLeft: () => <TopLeftNav />,
      headerRight: () => <TopRightNav navigation={navigation} />
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

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  drawerBackground: {
    backgroundColor: '#408EC9'
  },
  headerBackground: {
    backgroundColor: '#2788A8'
  }
});

export default DrawerNavigation