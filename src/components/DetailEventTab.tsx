import { useState } from 'react';
import { StyleSheet, View, } from 'react-native';

import { Card, Tab } from '@rneui/themed';
import { EVENT_DETAIL_TAB_IDX, CREATE_EVENT_TAB } from '../constants';
import { EnvironmentTab, EventDetailTab, HealthTab, SafetyTab, SecurityTab, VenueDetailTab } from './tabsDetail';
import { useSelector } from 'react-redux';
import { selectAccount } from '../redux/reducers/accountSlice';

const DetailEventTab = ({ dataDetail, setSelectedSection, dataQuestions, allEvidenceList, createComment }: any) => {
    const [index, setIndex] = useState(EVENT_DETAIL_TAB_IDX);

    const accountData = useSelector(selectAccount);
    const roleID = accountData.account.roleid;

    const forVerificator = (e: any) => {
        if (roleID === '2') {
            if (e === 0 || e === 1 || e === 2) {
                setIndex(e);
            }
        } else if (roleID === '3') {
            if (e === 0 || e === 1 || e === 3) {
                setIndex(e);
            }
        } else if (roleID === '4') {
            if (e === 0 || e === 1 || e === 4) {
                setIndex(e);
            }
        } else if (roleID === '5') {
            if (e === 0 || e === 1 || e === 5) {
                setIndex(e);
            }
        }
    }

    const forUser = (e: any) => {
        setIndex(e);
    }

    return (
        <Card containerStyle={styles.card}>
            <View>
                <Tab
                    scrollable={true}
                    value={index}
                    onChange={(e) => {
                        roleID === "1" || roleID === "6" ? forUser(e) : forVerificator(e);
                    }}
                    indicatorStyle={styles.indicator}
                    containerStyle={styles.tabContainer}
                >
                    <Tab.Item
                        title="Event Detail"
                        titleStyle={index === 0 ? styles.tabItemActive : styles.tabItemInactive}
                        containerStyle={styles.tabItemContainer}
                    // icon={{ name: 'home', type: 'material', color: '#1072BA' }}
                    />
                    <Tab.Item
                        title="Venue Detail"
                        titleStyle={index === 1 ? styles.tabItemActive : styles.tabItemInactive}
                        containerStyle={styles.tabItemContainer}
                    // icon={{ name: 'home', type: 'material', color: '#1072BA' }}
                    />
                    <Tab.Item
                        title="Health Section"
                        titleStyle={index === 2 ? styles.tabItemActive : styles.tabItemInactive}
                        containerStyle={styles.tabItemContainer}
                    // icon={{ name: 'home', type: 'material', color: '#1072BA' }}
                    />
                    <Tab.Item
                        title="Security Section"
                        titleStyle={index === 3 ? styles.tabItemActive : styles.tabItemInactive}
                        containerStyle={styles.tabItemContainer}
                    // icon={{ name: 'home', type: 'material', color: '#1072BA' }}
                    />
                    <Tab.Item
                        title="Safety Section"
                        titleStyle={index === 4 ? styles.tabItemActive : styles.tabItemInactive}
                        containerStyle={styles.tabItemContainer}
                    // icon={{ name: 'home', type: 'material', color: '#1072BA' }}
                    />
                    <Tab.Item
                        title="Environment Section"
                        titleStyle={index === 5 ? styles.tabItemActive : styles.tabItemInactive}
                        containerStyle={styles.tabItemContainer}
                    // icon={{ name: 'home', type: 'material', color: '#1072BA' }}
                    />
                </Tab>
                {index === CREATE_EVENT_TAB.EVENT_DETAIL && <EventDetailTab dataDetail={dataDetail} setIndex={setIndex} setSelectedSection={setSelectedSection} allEvidenceList={allEvidenceList} />}
                {index === CREATE_EVENT_TAB.VENUE_DETAIL && <VenueDetailTab dataDetail={dataDetail} setIndex={setIndex} setSelectedSection={setSelectedSection} allEvidenceList={allEvidenceList} />}
                {index === CREATE_EVENT_TAB.HEALTH && <HealthTab dataQuestions={dataQuestions} setIndex={setIndex} setSelectedSection={setSelectedSection} allEvidenceList={allEvidenceList} createComment={createComment} />}
                {index === CREATE_EVENT_TAB.SECURITY && <SecurityTab dataQuestions={dataQuestions} setIndex={setIndex} setSelectedSection={setSelectedSection} allEvidenceList={allEvidenceList} createComment={createComment} />}
                {index === CREATE_EVENT_TAB.SAFETY && <SafetyTab dataQuestions={dataQuestions} setIndex={setIndex} setSelectedSection={setSelectedSection} allEvidenceList={allEvidenceList} createComment={createComment} />}
                {index === CREATE_EVENT_TAB.ENVIRONMENT && <EnvironmentTab dataQuestions={dataQuestions} setIndex={setIndex} setSelectedSection={setSelectedSection} allEvidenceList={allEvidenceList} createComment={createComment} />}
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        marginBottom: 40,
        padding: 0,
        paddingBottom: 15
    },
    indicator: {
        backgroundColor: '#1072BA',
        height: 3
    },
    tabContainer: {
        backgroundColor: 'white',
        borderRadius: 20
    },
    tabItemActive: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    tabItemContainer: {
        borderRadius: 20
    },
    tabItemInactive: {
        fontSize: 17,
        color: 'grey'
    }
});

export default DetailEventTab