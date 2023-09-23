import {createSlice} from '@reduxjs/toolkit';

const initialValue = {
    isDark: false,
};

const themeSwitcherSlice = createSlice({
    name: 'themeSwitcher',
    initialState: initialValue,
    reducers: {
        themeSwitcher(state, action) {
            state.isDark = action.payload;
        },
    },
});

export const themeSwitcherActions = themeSwitcherSlice.actions;

export default themeSwitcherSlice.reducer;
