import { fetchFriends } from '../../services/friendService'
import { AppThunk } from '../store'
import { setFriends, setStatus } from '../slices/friendSlice'

export const getFriends = (): AppThunk => async (dispatch) => {
    dispatch(setStatus('loading'))

    try {
        const response = await fetchFriends()

        if (response.data !== undefined) {
            dispatch(setFriends(response.data))
            dispatch(setStatus('idle'))
        } else {
            throw Error('no data')
        }
    } catch (e) {
        console.error(e)
        dispatch(setStatus('failed'))
    }
}
