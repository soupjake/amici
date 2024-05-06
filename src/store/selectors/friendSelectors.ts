import { RootState } from '../store'

export const selectFriends = (state: RootState) => state.friend.friends

export const selectFriendById =
    (id: string | undefined) => (state: RootState) =>
        id ? state.friend.friends.find((f) => f.id === id) : undefined

/* example of selector with param
export const selectWithParamExample = (param: string) => (state: RootState) => state.counter.status === param;

use as

const example = useAppSelector(selectWithParamExample("param"));
*/
