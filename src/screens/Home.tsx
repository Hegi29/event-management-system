import { ScrollView } from 'react-native-gesture-handler';

import { EventRequestingRevision, ListActivity, TopVenue, UpcomingEvent } from '../components';
import { WelcomeContainer } from '../containers';

const Home: React.FunctionComponent<any> = () => {
    return (
        <ScrollView>
            <WelcomeContainer />
            <EventRequestingRevision />
            <TopVenue />
            <UpcomingEvent />
            <ListActivity />
        </ScrollView>
    );
};

export default Home;