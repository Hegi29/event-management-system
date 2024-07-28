import { StyleSheet, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Text } from '@rneui/themed';

import { LogomarkImage, MenuImage, NotificationImage } from '../assets/images';
import { CreateEvent, CreateVenue, Event, EventDraft, Home, Report, Setting, Support, Users, Venue } from '../screens';
import { APP_TITLE } from '../constants';
import CustomDrawerContent from './CustomDrawer';

const Drawer = createDrawerNavigator();

const TopLeftNav = () => {
  return (
    <View style={styles.containerHeader}>
      <Image source={LogomarkImage} style={styles.logo} />
      <Text style={styles.title}>{APP_TITLE}</Text>
    </View>
  )
}

const TopRightNav = ({ navigation }: any) => {
  return (
    <View style={{ ...styles.containerHeader, marginRight: 15 }}>
      <View style={{ ...styles.containerImage, marginRight: 10 }}>
        <Image source={NotificationImage} style={styles.imageRight} />
      </View>
      <View style={styles.containerImage}>
        <Image source={MenuImage} onPress={navigation.toggleDrawer} style={styles.imageRight} />
      </View>
    </View>
  )
}

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
  containerHeader: { flexDirection: 'row', justifyContent: 'flex-start' },
  containerImage: { backgroundColor: '#fff', padding: 5, borderRadius: 5 },
  drawerBackground: { backgroundColor: '#408EC9' },
  headerBackground: { backgroundColor: '#2788A8' },
  imageRight: { height: 20, width: 20 },
  logo: { marginLeft: 15, marginRight: 10, height: 40, width: 40 },
  title: { color: '#fff', fontWeight: 'bold', fontSize: 17, paddingTop: 8 }
})

export default DrawerNavigation