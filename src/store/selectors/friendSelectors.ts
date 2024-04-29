import { RootState } from '../store'

export const selectFriends = (state: RootState) => state.friend.friends

export const selectStatus = (state: RootState) => state.friend.status

/* example of selector with param
export const selectWithParamExample = (param: string) => (state: RootState) => state.counter.status === param;

use as

const example = useAppSelector(selectWithParamExample("param"));
*/
