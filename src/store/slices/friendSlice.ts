import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Friend } from '../../types/friend'

type StatusType = 'idle' | 'loading' | 'failed'

export interface FriendState {
    friends: Friend[]
    status: StatusType
}

const initialState: FriendState = {
    friends: [],
    status: 'idle',
}

export const friendSlice = createSlice({
    name: 'friend',
    initialState,
    reducers: {
        setFriends: (state, action: PayloadAction<Friend[]>) => {
            state.friends = action.payload
        },
        setStatus: (state, action: PayloadAction<StatusType>) => {
            state.status = action.payload
        },
    },
})

export const { setFriends, setStatus } = friendSlice.actions

export default friendSlice.reducer
