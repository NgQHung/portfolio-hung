import {createSlice} from '@reduxjs/toolkit';

interface InitialValue {
    selectedProject: IProjectData[];
}

const initialValue: InitialValue = {
    selectedProject: [],
};

const projectSlice = createSlice({
    name: 'project',
    initialState: initialValue,
    reducers: {
        selectedProject(state, action) {
            state.selectedProject = action.payload;
        },
    },
});

export const projectActions = projectSlice.actions;

export default projectSlice.reducer;
