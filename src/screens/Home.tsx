import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { selectAccount } from '../redux/reducers/accountSlice';

import { EventRequestingRevision, ListActivity, TopVenue, UpcomingEvent, VenueUnderReview, VenueWaitingForReview } from '../components';
import { WelcomeContainer } from '../containers';
import { useEffectHome } from '../hooks';
import { ROLE } from '../constants';

const Home: React.FunctionComponent<any> = () => {
    const [
        dataEventRequest,
        dataEventWaitingReview,
        dataTopVenue,
        dataEventByDate,
        dataActivity,
        dataVenueUnderReview,
        selectedDate,
        setSelectedDate,
        totalItemRequest,
        totalItemUnderReview,
        totalItemWaitingReview,
        totalItemTopVenue,
        totalItemListActivity,
        handleShowMoreVenueWaiting,
        handleShowMoreVenueReview,
        handleShowMoreEventRequest,
        handleShowMoreTopVenue,
        handleShowMoreActivityList
    ] = useEffectHome();

    const accountData = useSelector(selectAccount);
    const roleId = accountData.account.roleid;

    return (
        <ScrollView>
            <WelcomeContainer />
            {(roleId !== ROLE.USER && roleId !== ROLE.SUPER_ADMIN) &&
                <>
                    <VenueWaitingForReview data={dataEventWaitingReview} totalItemRequest={totalItemWaitingReview} handleShowMoreVenueWaiting={handleShowMoreVenueWaiting} />
                    <VenueUnderReview data={dataVenueUnderReview} totalItemRequest={totalItemUnderReview} />
                </>
            }

            {(roleId === ROLE.USER &&
                <>
                    <EventRequestingRevision data={dataEventRequest} totalItemRequest={totalItemRequest} />
                    <TopVenue data={dataTopVenue} handleShowMoreTopVenue={handleShowMoreTopVenue} />
                </>
            )}

            {(roleId === ROLE.SUPER_ADMIN &&
                <>
                    <VenueWaitingForReview data={dataEventWaitingReview} totalItemRequest={totalItemWaitingReview} handleShowMoreVenueWaiting={handleShowMoreVenueWaiting} />
                    <VenueUnderReview data={dataVenueUnderReview} totalItemRequest={totalItemUnderReview} handleShowMoreVenueReview={handleShowMoreVenueReview} />
                    <EventRequestingRevision data={dataEventRequest} totalItemRequest={totalItemRequest} handleShowMoreEventRequest={handleShowMoreEventRequest} />
                    <TopVenue data={dataTopVenue} totalItemRequest={totalItemTopVenue} handleShowMoreTopVenue={handleShowMoreTopVenue} />
                </>
            )}

            <UpcomingEvent dataEventByDate={dataEventByDate} setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
            <ListActivity data={dataActivity} totalItemRequest={totalItemListActivity} handleShowMoreActivityList={handleShowMoreActivityList} />
        </ScrollView>
    );
};

export default Home;