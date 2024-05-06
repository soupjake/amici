import { useEffect } from 'react'
import { getFriends } from './store/thunks/friendThunks'
import { useAppDispatch } from './hooks/storeHooks'
import { Route, Routes } from 'react-router-dom'
import { Search } from './ui/search/Search'
import { Friend } from './ui/friend/Friend'

export const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getFriends())
    }, [dispatch])

    return (
        <Routes>
            <Route path="/">
                <Route index element={<Search />} />
                <Route path="/friend/:friendId" element={<Friend />} />
            </Route>
        </Routes>
    )
}
