import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'


const store = configureStore({
	reducer: {
		// Add your reducers here
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production'
})

export default store