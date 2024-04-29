import { RootState } from '../store'

export const selectCount = (state: RootState) => state.counter.value

export const selectStatus = (state: RootState) => state.counter.status

/* example of selector with param
export const selectWithParamExample = (param: string) => (state: RootState) => state.counter.status === param;

use as

const example = useAppSelector(selectWithParamExample("param"));
*/
