import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { Middleware } from 'redux'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import { persistStore } from 'reduxjs-toolkit-persist'
import createReducer, { CreateReducerArgs } from './reducer'
import logger from 'redux-logger'

const devMiddlewares = [
	import.meta.env.MODE === 'development' ? logger : null,
].filter(Boolean) as Middleware[]

export const createStore = (args: CreateReducerArgs) => {
	const store = configureStore({
		reducer: createReducer(args),
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}).concat(devMiddlewares),

		// [...devMiddlewares],
	})
	return { store, persistor: persistStore(store) }
}

export type Store = ReturnType<typeof createStore>['store']
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<Store['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = Store['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()

