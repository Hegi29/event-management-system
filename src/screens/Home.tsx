import { useState, useEffect } from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import { GetEventDetailByDateList, GetEventDetailList } from '../services/EventDetail';
import getActivityList from '../services/ActivityService';
import { EventRequestingRevision, ListActivity, TopVenue, UpcomingEvent } from '../components';
import { WelcomeContainer } from '../containers';

const Home: React.FunctionComponent<any> = () => {
    const [dataEvent, setDataEvent] = useState([]) as any;
    const [dataActivity, setDataActivity] = useState([]) as any;
    const [dataEventByDate, setDataEventByDate] = useState([]) as any;

    const [selectedDate, setSelectedDate] = useState({ startDate: new Date(), endDate: new Date() }) as any;

    const [isLoadedEvent, setIsLoadedEvent] = useState(false);
    const [isLoadedEventByDate, setIsLoadedEventByDate] = useState(false);
    const [isLoadedActivity, setIsLoadedActivity] = useState(false);

    const params = {
        isDraft: false,
        status: 'Requesting Revision',
        pageNumber: 1,
        pageSize: 10,
        email: ''
    };

    const fetchEventRequestingList = async () => {
        try {
            const response = await GetEventDetailList(params);
            if (response.status === axios.HttpStatusCode.Ok) {
                setDataEvent(response.data.data);
                setIsLoadedEvent(true);
            }
        } catch (error) {
            console.error(error);
            setIsLoadedEvent(false);
        }
    }

    const fetchEventByDateList = async () => {
        try {
            const param = { starDate: selectedDate.startDate, endDate: selectedDate.endDate };
            const response = await GetEventDetailByDateList(param);
            if (response.status === axios.HttpStatusCode.Ok) {
                setDataEventByDate(response.data);
                setIsLoadedEventByDate(true);
            }
        } catch (error) {
            console.error(error);
            setIsLoadedEventByDate(false);
        }
    }

    const fetchActivityList = async () => {
        try {
            const response = await getActivityList(params);
            if (response.status === axios.HttpStatusCode.Ok) {
                setDataActivity(response.data.data);
                setIsLoadedActivity(true);
            }
        } catch (error) {
            console.error(error);
            setIsLoadedActivity(false);
        }
    }

    useEffect(() => {
        fetchEventRequestingList();
        fetchEventByDateList();
        fetchActivityList();
    }, []);

    useEffect(() => {
        fetchEventByDateList();
    }, [selectedDate]);

    return (
        <ScrollView>
            <WelcomeContainer />
            {isLoadedEvent && <EventRequestingRevision data={dataEvent} />}
            <TopVenue />
            <UpcomingEvent setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
            {isLoadedActivity && <ListActivity data={dataActivity} />}
        </ScrollView>
    );
};

export default Home;