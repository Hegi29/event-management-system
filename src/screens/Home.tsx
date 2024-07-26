import { ScrollView } from 'react-native-gesture-handler';

import { EventRequestingRevision, ListActivity, TopVenue, UpcomingEvent } from '../components';

const Home: React.FunctionComponent<any> = () => {
    return (
        <ScrollView>
            <EventRequestingRevision />
            <TopVenue />
            <UpcomingEvent />
            <ListActivity />
        </ScrollView>
    );
};

export default Home;