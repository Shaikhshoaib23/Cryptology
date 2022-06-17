import { configureStore } from '@reduxjs/toolkit';

import { cryptoapi } from '../services/cryptoapi';
import { cryptoNewsapi } from '../services/cryptoNewsapi';

export default configureStore({
    reducer: {
        [cryptoapi.reducerPath]: cryptoapi.reducer,
        [cryptoNewsapi.reducerPath]: cryptoNewsapi.reducer,
    },
});