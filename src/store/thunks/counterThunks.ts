import { fetchCount } from '../../services/counterService'
import { AppThunk } from '../store'
import { incrementByAmount, setStatus } from '../slices/counterSlice'
import { selectCount } from '../selectors/counterSelectors'

export const incrementAsync =
    (amount: number): AppThunk =>
    async (dispatch) => {
        dispatch(setStatus('loading'))

        try {
            const response = await fetchCount(amount)

            if (response.data !== undefined) {
                dispatch(incrementByAmount(response.data))

                dispatch(setStatus('idle'))
            } else {
                throw Error('no data')
            }
        } catch (e) {
            console.error(e)
            dispatch(setStatus('failed'))
        }
    }

export const incrementIfOdd =
    (amount: number): AppThunk =>
    (dispatch, getState) => {
        const currentValue = selectCount(getState())

        if (currentValue % 2 === 1) {
            dispatch(incrementByAmount(amount))
        }
    }
