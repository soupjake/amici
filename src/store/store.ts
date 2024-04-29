import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import friendReducer from './slices/friendSlice'

export const store = configureStore({
    reducer: {
        friend: friendReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
