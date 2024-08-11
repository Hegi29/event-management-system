import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const urlParamSlice = createSlice({
    name: 'urlParam',
    initialState: { urlParam: '', isDraft: false, isCreateNewEvent: false, isCreateNewVenue: false, isDetailEvent: false, isDetailVenue: false },
    reducers: {
        setParam: (state, action: PayloadAction<any>) => {
            state.urlParam = action.payload;
        },
        setIsDraft: (state, action: PayloadAction<any>) => {
            state.isDraft = action.payload
        },
        setIsCreateNewEvent: (state, action: PayloadAction<any>) => {
            state.isCreateNewEvent = action.payload
        },
        setIsCreateNewVenue: (state, action: PayloadAction<any>) => {
            state.isCreateNewVenue = action.payload
        },
        setIsDetailEvent: (state, action: PayloadAction<any>) => {
            state.isDetailEvent = action.payload
        },
        setIsDetailVenue: (state, action: PayloadAction<any>) => {
            state.isDetailVenue = action.payload
        }
    }
});

export const { setParam, setIsDraft, setIsCreateNewEvent, setIsCreateNewVenue, setIsDetailEvent, setIsDetailVenue } = urlParamSlice.actions;

export const selectUrlParam = (state: any) => state.urlParam;

export default urlParamSlice.reducer;