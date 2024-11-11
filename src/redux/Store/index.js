import { configureStore } from '@reduxjs/toolkit'
import features from '../Features'

export const store = configureStore({
    reducer: {
        userInfo: features,
    },
})