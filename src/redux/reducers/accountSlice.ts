import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        account: {
            email: '',
            photo: '',
            fullName: '',
            firstName: '',
            roleName: '',
            roleId: '',
            userId: '',
        }
    },
    reducers: {
        setData: (state, action: PayloadAction<any>) => {
            state.account = action.payload;
        }
    }
});

export const { setData } = accountSlice.actions;

export const selectAccount = (state: any) => state.account;

export default accountSlice.reducer;