import { configureStore } from '@reduxjs/toolkit';
import object from './object';

const store = configureStore({
    reducer: {
        object,
    },
});

export default store;
