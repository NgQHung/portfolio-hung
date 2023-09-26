import {createSlice} from '@reduxjs/toolkit';

interface InitialValue {
    selectedExperience: IExperienceData[];
}

const initialValue: InitialValue = {
    selectedExperience: [],
};

const experienceSlice = createSlice({
    name: 'experience',
    initialState: initialValue,
    reducers: {
        selectedExperience(state, action) {
            state.selectedExperience = action.payload;
        },
    },
});

export const experienceActions = experienceSlice.actions;

export default experienceSlice.reducer;
