import { ScrollView } from 'react-native-gesture-handler';

import { EventRequestingRevision, ListActivity, TopVenue, UpcomingEvent } from '../components';
import { WelcomeContainer } from '../containers';

const Home: React.FunctionComponent<any> = ({ navigation }: any) => {
    return (
        <ScrollView>
            <WelcomeContainer navigation={navigation} />
            <EventRequestingRevision />
            <TopVenue />
            <UpcomingEvent />
            <ListActivity />
        </ScrollView>
    );
};

export default Home;