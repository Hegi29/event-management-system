import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const createEventSlice = createSlice({
    name: 'createEvent',
    initialState: {
        eventDetail: {
            functionName: '',
            activityName: '',
            activityDesc: '',
            activityType: '',
            eventOrganizer: '',
            activityStartDate: '',
            activityEndDate: '',
            contacts: [],
            createdBy: '',
            eventId: '7f6b8101-4c55-446e-b8fe-0aa90edb5e91'
        },
        venueDetail: {
            venueId: ''
        }
    },
    reducers: {
        setDataEventDetail: (state, action: PayloadAction<any>) => {
            state.eventDetail = action.payload;
        },
        setEventID: (state, action: PayloadAction<any>) => {
            state.eventDetail.eventId = action.payload;
        },
        setVenueID: (state, action: PayloadAction<any>) => {
            state.venueDetail.venueId = action.payload;
        }
    }
});

export const { setDataEventDetail, setEventID, setVenueID } = createEventSlice.actions;

export const selectCreateEvent = (state: any) => state.createEvent;

export default createEventSlice.reducer;