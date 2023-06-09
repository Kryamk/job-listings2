import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import storage from 'redux-persist/es/storage';
import { filterReducer } from "./features/filter/filter-slice";
import { positionsReducer } from "./features/positions/positions-slice";
import logger from "redux-logger";


const rootReducer = combineReducers({
	filters: filterReducer,
	positions: positionsReducer
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['filters']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = []
if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger)
}

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(...middlewares)
})

export const persistor = persistStore(store)
