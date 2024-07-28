import { View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Text } from '@rneui/themed';

import { LogomarkImage, MenuImage, NotificationImage } from '../assets/images';
import { CreateEvent, CreateVenue, Event, EventDraft, Home, Report, Setting, Support, Users, Venue } from '../screens';
import CustomDrawerContent from './CustomDrawer';

const Drawer = createDrawerNavigator();

const TopLeftNav = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <Image source={LogomarkImage} style={{ marginLeft: 15, marginRight: 10, height: 40, width: 40 }} />
      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17, paddingTop: 8 }}>Nautical Nexus</Text>
    </View>
  )
}

const TopRightNav = ({ navigation }: any) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginRight: 15 }}>
      <View style={{ backgroundColor: '#fff', padding: 5, borderRadius: 5, marginRight: 10 }}>
        <Image source={NotificationImage} style={{ height: 20, width: 20 }} />
      </View>
      <View style={{ backgroundColor: '#fff', padding: 5, borderRadius: 5 }}>
        <Image source={MenuImage} onPress={navigation.toggleDrawer} style={{ height: 20, width: 20 }} />
      </View>
    </View>
  )
}

const DrawerNavigation = ({ navigationRef }: any) => {
  // useEffect(() => {
  //   console.log('x: ', props.navigationRef.getCurrentRoute());
  // }, [props]);

  return (
    <Drawer.Navigator screenOptions={({ navigation }) => ({
      drawerStyle: {
        backgroundColor: '#408EC9'
      },
      drawerPosition: 'right',
      title: "",
      headerStyle: { backgroundColor: '#2788A8' },
      // header: () => <Image source={{ uri: 'https://i.pinimg.com/736x/c6/82/73/c68273edeb333a7f3765c02ed509b55d.jpg' }} style={{height: 20, width: 20}} />,
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