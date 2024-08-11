import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const evidenceSlice = createSlice({
    name: 'evidence',
    initialState: {
        allEvidenceList: [],
        healthEvidenceList: [],
        safetyEvidenceList: [],
        securityEvidenceList: [],
        environmentEvidenceList: []
    },
    reducers: {
        setAllEvidenceList: (state, action: PayloadAction<any>) => {
            state.allEvidenceList = action.payload;
        },
        setHealthEvidenceList: (state, action: PayloadAction<any>) => {
            state.healthEvidenceList = action.payload;
        },
        setSafetyEvidenceList: (state, action: PayloadAction<any>) => {
            state.safetyEvidenceList = action.payload
        },
        setSecurityEvidenceList: (state, action: PayloadAction<any>) => {
            state.securityEvidenceList = action.payload
        },
        setEnvironmentEvidenceList: (state, action: PayloadAction<any>) => {
            state.environmentEvidenceList = action.payload
        }
    }
});

export const { setHealthEvidenceList, setSafetyEvidenceList, setSecurityEvidenceList, setEnvironmentEvidenceList } = evidenceSlice.actions;

export const selectAllEvidenceList = (state: any) => state.evidence.allEvidenceList;

export const selectHealthEvidenceList = (state: any) => state.evidence.healthEvidenceList;
export const selectApprovedHealthEvidenceList = (state: any) => state.evidence.healthEvidenceList.filter((x: any) => x.status === 'Approved');
export const selectUnsubmittedHealthEvidenceList = (state: any) => state.evidence.healthEvidenceList.filter((x: any) => x.status === 'Unsubmitted');
export const selectUnderReviewHealthEvidenceList = (state: any) => state.evidence.healthEvidenceList.filter((x: any) => x.status === 'Under Review');

export const selectSafetyEvidenceList = (state: any) => state.evidence.safetyEvidenceList;
export const selectApprovedSafetyEvidenceList = (state: any) => state.evidence.safetyEvidenceList.filter((x: any) => x.status === 'Approved');
export const selectUnsubmittedSafetyEvidenceList = (state: any) => state.evidence.safetyEvidenceList.filter((x: any) => x.status === 'Unsubmitted');
export const selectUnderReviewSafetyEvidenceList = (state: any) => state.evidence.safetyEvidenceList.filter((x: any) => x.status === 'Under Review');

export const selectSecurityEvidenceList = (state: any) => state.evidence.securityEvidenceList;
export const selectApprovedSecurityEvidenceList = (state: any) => state.evidence.securityEvidenceList.filter((x: any) => x.status === 'Approved');
export const selectUnsubmittedSecurityEvidenceList = (state: any) => state.evidence.securityEvidenceList.filter((x: any) => x.status === 'Unsubmitted');
export const selectUnderReviewSecurityEvidenceList = (state: any) => state.evidence.securityEvidenceList.filter((x: any) => x.status === 'Under Review');

export const selectEnvironmentEvidenceList = (state: any) => state.evidence.environmentEvidenceList;
export const selectApprovedEnvironmentEvidenceList = (state: any) => state.evidence.environmentEvidenceList.filter((x: any) => x.status === 'Approved');
export const selectUnsubmittedEnvironmentEvidenceList = (state: any) => state.evidence.environmentEvidenceList.filter((x: any) => x.status === 'Unsubmitted');
export const selectUnderReviewEnvironmentEvidenceList = (state: any) => state.evidence.environmentEvidenceList.filter((x: any) => x.status === 'Under Review');

export default evidenceSlice.reducer;