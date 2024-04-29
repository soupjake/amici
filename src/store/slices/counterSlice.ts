import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type StatusType = 'idle' | 'loading' | 'failed'

export interface CounterState {
    value: number
    status: StatusType
}

const initialState: CounterState = {
    value: 0,
    status: 'idle',
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        setStatus: (state, action: PayloadAction<StatusType>) => {
            state.status = action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount, setStatus } =
    counterSlice.actions

export default counterSlice.reducer
