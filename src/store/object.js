import { createSlice } from '@reduxjs/toolkit';

const objectSlice = createSlice({
    name: 'object',
    initialState: {
        objects: [],
    },
    reducers: {
        objects: (state, action) => {
            state.objects = action.payload;
        },
        updateObjects: (state, action) => {
            state.objects = state.objects.map(
                (object) => action.payload.find((item) => item.id === object.id) || object
            );
        },
    },
});

export const { objects, updateObjects } = objectSlice.actions;

export default objectSlice.reducer;
