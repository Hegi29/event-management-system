import { useState } from 'react';
import { StyleSheet, View, } from 'react-native';

import { Tab } from '@rneui/themed';

import { CREATE_VENUE_TAB, EVENT_DETAIL_TAB_IDX } from '../constants';
import { EnvironmentTab, HealthTab, SafetyTab, SecurityTab, VenueDetailTab } from './tabs';

const CreateVenueTab = () => {
    const [index, setIndex] = useState(EVENT_DETAIL_TAB_IDX);

    return (
        <View>
            <Tab
                scrollable={true}
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: '#1072BA',
                    height: 3
                }}
                containerStyle={{
                    backgroundColor: 'white',
                    borderRadius: 20
                }}
            >
                <Tab.Item
                    title="1. Venue Detail"
                    titleStyle={index === 0 ? styles.tabItemActive : styles.tabItemInactive}
                    containerStyle={{
                        borderRadius: 20
                    }}
                // icon={{ name: 'home', type: 'material', color: '#1072BA' }}
                />
                <Tab.Item
                    title="2. Health Section"
                    titleStyle={index === 1 ? styles.tabItemActive : styles.tabItemInactive}
                    containerStyle={{
                        borderRadius: 20
                    }}
                // icon={{ name: 'home', type: 'material', color: '#1072BA' }}
                />
                <Tab.Item
                    title="3. Security Section"
                    titleStyle={index === 2 ? styles.tabItemActive : styles.tabItemInactive}
                    containerStyle={{
                        borderRadius: 20
                    }}
                // icon={{ name: 'home', type: 'material', color: '#1072BA' }}
                />
                <Tab.Item
                    title="4. Safety Section"
                    titleStyle={index === 3 ? styles.tabItemActive : styles.tabItemInactive}
                    containerStyle={{
                        borderRadius: 20
                    }}
                // icon={{ name: 'home', type: 'material', color: '#1072BA' }}
                />
                <Tab.Item
                    title="5. Environment Section"
                    titleStyle={index === 4 ? styles.tabItemActive : styles.tabItemInactive}
                    containerStyle={{
                        borderRadius: 20
                    }}
                // icon={{ name: 'home', type: 'material', color: '#1072BA' }}
                />
            </Tab>
            {index === CREATE_VENUE_TAB.VENUE_DETAIL && <VenueDetailTab index={index} setIndex={setIndex} tipe="venue" />}
            {index === CREATE_VENUE_TAB.HEALTH && <HealthTab index={index} setIndex={setIndex} tipe="venue" />}
            {index === CREATE_VENUE_TAB.SECURITY && <SecurityTab index={index} setIndex={setIndex} tipe="venue" />}
            {index === CREATE_VENUE_TAB.SAFETY && <SafetyTab index={index} setIndex={setIndex} tipe="venue" />}
            {index === CREATE_VENUE_TAB.ENVIRONMENT && <EnvironmentTab index={index} setIndex={setIndex} tipe="venue" />}
        </View>
    );
};

const styles = StyleSheet.create({
    tabItemActive: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    tabItemInactive: {
        fontSize: 17,
        color: 'grey'
    }
});

export default CreateVenueTab